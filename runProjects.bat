@echo off
setlocal

echo Iniciando API...
start cmd /k "cd /d IgrejaBatista.Api\ && npm run dev"

echo Iniciando WEB...
start cmd /k "cd /d IgrejaBatista.Web\ && npm run dev"
endlocal
