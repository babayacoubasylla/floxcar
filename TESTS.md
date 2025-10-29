# Tests Manuel - FloxCar

## 🧪 Tests en Local

### 1. Tester le Backend Localement

**A. Vérifier que le build passe:**
```powershell
cd server
npm run build
```
✅ Doit compiler sans erreur → dossier `dist/` créé

**B. Démarrer le serveur en mode dev:**
```powershell
# Assure-toi d'avoir un fichier .env avec:
# DATABASE_URL=postgresql://...
# JWT_SECRET=ton-secret-local
# PORT=5000

npm run dev
```
✅ Doit afficher: `✅ Serveur lancé sur http://localhost:5000`

**C. Tester l'endpoint racine:**
Ouvre un navigateur → `http://localhost:5000`
✅ Doit afficher: **"🚀 Bienvenue sur l'API FLOXCAR !"**

**D. Tester le login (Postman/Thunder Client/curl):**
```bash
# PowerShell
Invoke-RestMethod -Uri "http://localhost:5000/api/auth/login" -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"email":"test@floxcar.com","password":"password123"}'
```
✅ Doit retourner: `{ "token": "eyJ...", "user": {...} }`

---

### 2. Tester le Frontend Localement

**A. Build:**
```powershell
cd client
npm run build
```
✅ Compile sans erreur → dossier `dist/` créé

**B. Dev mode:**
```powershell
npm run dev
```
✅ Ouvre `http://localhost:5173`

**C. Tests manuels UI:**
- [ ] Page login s'affiche
- [ ] Login avec un utilisateur test
- [ ] Redirection vers le bon dashboard selon rôle
- [ ] Navbar s'affiche correctement
- [ ] Navigation entre pages fonctionne

---

## 🌐 Tests en Production

### 1. Vérifier le Backend Déployé

**A. Endpoint racine:**
```
https://TON-BACKEND.onrender.com
```
✅ Doit afficher: **"🚀 Bienvenue sur l'API FLOXCAR !"**

**B. Test login API:**
```powershell
# Remplace TON-BACKEND par ton URL réelle
Invoke-RestMethod -Uri "https://TON-BACKEND.onrender.com/api/auth/login" -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"email":"admin@floxcar.com","password":"admin123"}'
```
✅ Doit retourner un token JWT

**C. Vérifier les logs Render:**
- Dashboard Render → Service backend → **Logs**
- ✅ Aucune erreur, logs montrent "Serveur lancé"

---

### 2. Vérifier le Frontend Déployé

