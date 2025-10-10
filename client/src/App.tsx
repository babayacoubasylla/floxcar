import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

// Dashboards
import DashboardLogisticien from './pages/DashboardLogisticien';
import DashboardFinance from './pages/DashboardFinance';
import DashboardAdmin from './pages/DashboardAdmin';
import DashboardSuperAdmin from './pages/DashboardSuperAdmin';

// Pages admin
import GestionUtilisateurs from './pages/GestionUtilisateurs';
import GestionVehicules from './pages/GestionVehicules';
import GestionTypesDepense from './pages/GestionTypesDepense';

// Pages logisticien
import FormulaireDepense from './pages/FormulaireDepense';
import MesDepenses from './pages/MesDepenses'; 

// Pages génériques
import HistoriqueGlobal from './pages/HistoriqueGlobal'; 
// NOTE: Importez votre composant de Statistiques réelles ici (ex: StatistiquesFinance)
// Pour l'exemple, nous réutilisons HistoriqueGlobal
// import StatistiquesFinance from './pages/StatistiquesFinance'; 

// Pages validation
import DepensesFinance from './pages/DepensesFinance';
import DepensesAdmin from './pages/DepensesAdmin'; 

/**
 * Composant pour gérer le contenu principal de l'application, y compris le Navbar et les Routes.
 * Utilise `useLocation` pour déterminer si le Navbar doit être affiché.
 */
function AppContent() {
  const location = useLocation();
  // Afficher le navbar seulement si l'utilisateur est connecté (chemin différent de '/')
  const showNavbar = location.pathname !== '/';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        {/* Route publique */}
        <Route path="/" element={<LoginForm />} />

        {/* Routes protégées pour LOGISTICIEN */}
        <Route element={<ProtectedRoute allowedRoles={['LOGISTICIEN']} />}>
          <Route path="/dashboard/logisticien" element={<DashboardLogisticien />} />
          <Route path="/depense/nouvelle" element={<FormulaireDepense />} />
          <Route path="/depenses/mes-depenses" element={<MesDepenses />} /> 
          <Route path="/depenses/historique" element={<HistoriqueGlobal />} />
        </Route>

        {/* Routes protégées pour FINANCE */}
        <Route element={<ProtectedRoute allowedRoles={['FINANCE']} />}>
          <Route path="/dashboard/finance" element={<DashboardFinance />} />
          <Route path="/depenses/finance" element={<DepensesFinance />} />
          
          {/* ⬇️ ROUTES FINANCE AJOUTÉES/CORRIGÉES ⬇️ */}
          <Route path="/finance/statistiques" element={<HistoriqueGlobal />} /> {/* Remplacez par le composant Statistique correct */}
          <Route path="/finance/historique" element={<HistoriqueGlobal />} />
          
        </Route>

        {/* Routes protégées pour ADMIN_GENERAL ET SUPER_ADMIN */}
        <Route element={<ProtectedRoute allowedRoles={['ADMIN_GENERAL', 'SUPER_ADMIN']} />}>
          <Route path="/dashboard/admin" element={<DashboardAdmin />} />
          <Route path="/depenses/admin" element={<DepensesAdmin />} />
        </Route>

        {/* Routes protégées exclusives pour SUPER_ADMIN */}
        <Route element={<ProtectedRoute allowedRoles={['SUPER_ADMIN']} />}>
          <Route path="/dashboard/superadmin" element={<DashboardSuperAdmin />} />
          <Route path="/admin/utilisateurs" element={<GestionUtilisateurs />} />
          <Route path="/admin/vehicules" element={<GestionVehicules />} />
          <Route path="/admin/types-depense" element={<GestionTypesDepense />} />
        </Route>

        {/* Redirection par défaut pour les routes non trouvées */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

/**
 * Composant racine de l'application.
 * Configure le routeur et enveloppe le contenu.
 */
function App() {
  return (
    // Activation des future flags React Router pour supprimer les avertissements
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen bg-gray-50">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;