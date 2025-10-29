# 🚨 FIX URGENT - Render Root Directory

## ❌ Problème Actuel

Render cherche : `/opt/render/project/src/floxcar-backend`  
Mais ce dossier n'existe plus (on l'a supprimé).

Le nouveau dossier est : `server/`

---

## ✅ Solution 1 : Changer Root Directory (2 minutes)

### Étapes Précises :

1. **Ouvre ton Dashboard Render** : https://dashboard.render.com

2. **Clique sur ton service backend** (ex: `floxcar-backend`)

3. **Menu gauche → "Settings"**

4. **Scroll jusqu'à "Build & Deploy"**

5. **Trouve la ligne "Root Directory"**
   ```
   Avant : floxcar-backend  ❌
   Après : server           ✅
   ```

6. **Change la valeur** :
   - Clique sur le champ
   - Efface `floxcar-backend`
   - Tape `server`

7. **Scroll tout en bas → Clique "Save Changes"**

8. **Retourne à "Events" ou "Manual Deploy"**

9. **Clique "Manual Deploy" → "Deploy latest commit"**

---

## ✅ Solution 2 : Utiliser render.yaml (AUTOMATIQUE)

Si tu préfères une config automatique :

1. **Sur Render Dashboard → "New +"**

2. **Choisis "Blueprint"**

3. **Connecte ton repo GitHub** : `babayacoubasylla/floxcar`

4. **Render va détecter `render.yaml`** et configurer automatiquement !

5. **Ajoute juste les secrets manuellement** :
   - `DATABASE_URL`
   - `JWT_SECRET`
   - `CORS_ORIGINS`

---

## 🔍 Vérification Post-Déploiement

Après le changement, les logs Render devraient montrer :

```
==> Cloning from https://github.com/babayacoubasylla/floxcar
==> Detected Root Directory: server ✅
==> Running 'npm install'
==> Running 'npm run build'
    > tsc
==> Build successful ✅
==> Running 'npm run start:prod'
    > prisma migrate deploy && node dist/index.js
==> Migrations applied ✅
✅ Serveur lancé sur http://localhost:5000
```

---

## 📋 Checklist Configuration Render

**Settings → Build & Deploy :**
- [ ] Root Directory : `server` (PAS `floxcar-backend`)
- [ ] Build Command : `npm install && npm run build`
- [ ] Start Command : `npm run start:prod`

**Settings → Environment :**
- [ ] `NODE_ENV` = `production`
- [ ] `PORT` = `5000`
- [ ] `DATABASE_URL` = `postgresql://...` (ta vraie URL)
- [ ] `JWT_SECRET` = `ton-secret-fort` (32+ chars)
- [ ] `CORS_ORIGINS` = `https://floxcar-frontend.onrender.com`

**Après sauvegarde :**
- [ ] Manual Deploy → Deploy latest commit
- [ ] Attendre 2-3 minutes
- [ ] Logs montrent "Serveur lancé" ✅
- [ ] Ouvrir `https://ton-backend.onrender.com` → Message bienvenue ✅

---

## 🐛 Si Ça Bloque Encore

**Erreur : "Root Directory missing"**
→ Tu as bien changé `floxcar-backend` en `server` ?
→ Tu as sauvegardé (bouton "Save Changes" tout en bas) ?
→ Tu as redéployé manuellement ?

**Erreur : "Build failed"**
→ Partage les logs complets (copie-colle les 30 dernières lignes)

**Erreur : "Module not found"**
→ Normalement impossible, on a corrigé tous les imports ESM ✅

---

## 📞 Besoin d'Aide ?

Si après avoir changé Root Directory → `server` et redéployé, ça ne marche toujours pas :

1. **Copie les logs Render** (dernières 50 lignes)
2. **Screenshot de ta config "Build & Deploy"**
3. Envoie-moi ça !

---

## 🎯 Résumé 1 Ligne

**Change "Root Directory" de `floxcar-backend` à `server` dans Settings Render, sauvegarde, et redéploie !**
