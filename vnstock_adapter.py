import sys
import os

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

import uvicorn
from fastapi import FastAPI, Query
from vnstock.api.quote import Quote
from datetime import datetime
import pandas as pd

app = FastAPI(title="VNStock Adapter for TSP")

INDEX_MAP = {
    "000001.SH": "VNINDEX",
    "399001.SZ": "VN30",
    "399006.SZ": "HNX",
    "000680.SH": "UPCOM"
}

@app.get("/api/daily")
def get_daily_data(
    symbols: str = Query("", description="Ví dụ: FPT,TCB,VNINDEX"),
    start_time: str = Query("2023-01-01"),
    end_time: str = Query("")
):
    start_str = start_time[:10] if start_time else "2023-01-01"
    end_str = end_time[:10] if end_time else datetime.now().strftime("%Y-%m-%d")
        
    symbol_list = [s.strip() for s in symbols.split(",") if s.strip()]
    results = []
    
    for raw_sym in symbol_list:
        sym = INDEX_MAP.get(raw_sym, raw_sym)
        try:
            q = Quote(symbol=sym, source='VCI')
            df = q.history(start=start_str, end=end_str, interval='1D')
            if df is not None and not df.empty:
                for idx, row in df.iterrows():
                    date_val = str(idx.date()) if isinstance(idx, pd.Timestamp) else str(row.get('time', idx))[:10]
                    results.append({
                        "symbol": raw_sym,
                        "date": date_val,
                        "open": float(row['open']),
                        "high": float(row['high']),
                        "low": float(row['low']),
                        "close": float(row['close']),
                        "volume": float(row['volume']),
                        "amount": float(row.get('turnover', row['volume'] * row['close']))
                    })
        except Exception as e:
            print(f"Lỗi khi tải mã {sym}: {e}")
            
    return {"data": results}

@app.get("/api/realtime")
def get_realtime_data(symbols: str = Query("")):
    return {"data": []}

if __name__ == "__main__":
    print("Khởi chạy máy chủ VNStock Adapter tại http://0.0.0.0:8091")
    uvicorn.run(app, host="0.0.0.0", port=8091)
