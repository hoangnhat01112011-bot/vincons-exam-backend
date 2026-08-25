@echo off
title Khoi Chay Phan Mem Thi Sat Hach Bac Tho - Vincons
cd /d "%~dp0"

echo ========================================================
echo   KHOI CHAY PHAN MEM THI SAT HACH BAC THO - VINCONS
echo ========================================================
echo.

:: 1. Kiem tra Python trong Virtual Environment local
set "PYTHON_EXE="
if exist "%USERPROFILE%\.venv\Scripts\python.exe" (
    set "PYTHON_EXE=%USERPROFILE%\.venv\Scripts\python.exe"
    goto FOUND_PYTHON
)

:: 2. Kiem tra Python trong AppData Local Programs
if exist "%LocalAppData%\Programs\Python\Python312\python.exe" (
    set "PYTHON_EXE=%LocalAppData%\Programs\Python\Python312\python.exe"
    goto FOUND_PYTHON
)
if exist "%LocalAppData%\Programs\Python\Python311\python.exe" (
    set "PYTHON_EXE=%LocalAppData%\Programs\Python\Python311\python.exe"
    goto FOUND_PYTHON
)
if exist "%LocalAppData%\Programs\Python\Python310\python.exe" (
    set "PYTHON_EXE=%LocalAppData%\Programs\Python\Python310\python.exe"
    goto FOUND_PYTHON
)

:: 3. Kiem tra command python mac dinh trong PATH
where python >nul 2>nul
if %errorlevel% equ 0 (
    set "PYTHON_EXE=python"
    goto FOUND_PYTHON
)

:: 4. Kiem tra command py mac dinh
where py >nul 2>nul
if %errorlevel% equ 0 (
    set "PYTHON_EXE=py"
    goto FOUND_PYTHON
)

echo ========================================================
echo [LOI] Khong tim thay trinh khoi chay Python tren may nay!
echo Vui long tai va cai dat Python tu https://www.python.org/
echo ========================================================
pause
exit /b 1

:FOUND_PYTHON
echo [+] Da tim thay Python: %PYTHON_EXE%
echo [+] Dang khoi chay may chu Vincons HTTP Server tai http://localhost:8000 ...
echo.

:: Tu dong mo trinh duyệt web dang nhap thi
start http://localhost:8000/index.html

:: Chay main.py
"%PYTHON_EXE%" main.py

if %errorlevel% neq 0 (
    echo.
    echo ========================================================
    echo [LOI] Co loi xay ra khi chay main.py
    echo ========================================================
    pause
)
