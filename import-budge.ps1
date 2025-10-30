# import-budge.ps1
# Recupere le DATABASE_URL de .env et lance l'import

# On utilise directement la DATABASE_URL de Render (Internal)
# A remplacer par ta propre URL si elle change
$dbUrl = "postgresql://floxcar_user:fpYq5AQKy5mB42ubHPmsDO0nlAY4oTU8@dpg-d3r2gpmmcj7s73bj8n10-a.ohio-postgres.render.com/floxcar"
if (-not $dbUrl) {
    Write-Host "Erreur: DATABASE_URL non definie" -ForegroundColor Red
    exit 1
}

$env:DATABASE_URL = $dbUrl
Write-Host "DATABASE_URL charge depuis .env" -ForegroundColor Green

# Lance le script d'import
Set-Location "c:\Users\babay\OneDrive\Desktop\floxcar\server"
npx tsx scripts/import-budge-abobo-2024.ts

Write-Host "`nImport termine." -ForegroundColor Cyan
