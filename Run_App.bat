@echo off
echo ==========================================
echo Khoi dong VNStock Adapter va Tick-Stock-Panel
echo ==========================================

cd /d "d:\LINH TINH\AI\PHAN MEM\vincons-test-app"
set "PYTHON_EXE=d:\LINH TINH\AI\PHAN MEM\vincons-test-app\.venv\Scripts\python.exe"

:: Check if Docker daemon is running, start if not
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo Dang mo Docker Desktop, vui long cho trong giay lat...
    start "" "C:\Program Files\Docker\Docker\Docker Desktop.exe"
    :wait_docker
    timeout /t 5 >nul
    docker info >nul 2>&1
    if %errorlevel% neq 0 (
        echo Dang cho Docker khoi dong...
        goto wait_docker
    )
)

:: Start Adapter in background
echo Dang khoi dong VNStock Adapter API...
start /b "" "%PYTHON_EXE%" -m uvicorn vnstock_adapter:app --host 0.0.0.0 --port 8095

:: Start Tick-Stock-Panel Backend
echo Dang khoi dong Backend Tick-Stock-Panel...
cd /d "d:\LINH TINH\AI\PHAN MEM\vincons-test-app\tick-stock-panel\backend"
start /b "" "%PYTHON_EXE%" -m uvicorn app.main:app --host 0.0.0.0 --port 3018

echo ==========================================
echo He thong da san sang!
echo Vui long truy cap: http://localhost:3018 tren trinh duyet.
echo ==========================================
pause
