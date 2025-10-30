# Guide de Test après Déploiement - FLOXCAR

## ✅ Vérifications Rapides

### 1. Backend (API)
**URL**: Votre URL Render backend (ex: `https://floxcar-api.onrender.com`)

```bash
# Test santé de l'API
curl https://VOTRE-BACKEND-URL.onrender.com/health

# Devrait retourner: {"status":"ok"}
```

**Points de contrôle**:
- [ ] Le service backend est "Live" dans Render Dashboard
- [ ] Les logs ne montrent pas d'erreurs critiques
- [ ] L'endpoint `/health` répond avec status 200

### 2. Frontend (Interface)
**URL**: Votre URL Render frontend (ex: `https://floxcar.onrender.com`)

**Points de contrôle**:
- [ ] La page de connexion s'affiche correctement
- [ ] Pas d'erreurs 404 dans la console navigateur (F12)
- [ ] Les styles Tailwind sont appliqués

---

## 🧪 Tests Fonctionnels Nouveautés

### A. Combobox Véhicules (Logisticien)

1. **Connexion**: Logisticien (ex: `logisticien@test.com` / mot de passe configuré)

2. **Navigation**: Cliquer sur "Créer dépense"

3. **Test de la Combobox Véhicule**:
   - [ ] Le champ "Véhicule" affiche une zone de saisie (pas un select classique)
   - [ ] Taper quelques lettres (ex: "AB") → la liste se filtre en temps réel
   - [ ] Cliquer dans la zone → le menu déroulant s'affiche avec tous les véhicules
   - [ ] Utiliser les flèches ↓ ↑ → l'élément actif change de couleur (fond bleu)
   - [ ] Appuyer sur Entrée → le véhicule sélectionné s'affiche dans le champ
   - [ ] Chaque option montre: `IMMATRICULATION (TYPE) - CODE_PARC`

4. **Test de la Recherche Type de Dépense**:
   - [ ] Un champ de recherche apparaît au-dessus du menu "Type de dépense"
   - [ ] Taper quelques lettres → la liste des types se filtre

5. **Soumission**:
   - [ ] Remplir tous les champs et soumettre
   - [ ] Message de succès "✅ Dépense soumise avec succès !"
   - [ ] Redirection vers "Mes dépenses"

### B. Page Import Admin

1. **Connexion**: Admin ou Super Admin (ex: `admin@floxcar.com`)

2. **Navigation Navbar**:
   - [ ] Un lien "Importer" avec icône upload est visible dans la barre de navigation
   - [ ] Cliquer dessus → redirige vers `/admin/import`

3. **Interface Import**:
   - [ ] Titre "Importer des dépenses (CSV / Excel)"
   - [ ] Un input file pour sélectionner un fichier
   - [ ] Lien "Télécharger le modèle" présent
   - [ ] Bouton "Importer" désactivé tant qu'aucun fichier n'est sélectionné

4. **Test d'Import**:
   - [ ] Sélectionner un fichier CSV ou XLSX
   - [ ] Le bouton "Importer" devient actif
   - [ ] Cliquer sur "Importer"
   - [ ] Message de progression "Import en cours..."
   - [ ] Rapport affiché:
     - Nombre total de lignes
     - Nombre de dépenses créées
     - Liste des erreurs (si applicable)

5. **Télécharger le Modèle**:
   - [ ] Cliquer sur "Télécharger le modèle"
   - [ ] Fichier `import-depenses-template.csv` téléchargé
   - [ ] Ouvrir le fichier → colonnes: date_intervention, immatriculation, type_depense, libelle, montant, quantite, code_parc

### C. Notifications

1. **Scénario Finance → Logisticien**:
   - Connexion Finance
   - Valider une dépense
   - Se déconnecter et se reconnecter en Logisticien
   - [ ] Badge rouge sur la cloche (nombre de notifications non lues)
   - [ ] Cliquer sur la cloche → liste des notifications
   - [ ] Voir la notification de validation Finance
   - [ ] Cliquer "Marquer lu" → badge se met à jour

2. **Scénario Complet (TERMINE)**:
   - Finance valide → Gestion valide → Admin valide
   - Se reconnecter en Logisticien (soumissionnaire)
   - [ ] Notification: "Votre dépense est terminée et validée"

3. **Scénario Rejet**:
   - Admin rejette une dépense avec motif
   - Se reconnecter en Logisticien
   - [ ] Notification: "Votre dépense a été rejetée" + motif affiché

### D. Dashboards avec Stats

**Finance** (`/dashboard/finance`):
- [ ] Carte "À valider" affiche le bon nombre
- [ ] Carte "Validées par moi" affiche un chiffre
- [ ] Carte "Terminées" et "Rejetées" visibles
- [ ] Liste des dépenses en attente s'affiche
- [ ] Boutons "Valider" et "Rejeter" fonctionnels

