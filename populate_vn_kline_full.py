import os
import shutil
from pathlib import Path
import polars as pl
from datetime import datetime, date, timedelta
import math

vn_stocks = [
    ("FPT", "Tập đoàn FPT", "HOSE", 132000.0, 1.85, 289350000000.0, 0.022),
    ("TCB", "NH Techcombank", "HOSE", 24500.0, 2.30, 312000000000.0, 0.031),
    ("VHM", "Vinhomes", "HOSE", 41200.0, -0.85, 195000000000.0, 0.018),
    ("SSI", "Chứng khoán SSI", "HOSE", 31500.0, 3.45, 450000000000.0, 0.042),
    ("HPG", "Thép Hòa Phát", "HOSE", 28900.0, 1.40, 520000000000.0, 0.035),
    ("VCB", "Vietcombank", "HOSE", 92000.0, 0.65, 142000000000.0, 0.009),
    ("MWG", "Thế Giới Di Động", "HOSE", 68500.0, 2.10, 260000000000.0, 0.025),
    ("MSN", "Tập đoàn Masan", "HOSE", 76200.0, 1.20, 180000000000.0, 0.019),
    ("VNM", "Vinamilk", "HOSE", 67800.0, -0.45, 130000000000.0, 0.012),
    ("DGC", "Hóa chất Đức Giang", "HOSE", 118000.0, 4.20, 340000000000.0, 0.038),
    ("STB", "Sacombank", "HOSE", 32800.0, 2.80, 390000000000.0, 0.039),
    ("MBB", "MBBank", "HOSE", 25100.0, 1.60, 290000000000.0, 0.027),
    ("VPB", "VPBank", "HOSE", 19800.0, 0.90, 240000000000.0, 0.021),
    ("ACB", "ACB Bank", "HOSE", 25400.0, 1.10, 210000000000.0, 0.020),
    ("GAS", "PV GAS", "HOSE", 79500.0, 0.50, 95000000000.0, 0.008),
    ("PVD", "Dầu khí PVD", "HOSE", 29400.0, 3.10, 175000000000.0, 0.032),
    ("PVS", "Dầu khí PVS", "HNX", 42100.0, 2.90, 210000000000.0, 0.034),
    ("VND", "VNDIRECT", "HOSE", 16800.0, 2.45, 310000000000.0, 0.036),
    ("VCI", "Chứng khoán Vietcap", "HOSE", 48500.0, 3.80, 280000000000.0, 0.040),
    ("HCM", "Chứng khoán HSC", "HOSE", 30200.0, 3.10, 220000000000.0, 0.033),
    ("VIC", "Vingroup", "HOSE", 43500.0, -0.30, 160000000000.0, 0.014),
    ("VRE", "Vincom Retail", "HOSE", 20500.0, 0.40, 120000000000.0, 0.015),
    ("KDH", "Nhà Khang Điền", "HOSE", 36200.0, 1.70, 140000000000.0, 0.022),
    ("NLG", "Nam Long", "HOSE", 42800.0, 2.15, 165000000000.0, 0.026),
    ("FRT", "FPT Retail", "HOSE", 178000.0, 5.20, 290000000000.0, 0.045),
    ("DGW", "Digiworld", "HOSE", 62400.0, 3.60, 185000000000.0, 0.037),
    ("BSR", "Lọc hóa dầu Bình Sơn", "UPCOM", 24200.0, 1.80, 230000000000.0, 0.024),
]

vn_indices = [
    ("VNINDEX", "VN-INDEX", 1832.12, 0.03, 18846143157000.0),
    ("VN30", "VN30", 1982.96, 0.19, 12800000000000.0),
    ("HNX", "HNX-INDEX", 284.77, 0.75, 2100000000000.0),
    ("UPCOM", "UPCoM", 108.50, 0.42, 950000000000.0),
    ("000001.SH", "VN-INDEX", 1832.12, 0.03, 18846143157000.0),
    ("399001.SZ", "VN30", 1982.96, 0.19, 12800000000000.0),
    ("399006.SZ", "HNX-INDEX", 284.77, 0.75, 2100000000000.0),
    ("000680.SH", "UPCoM", 108.50, 0.42, 950000000000.0),
]

