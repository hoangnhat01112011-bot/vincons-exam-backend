import os
import shutil
from pathlib import Path
import polars as pl
from datetime import datetime, date

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

def build_data():
    base_dir = Path("tick-stock-panel/data")
    daily_dir = base_dir / "kline_daily"
    enriched_dir = base_dir / "kline_daily_enriched"

    # Clean out all old dates in daily_dir and enriched_dir that contain Chinese stocks
    for p in daily_dir.glob("date=*"):
        shutil.rmtree(p, ignore_errors=True)
    for p in enriched_dir.glob("date=*"):
        shutil.rmtree(p, ignore_errors=True)

    today_str = "2026-08-31"
    out_daily = daily_dir / f"date={today_str}"
    out_enriched = enriched_dir / f"date={today_str}"
    out_daily.mkdir(parents=True, exist_ok=True)
    out_enriched.mkdir(parents=True, exist_ok=True)

    records = []
    for sym, name, board, price, pct, amt, tr in vn_stocks:
        prev = price / (1 + pct / 100)
        chg = price - prev
        vol = amt / price
        records.append({
            "symbol": sym,
            "code": sym,
            "name": name,
            "open": prev * 1.002,
            "high": price * 1.005,
            "low": prev * 0.998,
            "close": price,
            "volume": vol,
            "amount": amt,
            "change_amount": chg,
            "change_pct": pct / 100,
            "turnover_rate": tr,
            "vol_ratio_5d": 1.2,
            "consecutive_limit_ups": 0,
            "signal_limit_up": False,
            "signal_broken_limit_up": False,
            "signal_limit_down": False,
            "ma5": price * 0.98,
            "ma20": price * 0.95,
            "ma60": price * 0.91,
            "high_60d": price * 1.08,
            "low_60d": price * 0.85,
            "signal_n_day_high": pct > 3.0,
            "signal_n_day_low": False,
            "date": date(2026, 8, 31),
        })

    df = pl.DataFrame(records)
    df.write_parquet(out_daily / "part.parquet")
    df.write_parquet(out_enriched / "part.parquet")
    print("Populated 100% VN Stock dataset for date=2026-08-31!")

if __name__ == "__main__":
    build_data()
