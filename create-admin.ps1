# Creer le fichier .env avec l'URL de la base de donnees Render
$envContent = @"
DATABASE_URL=postgresql://floxcar_db_user:PGGJrQ3L00yL877LpDTnKlCED6vHmPBr@dpg-d3r2gpmmcj7s73bj8n10-a.ohio-postgres.render.com/floxcar_db
"@

Set-Content -Path "server\.env" -Value $envContent -Encoding UTF8
Write-Host "Fichier .env cree" -ForegroundColor Green

# Executer le script de creation
Write-Host "`nCreation du SUPER_ADMIN..." -ForegroundColor Cyan
Set-Location server
npx tsx create-super-admin.ts

# Nettoyer
Write-Host "`nNettoyage..." -ForegroundColor Yellow
Remove-Item .env -ErrorAction SilentlyContinue
Remove-Item create-super-admin.ts -ErrorAction SilentlyContinue

Write-Host "`nTermine! Vous pouvez maintenant vous connecter au frontend." -ForegroundColor Green
