# Guide de déploiement FloxCar

## 📦 Structure du projet

```
floxcar/
├── client/          # Frontend React + Vite
└── server/          # Backend Express + Prisma + PostgreSQL
```

## 🚀 Déploiement Backend (Render)

### 1. Créer un Web Service sur Render

1. Connecte-toi à [Render](https://render.com)
2. Clique sur **New +** → **Web Service**
3. Connecte ton repo GitHub `babayacoubasylla/floxcar`

### 2. Configuration du service

**General:**
- **Name**: `floxcar-backend` (ou nom de ton choix)
- **Region**: Frankfurt (EU) ou plus proche de tes utilisateurs
- **Branch**: `main`
- **Root Directory**: `server`

**Build & Deploy:**
- **Runtime**: `Node`
- **Build Command**: 
  ```bash
  npm install && npm run build
  ```
- **Start Command**:
  ```bash
  npm run start:prod
  ```

### 3. Variables d'environnement (CRITICAL!)

Ajoute ces variables dans l'onglet **Environment** de Render:

```bash
NODE_ENV=production
PORT=5000
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/floxcar?schema=public
JWT_SECRET=ton-secret-ultra-securise-minimum-32-caracteres
CORS_ORIGINS=https://floxcar-frontend.onrender.com
```

**⚠️ Important:**
- `DATABASE_URL`: Crée une base PostgreSQL sur Render (PostgreSQL service) ou utilise [Neon](https://neon.tech), [Supabase](https://supabase.com), etc.
- `JWT_SECRET`: Génère une clé aléatoire forte (ex: `openssl rand -base64 32`)
- `CORS_ORIGINS`: URL de ton frontend déployé

### 4. Déployer

- Clique sur **Create Web Service**
- Render va:
  1. Installer les dépendances
  2. Générer le client Prisma (`postinstall`)
  3. Compiler TypeScript → `dist/`
  4. Appliquer les migrations Prisma (`start:prod`)
  5. Démarrer le serveur

**URL backend**: `https://floxcar-backend.onrender.com`

---

## 🎨 Déploiement Frontend (Render ou Vercel)

### Option A: Render

1. **New +** → **Static Site**
2. Repo: `babayacoubasylla/floxcar`
3. **Root Directory**: `client`
4. **Build Command**: `npm install && npm run build`
5. **Publish Directory**: `dist`
6. **Variables d'environnement**:
   ```bash
   VITE_API_URL=https://floxcar-backend.onrender.com/api
   ```

### Option B: Vercel (Recommandé pour le frontend)

1. Installe Vercel CLI: `npm i -g vercel`
2. Depuis le dossier `client/`:
   ```bash
   cd client
   vercel
   ```
3. Suis les prompts (lien GitHub repo)
4. Dans le dashboard Vercel → **Settings** → **Environment Variables**:
   ```bash
   VITE_API_URL=https://floxcar-backend.onrender.com/api
   ```
5. Redéploie: `vercel --prod`

**URL frontend**: `https://ton-projet.vercel.app`

---

## 🗄️ Base de données PostgreSQL

### Option 1: Render PostgreSQL (gratuit avec limites)

1. **New +** → **PostgreSQL**
2. Nom: `floxcar-db`
3. Copie l'**Internal Database URL** (commence par `postgresql://`)
4. Colle-la dans `DATABASE_URL` du backend

### Option 2: Neon (gratuit, serverless)

1. [neon.tech](https://neon.tech) → Nouveau projet
2. Copie la **Connection String**
3. Format: `postgresql://user:password@ep-xxx.region.aws.neon.tech/dbname?sslmode=require`

---

## ✅ Checklist post-déploiement

- [ ] Backend accessible: `https://ton-backend.onrender.com` → affiche "🚀 Bienvenue sur l'API FLOXCAR !"
- [ ] Frontend accessible et charge correctement
- [ ] Test login avec un utilisateur (vérifier token JWT)
- [ ] Tester création d'une dépense (LOGISTICIEN)
- [ ] Tester workflow de validation (FINANCE → GESTION → ADMIN)
- [ ] Vérifier `/historique` pour différents rôles
- [ ] Logs backend: onglet **Logs** sur Render pour débugger

---

## 🐛 Debugging

### Backend ne démarre pas?

1. Vérifie les logs Render (onglet **Logs**)
2. Erreurs fréquentes:
   - `DATABASE_URL` invalide → vérifie la connexion PostgreSQL
   - `JWT_SECRET` manquant → ajoute-le dans Environment Variables
   - Migration Prisma échoue → vérifie que la DB existe et est accessible

### Frontend appelle le mauvais backend?

1. Vérifie `VITE_API_URL` dans les variables d'env Vercel/Render
2. Redéploie après modification: sur Vercel → **Deployments** → **Redeploy**

### CORS errors?

- Assure-toi que `CORS_ORIGINS` dans le backend contient l'URL frontend
- Format: `https://ton-frontend.vercel.app` (sans slash final)

---

## 📝 Notes importantes

- **Migrations Prisma**: Le script `start:prod` exécute automatiquement `prisma migrate deploy`
- **Seed data**: Pour ajouter des utilisateurs/véhicules de test, exécute depuis le shell Render:
  ```bash
  npm run dev  # ou lance les scripts seed manuellement
  ```
- **Free tier Render**: Le backend s'endort après 15 min d'inactivité (cold start ~30s au réveil)

---

## 🔐 Sécurité

- ✅ `.env` est dans `.gitignore` (ne jamais committer les secrets!)
- ✅ JWT avec secret fort
- ✅ Helmet.js activé pour sécuriser les headers HTTP
- ✅ CORS configuré
- 🔜 TODO: Rate limiting (express-rate-limit)
- 🔜 TODO: Validation des inputs (joi, zod)

---

## 📞 Support

En cas de problème:
1. Vérifie les logs Render/Vercel
2. Teste les endpoints backend avec Postman/Thunder Client
3. Vérifie la console navigateur (F12) pour les erreurs frontend

**Repo GitHub**: https://github.com/babayacoubasylla/floxcar
