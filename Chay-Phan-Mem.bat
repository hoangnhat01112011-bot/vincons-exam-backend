@echo off
title Khoi Chay Phan Mem Thi Sat Hach Bac Tho - Vincons
:: Tu dong chuyen den thu muc chua file bat nay
cd /d "%~dp0"
:: Chay server bang Python mac dinh cua he thong
python main.py
if %errorlevel% neq 0 (
    echo ========================================================
    echo [LOI] Khong tim thay trinh khoi chay Python tren may nay!
    echo Vui long tai va cai dat Python (phien ban 3.8 tro len) tu:
    echo https://www.python.org/downloads/
    echo ========================================================
    pause
)