**A. Accès frontend:**
```
https://floxcar-frontend.onrender.com
```
✅ Page se charge (pas d'erreur 404/500)

**B. Console navigateur (F12):**
- Onglet **Console**
- ✅ Aucune erreur rouge
- ✅ Pas d'erreur CORS
- ✅ Pas d'erreur "Failed to fetch"

**C. Network tab (F12 → Network):**
- Essaie de te connecter
- ✅ Requête vers `https://TON-BACKEND.onrender.com/api/auth/login`
- ✅ Status 200
- ✅ Réponse contient `token`

---

## ✅ Checklist Tests Fonctionnels Complets

### Authentification
- [ ] Login LOGISTICIEN → redirige vers `/dashboard/logisticien`
- [ ] Login FINANCE → redirige vers `/dashboard/finance`
- [ ] Login GESTION → redirige vers `/dashboard/gestion`
- [ ] Login ADMIN_GENERAL → redirige vers `/dashboard/admin`
- [ ] Login SUPER_ADMIN → redirige vers `/dashboard/superadmin`
- [ ] Mauvais credentials → message d'erreur
- [ ] Token stocké dans localStorage
- [ ] Logout → supprime token, redirige vers `/`
- [ ] Accès route protégée sans token → redirige vers `/`

### LOGISTICIEN
- [ ] Voir "Mes dépenses" vides ou avec liste
- [ ] Créer une nouvelle dépense (formulaire complet)
- [ ] Sélectionner type de dépense, véhicule
- [ ] Soumettre → statut "SOUMIS"
- [ ] Voir la dépense dans "Mes dépenses"
- [ ] Modifier une dépense (si non validée)
- [ ] Supprimer une dépense (si non validée)
- [ ] Accès `/historique` → voir uniquement ses dépenses

### FINANCE
- [ ] Voir liste "En attente Finance" (statut SOUMIS)
- [ ] Cliquer sur une dépense → voir détails
- [ ] Valider une dépense → statut passe à "VALIDE_FINANCE"
- [ ] Ajouter commentaire facultatif
- [ ] Dépense disparaît de "En attente"
- [ ] Accès `/historique` → voir toutes les dépenses

### GESTION
- [ ] Voir liste "En attente Gestion" (statut VALIDE_FINANCE)
- [ ] Valider → statut passe à "VALIDE_GESTION"
- [ ] Commentaire facultatif
- [ ] Accès `/historique` → voir toutes les dépenses

### ADMIN_GENERAL / DG
- [ ] Voir liste "En attente Admin" (statut VALIDE_GESTION)
- [ ] Valider → statut passe à "TERMINE"
- [ ] Commentaire facultatif
- [ ] Accès `/historique` → voir toutes les dépenses

### SUPER_ADMIN
- [ ] Tous les accès ci-dessus +
- [ ] Gestion Utilisateurs:
  - [ ] Liste des utilisateurs
  - [ ] Créer utilisateur (tous rôles)
  - [ ] Modifier utilisateur
  - [ ] Supprimer utilisateur
- [ ] Gestion Véhicules:
  - [ ] Liste des véhicules
  - [ ] Ajouter véhicule
  - [ ] Modifier véhicule
  - [ ] Supprimer véhicule
- [ ] Gestion Types de Dépense:
  - [ ] Liste des types
  - [ ] Ajouter type
  - [ ] Modifier type
  - [ ] Supprimer type

### Workflow Complet (Test E2E)
- [ ] **T0**: LOGISTICIEN crée dépense → statut "SOUMIS"
- [ ] **T1**: FINANCE valide → statut "VALIDE_FINANCE"
- [ ] **T2**: GESTION valide → statut "VALIDE_GESTION"
- [ ] **T3**: ADMIN valide → statut "TERMINE"
- [ ] **T4**: Vérifier historique de validation (timeline)
- [ ] **T5**: Voir commentaires de chaque validateur

### Historique
- [ ] LOGISTICIEN voit uniquement ses dépenses
- [ ] FINANCE/GESTION/ADMIN voient toutes les dépenses
- [ ] Filtres par statut fonctionnent
- [ ] Recherche fonctionne (si implémentée)
- [ ] Pagination (si implémentée)

### Erreurs & Edge Cases
- [ ] Token expiré → redirige vers login
- [ ] Accès route non autorisée → redirige vers dashboard
- [ ] Soumettre formulaire incomplet → message d'erreur
- [ ] Réseau coupé → message d'erreur explicite
- [ ] Backend down → message d'erreur (pas de crash)

---

## 🛠️ Outils de Test Recommandés

### Pour tester l'API (Backend)

**1. Postman ou Thunder Client (VS Code extension)**
- Créer une collection "FloxCar API"
- Endpoints:
  - POST `/api/auth/login`
  - GET `/api/depenses`
  - POST `/api/depenses`
  - GET `/api/users` (avec token admin)
  - etc.

**2. curl (PowerShell)**
```powershell
# Test login
$body = @{
    email = "admin@floxcar.com"
    password = "admin123"
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri "https://TON-BACKEND.onrender.com/api/auth/login" -Method POST -Body $body -ContentType "application/json"
$token = $response.token

# Test get dépenses avec token
Invoke-RestMethod -Uri "https://TON-BACKEND.onrender.com/api/depenses" -Method GET -Headers @{Authorization="Bearer $token"}
```

### Pour tester le Frontend

**1. DevTools (F12)**
- Console: erreurs JS
- Network: requêtes API, status codes
- Application: localStorage (token, user)

**2. Tests manuels par rôle:**
Crée des utilisateurs test avec chaque rôle:
```sql
-- Dans ta base de données (ou via seed scripts)
INSERT INTO "User" (email, password, nom, role) VALUES
('logisticien@test.com', '$2b$10$...', 'Test Logisticien', 'LOGISTICIEN'),
('finance@test.com', '$2b$10$...', 'Test Finance', 'FINANCE'),
('gestion@test.com', '$2b$10$...', 'Test Gestion', 'GESTION'),
('admin@test.com', '$2b$10$...', 'Test Admin', 'ADMIN_GENERAL'),
('superadmin@test.com', '$2b$10$...', 'Test SuperAdmin', 'SUPER_ADMIN');
```

---

## 🚨 Erreurs Fréquentes à Vérifier

### Backend
- ❌ `Cannot find module './routes/...'` → Imports ESM sans `.js` → **✅ CORRIGÉ**
- ❌ Prisma `update` sans `where` → **✅ CORRIGÉ**
- ❌ `DATABASE_URL` non définie → Vérifier variables d'env Render
- ❌ `JWT_SECRET` non définie → Vérifier variables d'env
- ❌ Migrations non appliquées → `npm run start:prod` les applique auto

### Frontend
- ❌ CORS error → Vérifier `CORS_ORIGINS` backend
- ❌ `Failed to fetch` → `VITE_API_URL` incorrect
- ❌ 404 sur routes → `vercel.json` manquant → **✅ AJOUTÉ**
- ❌ Token non envoyé → Vérifier axios interceptor

---

## 📊 Résultat Attendu

### Backend Health Check
```json
GET https://ton-backend.onrender.com
→ "🚀 Bienvenue sur l'API FLOXCAR !"
```

### Login Success
```json
POST /api/auth/login
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "admin@floxcar.com",
    "nom": "Admin Test",
    "role": "SUPER_ADMIN"
  }
}
```

### Get Dépenses (avec token)
```json
GET /api/depenses
[
  {
    "id": 1,
    "dateIntervention": "2025-10-25T00:00:00.000Z",
    "libelle": "Vidange moteur",
    "montant": 15000,
    "statut": "SOUMIS",
    "vehicule": { "immatriculation": "DK-1234-AB" },
    "soumisPar": { "nom": "Mamadou Diallo" }
  }
]
```

---

Bon courage pour les tests ! 🚀
