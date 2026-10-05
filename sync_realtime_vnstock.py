import os
import shutil
import logging
import math
from pathlib import Path
from datetime import date, datetime, timedelta
import polars as pl
from vnstock import Quote

logger = logging.getLogger(__name__)

INDEX_MAP = {
    "VNINDEX": "VN-INDEX",
    "VN30": "VN30",
    "HNXINDEX": "HNX-INDEX",
    "UPCOMINDEX": "UPCoM",
}

STOCKS = [
    ("FPT", "Tập đoàn FPT"),
    ("TCB", "NH Techcombank"),
    ("VHM", "Vinhomes"),
    ("SSI", "Chứng khoán SSI"),
    ("HPG", "Thép Hòa Phát"),
    ("VCB", "Vietcombank"),
    ("MWG", "Thế Giới Di Động"),
    ("MSN", "Tập đoàn Masan"),
    ("VNM", "Vinamilk"),
    ("DGC", "Hóa chất Đức Giang"),
    ("STB", "Sacombank"),
    ("MBB", "MBBank"),
    ("VPB", "VPBank"),
    ("ACB", "ACB Bank"),
    ("GAS", "PV GAS"),
    ("PVD", "Dầu khí PVD"),
    ("PVS", "Dầu khí PVS"),
    ("VND", "VNDIRECT"),
    ("VCI", "Chứng khoán Vietcap"),
    ("HCM", "Chứng khoán HSC"),
    ("VIC", "Vingroup"),
    ("VRE", "Vincom Retail"),
    ("KDH", "Nhà Khang Điền"),
    ("NLG", "Nam Long"),
    ("FRT", "FPT Retail"),
    ("DGW", "Digiworld"),
    ("BSR", "Lọc hóa dầu Bình Sơn"),
]

