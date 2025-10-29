# Script de test rapide - Backend
# Lance ce script depuis PowerShell pour tester l'API en production

Write-Host "🧪 Tests FloxCar Backend" -ForegroundColor Cyan
Write-Host ""

# Configuration
$BACKEND_URL = Read-Host "URL du backend (ex: https://ton-backend.onrender.com)"
if ([string]::IsNullOrWhiteSpace($BACKEND_URL)) {
    $BACKEND_URL = "http://localhost:5000"
    Write-Host "⚡ Utilisation du backend local: $BACKEND_URL" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host "TEST 1: Health Check" -ForegroundColor Green
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray

try {
    $health = Invoke-RestMethod -Uri "$BACKEND_URL" -Method GET -TimeoutSec 10
    Write-Host "✅ Backend accessible" -ForegroundColor Green
    Write-Host "   Réponse: $health" -ForegroundColor White
} catch {
    Write-Host "❌ Backend inaccessible" -ForegroundColor Red
    Write-Host "   Erreur: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host "TEST 2: Login API" -ForegroundColor Green
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray

# Demander les credentials
$email = Read-Host "Email de test (ex: admin@floxcar.com)"
$password = Read-Host "Mot de passe" -AsSecureString
$passwordPlain = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($password))

$loginBody = @{
    email = $email
    password = $passwordPlain
} | ConvertTo-Json

try {
    $loginResponse = Invoke-RestMethod -Uri "$BACKEND_URL/api/auth/login" -Method POST -Body $loginBody -ContentType "application/json" -TimeoutSec 10
    Write-Host "✅ Login réussi" -ForegroundColor Green
    Write-Host "   Role: $($loginResponse.user.role)" -ForegroundColor White
    Write-Host "   Nom: $($loginResponse.user.nom)" -ForegroundColor White
    Write-Host "   Token: $($loginResponse.token.Substring(0, 30))..." -ForegroundColor White
    
    $token = $loginResponse.token
} catch {
    Write-Host "❌ Login échoué" -ForegroundColor Red
    Write-Host "   Erreur: $($_.Exception.Message)" -ForegroundColor Red
    if ($_.ErrorDetails) {
        Write-Host "   Détails: $($_.ErrorDetails.Message)" -ForegroundColor Red
    }
    exit 1
}

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host "TEST 3: Get Dépenses (avec token)" -ForegroundColor Green
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray

try {
    $depenses = Invoke-RestMethod -Uri "$BACKEND_URL/api/depenses" -Method GET -Headers @{Authorization="Bearer $token"} -TimeoutSec 10
    Write-Host "✅ Récupération des dépenses réussie" -ForegroundColor Green
    Write-Host "   Nombre de dépenses: $($depenses.Count)" -ForegroundColor White
    
    if ($depenses.Count -gt 0) {
        Write-Host "   Première dépense:" -ForegroundColor White
        Write-Host "     - ID: $($depenses[0].id)" -ForegroundColor Gray
        Write-Host "     - Libellé: $($depenses[0].libelle)" -ForegroundColor Gray
        Write-Host "     - Montant: $($depenses[0].montant) FCFA" -ForegroundColor Gray
        Write-Host "     - Statut: $($depenses[0].statut)" -ForegroundColor Gray
    } else {
        Write-Host "   ℹ️  Aucune dépense trouvée (base vide)" -ForegroundColor Yellow
    }
} catch {
    Write-Host "❌ Récupération des dépenses échouée" -ForegroundColor Red
    Write-Host "   Erreur: $($_.Exception.Message)" -ForegroundColor Red
    if ($_.ErrorDetails) {
        Write-Host "   Détails: $($_.ErrorDetails.Message)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host "TEST 4: Get Véhicules" -ForegroundColor Green
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray

try {
    $vehicules = Invoke-RestMethod -Uri "$BACKEND_URL/api/vehicules" -Method GET -TimeoutSec 10
    Write-Host "✅ Récupération des véhicules réussie" -ForegroundColor Green
    Write-Host "   Nombre de véhicules: $($vehicules.Count)" -ForegroundColor White
    
    if ($vehicules.Count -gt 0) {
        Write-Host "   Premier véhicule:" -ForegroundColor White
        Write-Host "     - Immatriculation: $($vehicules[0].immatriculation)" -ForegroundColor Gray
        Write-Host "     - Code parc: $($vehicules[0].codeParc)" -ForegroundColor Gray
    }
} catch {
    Write-Host "❌ Récupération des véhicules échouée" -ForegroundColor Red
    Write-Host "   Erreur: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host "✅ Tests terminés !" -ForegroundColor Green
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host ""
Write-Host "💡 Prochaines étapes:" -ForegroundColor Cyan
Write-Host "   1. Teste le frontend: $BACKEND_URL (remplacer par URL frontend)" -ForegroundColor White
Write-Host "   2. Vérifie les logs Render pour erreurs éventuelles" -ForegroundColor White
Write-Host "   3. Teste le workflow complet (voir TESTS.md)" -ForegroundColor White
Write-Host ""
