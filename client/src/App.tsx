// client/src/App.tsx
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
import DashboardGestion from './pages/DashboardGestion';

// Pages admin
import GestionUtilisateurs from './pages/GestionUtilisateurs';
import GestionVehicules from './pages/GestionVehicules';
import GestionTypesDepense from './pages/GestionTypesDepense';
import ImportDepenses from './pages/ImportDepenses';

// Pages logisticien
import FormulaireDepense from './pages/FormulaireDepense';
import MesDepenses from './pages/MesDepenses';

// Pages génériques
import HistoriqueDepenses from './pages/HistoriqueDepenses'; // Assure-toi que ce composant existe

// Pages validation
import DepensesFinance from './pages/DepensesFinance';
import DepensesAdmin from './pages/DepensesAdmin';

/**
 * Composant pour gérer le contenu principal de l'application, y compris le Navbar et les Routes.
 */
function AppContent() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        {/* Route publique */}
        <Route path="/" element={<LoginForm />} />

        {/* Routes communes à tous les rôles authentifiés */}
        {/* Historique accessible par tous, le filtrage se fera côté backend/composant */}
        <Route element={<ProtectedRoute allowedRoles={['LOGISTICIEN', 'FINANCE', 'GESTION', 'ADMIN_GENERAL', 'SUPER_ADMIN', 'DG']} />}>
          <Route path="/historique" element={<HistoriqueDepenses />} />
        </Route>

        {/* Routes protégées pour LOGISTICIEN */}
        <Route element={<ProtectedRoute allowedRoles={['LOGISTICIEN']} />}>
          <Route path="/dashboard/logisticien" element={<DashboardLogisticien />} />
          <Route path="/depense/nouvelle" element={<FormulaireDepense />} />
          <Route path="/depenses/mes-depenses" element={<MesDepenses />} />
          {/* Ancienne route historique pour logisticien, peut-être à supprimer si /historique gère tout */}
          {/* <Route path="/depenses/historique" element={<HistoriqueDepenses />} /> */}
        </Route>

        {/* Routes protégées pour FINANCE */}
        <Route element={<ProtectedRoute allowedRoles={['FINANCE']} />}>
          <Route path="/dashboard/finance" element={<DashboardFinance />} />
          <Route path="/depenses/finance" element={<DepensesFinance />} />
          {/* Ancienne route, peut-être redondante avec /historique */}
          {/* <Route path="/finance/statistiques" element={<HistoriqueDepenses />} /> */}
        </Route>

         {/* Routes protégées pour GESTION */}
         <Route element={<ProtectedRoute allowedRoles={['GESTION']} />}>
          <Route path="/dashboard/gestion" element={<DashboardGestion />} />
        </Route>

        {/* Routes protégées pour ADMIN_GENERAL ET SUPER_ADMIN */}
        <Route element={<ProtectedRoute allowedRoles={['ADMIN_GENERAL', 'SUPER_ADMIN', 'DG']} />}>
          <Route path="/dashboard/admin" element={<DashboardAdmin />} />
          <Route path="/depenses/admin" element={<DepensesAdmin />} />
          <Route path="/admin/import" element={<ImportDepenses />} />
        </Route>

        {/* Routes protégées exclusives pour SUPER_ADMIN */}
        <Route element={<ProtectedRoute allowedRoles={['SUPER_ADMIN']} />}>
          <Route path="/dashboard/superadmin" element={<DashboardSuperAdmin />} />
          <Route path="/admin/utilisateurs" element={<GestionUtilisateurs />} />
          <Route path="/admin/vehicules" element={<GestionVehicules />} />
          <Route path="/admin/types-depense" element={<GestionTypesDepense />} />
          <Route path="/admin/import" element={<ImportDepenses />} />
        </Route>

        {/* Redirection par défaut */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen bg-gray-50">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;