**Gestion** (`/dashboard/gestion`):
- [ ] Mêmes vérifications que Finance
- [ ] Stats scope = "GESTION"

**Admin** (`/dashboard/admin`):
- [ ] Stats scope = "ADMIN"
- [ ] Dépenses en attente admin listées
- [ ] Actions Valider/Rejeter disponibles

**Super Admin** (`/dashboard/superadmin`):
- [ ] Stats globales affichées
- [ ] Liens "Utilisateurs", "Véhicules", "Types de dépense", "Importer" accessibles

**Logisticien** (`/dashboard/logisticien`):
- [ ] Stats personnelles (mes dépenses soumises, en cours, validées)
- [ ] Lien "Créer dépense" fonctionnel

---

## 🚨 Problèmes Courants et Solutions

### Erreur 404 sur `/api/...`
**Cause**: Variable d'environnement `VITE_API_URL` incorrecte
**Solution**: Vérifier que `VITE_API_URL` dans Render (Static Site) pointe vers l'URL backend **sans** `/api` à la fin
- ✅ Correct: `https://floxcar-api.onrender.com`
- ❌ Incorrect: `https://floxcar-api.onrender.com/api`

### Combobox ne s'affiche pas / pas de liste
**Cause**: JavaScript désactivé ou erreur de build
**Solution**: 
1. Ouvrir la console (F12) → vérifier les erreurs
2. Vérifier que le build frontend a réussi dans Render
3. Vider le cache navigateur (Ctrl+Shift+R)

### Import échoue avec "Unauthorized"
**Cause**: Token expiré ou utilisateur sans droits Admin
**Solution**:
1. Se déconnecter et reconnecter
2. Vérifier le rôle utilisateur (doit être ADMIN_GENERAL ou SUPER_ADMIN)

### Notifications ne s'affichent pas
**Cause**: Migration de la table Notification pas appliquée
**Solution**:
1. Vérifier les logs backend Render
2. La migration `20251030120000_add_notifications` doit être appliquée
3. Redéployer si nécessaire

### Véhicules/Types ne se chargent pas
**Cause**: Routes API non accessibles ou base de données vide
**Solution**:
1. Tester directement: `curl https://BACKEND-URL/api/vehicules`
2. Si vide, ajouter des véhicules via `/admin/vehicules` (Super Admin)
3. Ajouter des types via `/admin/types-depense`

---

## 📊 Checklist Complète Déploiement

### Backend
- [ ] Service "Live" sur Render
- [ ] Dernière build réussie (vert)
- [ ] Variables d'environnement configurées:
  - `DATABASE_URL` (Internal URL PostgreSQL)
  - `JWT_SECRET`
  - `PORT` (optionnel, défaut 5000)
- [ ] Migrations appliquées (`prisma migrate deploy` dans logs)
- [ ] Endpoint `/api/vehicules` retourne des données (ou [])
- [ ] Endpoint `/api/types-depense` retourne des données (ou [])

### Frontend
- [ ] Site "Live" sur Render
- [ ] Dernière build réussie
- [ ] Variable d'environnement:
  - `VITE_API_URL` = URL backend (sans `/api`)
- [ ] Page de login accessible
- [ ] Assets CSS/JS chargés (pas de 404)

### Base de Données
- [ ] Tables créées (User, Vehicule, TypeDepense, Depense, Notification, etc.)
- [ ] Au moins un utilisateur SUPER_ADMIN existe
- [ ] Quelques véhicules et types de dépense pour tester

---

## 🎯 Test Workflow Complet (End-to-End)

**Objectif**: Tester le cycle de vie complet d'une dépense

1. **Logisticien** soumet une dépense avec la nouvelle combobox
2. **Finance** reçoit notification → valide
3. **Gestion** reçoit notification → valide
4. **Admin** reçoit notification → valide
5. **Logisticien** reçoit notification finale "TERMINE"
6. Vérifier dans chaque dashboard que les stats se mettent à jour

**Temps estimé**: 5-10 minutes

---

## 📞 Support

Si un problème persiste après ces vérifications:
1. Capturer les logs Render (Backend + Frontend)
2. Capturer les erreurs console navigateur (F12 → Console)
3. Noter l'URL exacte et le rôle utilisateur utilisé
4. Vérifier la configuration des variables d'environnement

---

## ✨ Nouvelles Fonctionnalités Déployées

- ✅ Combobox véhicules recherchable avec navigation clavier
- ✅ Filtrage temps réel des types de dépense
- ✅ Page d'import CSV/XLSX pour Admin
- ✅ Lien "Importer" dans la Navbar Admin/Super Admin
- ✅ Notifications en temps réel avec badge
- ✅ Stats par rôle dans tous les dashboards
- ✅ Workflow de rejet à tous les niveaux
- ✅ Historique et traçabilité complète

**Bon test ! 🚀**
