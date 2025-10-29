# 🧪 Guide de Test Rapide FloxCar

## Test 1️⃣ : Backend Local (5 minutes)

### Étape 1: Démarrer le serveur
```powershell
cd server
npm run dev
```
✅ Doit afficher: `✅ Serveur lancé sur http://localhost:5000`

### Étape 2: Tester dans le navigateur
Ouvre: http://localhost:5000

✅ Doit afficher: **"🚀 Bienvenue sur l'API FLOXCAR !"**

### Étape 3: Tester le login (script automatique)
Dans un NOUVEAU terminal PowerShell:
```powershell
cd c:\Users\babay\OneDrive\Desktop\floxcar
.\test-backend.ps1
```
Quand demandé:
- URL: `http://localhost:5000`
- Email: `admin@floxcar.com` (ou ton email test)
- Password: ton mot de passe

✅ Doit afficher token + liste dépenses

---

## Test 2️⃣ : Frontend Local (2 minutes)

### Étape 1: Démarrer le frontend
```powershell
cd client
npm run dev
```
✅ Ouvre automatiquement: http://localhost:5173

### Étape 2: Test login UI
1. Entre email/password
2. Clique "Se connecter"
3. ✅ Doit rediriger vers ton dashboard selon rôle
4. ✅ Navbar visible avec ton nom
5. ✅ Navigation fonctionne

---

## Test 3️⃣ : Backend Production (Render)

### Étape 1: Vérifier l'URL backend
Ouvre dans le navigateur:
```
https://TON-BACKEND.onrender.com
```
✅ Doit afficher: **"🚀 Bienvenue sur l'API FLOXCAR !"**

❌ Si erreur 503/502 → Render est en train de démarrer (attends 30-60s)
❌ Si erreur build → Vérifie les logs Render

### Étape 2: Tester avec le script
```powershell
.\test-backend.ps1
```
Quand demandé:
- URL: `https://TON-BACKEND.onrender.com`
- Credentials de test

---

## Test 4️⃣ : Frontend Production

### Étape 1: Ouvrir le frontend
```
https://floxcar-frontend.onrender.com
```

### Étape 2: Ouvrir DevTools (F12)
1. Onglet **Console**
2. ✅ Aucune erreur rouge
3. ✅ Pas de message CORS

### Étape 3: Test login
1. Entre credentials
2. **F12 → Network → Regarde la requête `login`**
3. ✅ Request URL commence par `https://TON-BACKEND.onrender.com/api`
4. ✅ Status: 200
5. ✅ Response contient `token`

---

## 🚨 Dépannage Rapide

### Backend local ne démarre pas
```powershell
# Vérifier Postgres local
docker ps  # Si tu utilises Docker
# OU vérifier que ta base existe
```

### Frontend local: erreur CORS
✅ Normal si backend pas démarré
✅ Démarre `npm run dev` dans `server/` d'abord

### Prod: Backend 503
1. Dashboard Render → Service backend
2. Onglet **Logs**
3. Regarde les dernières lignes
4. ❌ Erreur migration → Vérifie `DATABASE_URL`
5. ❌ Erreur module → Le build a échoué (déjà corrigé normalement)

### Prod: Frontend ne contacte pas le backend
1. Dashboard frontend → **Environment Variables**
2. Vérifie: `VITE_API_URL=https://ton-backend.onrender.com/api`
3. **Redéploie** après modification de variable

---

## ✅ Checklist Validation Complète

**Backend Local:**
- [ ] `npm run build` → OK (0 erreurs)
- [ ] `npm run dev` → Serveur démarre
- [ ] http://localhost:5000 → Message bienvenue
- [ ] Login API fonctionne (script test)

**Frontend Local:**
- [ ] `npm run build` → OK
- [ ] `npm run dev` → Démarre sur :5173
- [ ] Login UI fonctionne
- [ ] Navigation fonctionne

**Backend Prod (Render):**
- [ ] URL accessible → Message bienvenue
- [ ] Logs Render → Aucune erreur
- [ ] Login API fonctionne
- [ ] Variables d'env configurées (`DATABASE_URL`, `JWT_SECRET`)

**Frontend Prod:**
- [ ] Page se charge
- [ ] Console (F12) → 0 erreur
- [ ] Login fonctionne
- [ ] Network → Appels vers bon backend
- [ ] Token stocké dans localStorage

**Workflow Complet:**
- [ ] LOGISTICIEN crée dépense
- [ ] FINANCE valide
- [ ] GESTION valide
- [ ] ADMIN valide → Statut TERMINE

---

## 🎯 Test le Plus Simple (30 secondes)

**Backend prod:**
```
https://ton-backend.onrender.com
```
→ Doit afficher message de bienvenue ✅

**Frontend prod:**
```
https://floxcar-frontend.onrender.com
```
→ Page login s'affiche ✅
→ Login fonctionne ✅
→ Dashboard s'affiche ✅

**Si ces 3 points passent, ton appli est EN LIGNE ! 🚀**

---

## 📞 Besoin d'aide?

1. **Logs backend Render** → Dashboard → Logs (copie les dernières lignes)
2. **Console navigateur** → F12 → Console (screenshot des erreurs)
3. **Network tab** → F12 → Network → Request login (screenshot)

Partage ces infos et je t'aide à débugger ! 😊