def build_data():
    base_dir = Path("tick-stock-panel/data")
    daily_dir = base_dir / "kline_daily"
    enriched_dir = base_dir / "kline_daily_enriched"
    idx_daily_dir = base_dir / "kline_index_daily"
    idx_enriched_dir = base_dir / "kline_index_enriched"

    # Clean out ALL old dates
    for d in (daily_dir, enriched_dir, idx_daily_dir, idx_enriched_dir):
        if d.exists():
            for p in d.glob("date=*"):
                shutil.rmtree(p, ignore_errors=True)

    # Generate 90 trading days ending at 2026-08-31
    end_date = date(2026, 8, 31)
    trading_dates = []
    curr = end_date
    while len(trading_dates) < 90:
        if curr.weekday() < 5:  # Monday to Friday
            trading_dates.append(curr)
        curr -= timedelta(days=1)
    trading_dates.reverse()

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

    for day_idx, d in enumerate(trading_dates):
        ds = d.isoformat()
        out_d = daily_dir / f"date={ds}"
        out_e = enriched_dir / f"date={ds}"
        out_id = idx_daily_dir / f"date={ds}"
        out_ie = idx_enriched_dir / f"date={ds}"

        for p in (out_d, out_e, out_id, out_ie):
            p.mkdir(parents=True, exist_ok=True)

        stock_records = []
        time_factor = (day_idx - 89) / 89.0

        for sym, name, board, final_price, final_pct, final_amt, tr in vn_stocks:
            base_p = final_price * (1.0 + time_factor * 0.15)
            wiggle = math.sin(day_idx * 0.5 + len(sym)) * 0.02
            close_p = round(base_p * (1.0 + wiggle), 2)
            prev_p = round(close_p / 1.01, 2)
            open_p = round(prev_p * 1.002, 2)
            high_p = round(max(open_p, close_p) * 1.008, 2)
            low_p = round(min(open_p, close_p) * 0.992, 2)
            chg = round(close_p - prev_p, 2)
            pct = round(chg / prev_p, 4)
            amt = final_amt * (0.8 + 0.4 * abs(wiggle))
            vol = round(amt / close_p, 0)

            stock_records.append({
                "symbol": sym,
                "code": sym,
                "name": name,
                "open": float(open_p),
                "high": float(high_p),
                "low": float(low_p),
                "close": float(close_p),
                "volume": float(vol),
                "amount": float(amt),
                "change_amount": float(chg),
                "change_pct": float(pct),
                "turnover_rate": float(tr),
                "vol_ratio_5d": 1.15,
                "consecutive_limit_ups": 0,
                "signal_limit_up": False,
                "signal_broken_limit_up": False,
                "signal_limit_down": False,
                "ma5": float(close_p * 0.99),
                "ma20": float(close_p * 0.96),
                "ma60": float(close_p * 0.92),
                "high_60d": float(close_p * 1.1),
                "low_60d": float(close_p * 0.85),
                "signal_n_day_high": pct > 0.03,
                "signal_n_day_low": False,
                "date": d,
            })

        df_stock = pl.DataFrame(stock_records, schema=schema_stock)
        df_stock.write_parquet(out_d / "part.parquet")
        df_stock.write_parquet(out_e / "part.parquet")

        index_records = []
        for sym, name, final_price, final_pct, final_amt in vn_indices:
            base_p = final_price * (1.0 + time_factor * 0.1)
            wiggle = math.sin(day_idx * 0.3 + len(sym)) * 0.015
            close_p = round(base_p * (1.0 + wiggle), 2)
            prev_p = round(close_p / 1.008, 2)
            open_p = round(prev_p * 1.001, 2)
            high_p = round(max(open_p, close_p) * 1.005, 2)
            low_p = round(min(open_p, close_p) * 0.995, 2)
            chg = round(close_p - prev_p, 2)
            pct = round(chg / prev_p, 4)
            amt = final_amt * (0.9 + 0.2 * abs(wiggle))
            vol = round(amt / close_p, 0)

            index_records.append({
                "symbol": sym,
                "code": sym,
                "name": name,
                "open": float(open_p),
                "high": float(high_p),
                "low": float(low_p),
                "close": float(close_p),
                "volume": float(vol),
                "amount": float(amt),
                "change_amount": float(chg),
                "change_pct": float(pct),
                "date": d,
            })

        df_index = pl.DataFrame(index_records, schema=schema_index)
        df_index.write_parquet(out_id / "part.parquet")
        df_index.write_parquet(out_ie / "part.parquet")

    print(f"Successfully cleaned all old Parquet and regenerated 90 days of Stock & Index Parquet datasets!")

if __name__ == "__main__":
    build_data()
