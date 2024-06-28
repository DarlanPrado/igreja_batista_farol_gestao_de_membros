@echo off
setlocal

echo Iniciando API...
start cmd /k "cd /d IgrejaBatista.Api\ && npm i && npm run dev"

echo Iniciando WEB...
start cmd /k "cd /d IgrejaBatista.Web\ && npm i && npm run dev"
endlocal