def fetch_and_build():
    script_dir = Path(__file__).resolve().parent
    base_dir = script_dir / "tick-stock-panel" / "data"
    daily_dir = base_dir / "kline_daily"
    enriched_dir = base_dir / "kline_daily_enriched"
    idx_daily_dir = base_dir / "kline_index_daily"
    idx_enriched_dir = base_dir / "kline_index_enriched"

    for d in (daily_dir, enriched_dir, idx_daily_dir, idx_enriched_dir):
        if d.exists():
            for p in d.glob("date=*"):
                shutil.rmtree(p, ignore_errors=True)
        d.mkdir(parents=True, exist_ok=True)

    today = date.today()
    start_str = (today - timedelta(days=150)).strftime("%Y-%m-%d")
    end_str = today.strftime("%Y-%m-%d")

    print(f"Executing Vnstock Real-time Sync Engine for Stocks & Indices ({start_str} -> {end_str})...")

    # 1. Sync Indices
    index_by_date = {}
    for sym, name in INDEX_MAP.items():
        try:
            q = Quote(symbol=sym, source='vci')
            df_pd = q.history(start=start_str, end=end_str)
            if df_pd is not None and not df_pd.empty:
                for _, row in df_pd.iterrows():
                    d_obj = datetime.strptime(str(row['time'])[:10], "%Y-%m-%d").date()
                    ds = d_obj.isoformat()
                    if ds not in index_by_date:
                        index_by_date[ds] = []
                    
                    open_p = float(row['open'])
                    high_p = float(row['high'])
                    low_p = float(row['low'])
                    close_p = float(row['close'])
                    vol = float(row.get('volume', 0))
                    prev_p = open_p if open_p > 0 else close_p
                    chg_amt = round(close_p - prev_p, 2)
                    chg_pct = round(chg_amt / prev_p, 4) if prev_p > 0 else 0.0

                    index_records = [{
                        "symbol": sym,
                        "code": sym,
                        "name": name,
                        "open": open_p,
                        "high": high_p,
                        "low": low_p,
                        "close": close_p,
                        "volume": vol,
                        "amount": vol * close_p,
                        "change_amount": chg_amt,
                        "change_pct": chg_pct,
                        "date": d_obj,
                    }]

                    alias = "000001.SH" if sym == "VNINDEX" else ("399001.SZ" if sym == "VN30" else ("399006.SZ" if sym == "HNXINDEX" else "000680.SH"))
                    index_records.append({
                        "symbol": alias,
                        "code": alias,
                        "name": name,
                        "open": open_p,
                        "high": high_p,
                        "low": low_p,
                        "close": close_p,
                        "volume": vol,
                        "amount": vol * close_p,
                        "change_amount": chg_amt,
                        "change_pct": chg_pct,
                        "date": d_obj,
                    })

                    index_by_date[ds].extend(index_records)
        except Exception as e:
            print(f"Warning: Failed to fetch index {sym} from Vnstock: {e}")

    # Write Index Parquet files
    schema_index = {
        "symbol": pl.Utf8,
        "code": pl.Utf8,
        "name": pl.Utf8,
        "open": pl.Float64,
        "high": pl.Float64,
        "low": pl.Float64,
        "close": pl.Float64,
        "volume": pl.Float64,
        "amount": pl.Float64,
        "change_amount": pl.Float64,
        "change_pct": pl.Float64,
        "date": pl.Date,
    }

    for ds, recs in index_by_date.items():
        if recs:
            out_id = idx_daily_dir / f"date={ds}"
            out_ie = idx_enriched_dir / f"date={ds}"
            out_id.mkdir(parents=True, exist_ok=True)
            out_ie.mkdir(parents=True, exist_ok=True)
            df_idx = pl.DataFrame(recs, schema=schema_index)
            df_idx.write_parquet(out_id / "part.parquet")
            df_idx.write_parquet(out_ie / "part.parquet")

    # 2. Sync Real Stock Prices
    stock_by_date = {}
    for sym, name in STOCKS:
        try:
            q = Quote(symbol=sym, source='vci')
            df_pd = q.history(start=start_str, end=end_str)
            if df_pd is not None and not df_pd.empty:
                prices = df_pd['close'].tolist()
                for i, row in df_pd.iterrows():
                    d_obj = datetime.strptime(str(row['time'])[:10], "%Y-%m-%d").date()
                    ds = d_obj.isoformat()
                    if ds not in stock_by_date:
                        stock_by_date[ds] = []
                    
                    open_p = float(row['open'])
                    high_p = float(row['high'])
                    low_p = float(row['low'])
                    close_p = float(row['close'])
                    vol = float(row.get('volume', 0))
                    prev_p = prices[i - 1] if i > 0 else open_p
                    chg_amt = round(close_p - prev_p, 2)
                    chg_pct = round(chg_amt / prev_p, 4) if prev_p > 0 else 0.0
                    amt = vol * close_p * 1000

                    # Compute MAs on slice
                    sub = prices[max(0, i - 59): i + 1]
                    ma5 = sum(sub[-5:]) / len(sub[-5:]) if len(sub) >= 1 else close_p
                    ma20 = sum(sub[-20:]) / len(sub[-20:]) if len(sub) >= 1 else close_p
                    ma60 = sum(sub[-60:]) / len(sub[-60:]) if len(sub) >= 1 else close_p

                    stock_by_date[ds].append({
                        "symbol": sym,
                        "code": sym,
                        "name": name,
                        "open": open_p,
                        "high": high_p,
                        "low": low_p,
                        "close": close_p,
                        "volume": vol,
                        "amount": amt,
                        "raw_close": close_p,
                        "raw_high": high_p,
                        "raw_low": low_p,
                        "change_amount": chg_amt,
                        "change_pct": chg_pct,
                        "turnover_rate": 0.02,
                        "vol_ratio_5d": 1.15,
                        "consecutive_limit_ups": 0,
                        "signal_limit_up": False,
                        "signal_broken_limit_up": False,
                        "signal_limit_down": False,
                        "ma5": float(ma5),
                        "ma20": float(ma20),
                        "ma60": float(ma60),
                        "high_60d": float(max(sub) if sub else close_p),
                        "low_60d": float(min(sub) if sub else close_p),
                        "signal_n_day_high": chg_pct > 0.03,
                        "signal_n_day_low": False,
                        "date": d_obj,
                    })
        except Exception as e:
            print(f"Warning: Failed to fetch stock {sym} from Vnstock: {e}")

    schema_stock = {
        "symbol": pl.Utf8,
        "code": pl.Utf8,
        "name": pl.Utf8,
        "open": pl.Float64,
        "high": pl.Float64,
        "low": pl.Float64,
        "close": pl.Float64,
        "volume": pl.Float64,
        "amount": pl.Float64,
        "raw_close": pl.Float64,
        "raw_high": pl.Float64,
        "raw_low": pl.Float64,
        "change_amount": pl.Float64,
        "change_pct": pl.Float64,
        "turnover_rate": pl.Float64,
        "vol_ratio_5d": pl.Float64,
        "consecutive_limit_ups": pl.UInt32,
        "signal_limit_up": pl.Boolean,
        "signal_broken_limit_up": pl.Boolean,
        "signal_limit_down": pl.Boolean,
        "ma5": pl.Float64,
        "ma20": pl.Float64,
        "ma60": pl.Float64,
        "high_60d": pl.Float64,
        "low_60d": pl.Float64,
        "signal_n_day_high": pl.Boolean,
        "signal_n_day_low": pl.Boolean,
        "date": pl.Date,
    }

    for ds, recs in stock_by_date.items():
        if recs:
            out_d = daily_dir / f"date={ds}"
            out_e = enriched_dir / f"date={ds}"
            out_d.mkdir(parents=True, exist_ok=True)
            out_e.mkdir(parents=True, exist_ok=True)
            df_stk = pl.DataFrame(recs, schema=schema_stock)
            df_stk.write_parquet(out_d / "part.parquet")
            df_stk.write_parquet(out_e / "part.parquet")

    print(f"Real-time Vnstock Sync completed for {len(stock_by_date)} trading dates!")
    try:
        import urllib.request
        req = urllib.request.Request("http://127.0.0.1:3018/api/data/refresh-cache", method="POST")
        urllib.request.urlopen(req, timeout=5)
        print("Successfully notified backend to refresh cache!")
    except Exception as e:
        print(f"Note: Backend cache refresh notification skipped: {e}")

if __name__ == "__main__":
    fetch_and_build()
