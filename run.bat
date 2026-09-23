@echo off
echo Starting GOBEYOND TRAVELS Web Application...
cd /d "%~dp0"
python server.py
if %ERRORLEVEL% NEQ 0 (
    echo Python server could not start. Launching index.html directly in your default browser...
    start index.html
)
pause
