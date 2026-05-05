@echo off
cd /d "c:\Users\User\Desktop\ieltspro2\vs code"
echo Installing dependencies...
call npm install
if errorlevel 1 (
    echo Installation failed
    exit /b 1
)
echo.
echo Starting IELTS Preparation Server...
echo Open your browser to: http://localhost:3000
echo.
echo Admin Panel: http://localhost:3000/admin-panel.html
echo Admin Code: 2010
echo.
call npm start
