// src/App.tsx
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
import DashboardGestion from './pages/DashboardGestion';
import DashboardRespAdmin from './pages/DashboardRespAdmin';
import DashboardAdmin from './pages/DashboardAdmin';
import DashboardSuperAdmin from './pages/DashboardSuperAdmin';

// Pages fonctionnelles
import GestionUtilisateurs from './pages/GestionUtilisateurs';
import GestionVehicules from './pages/GestionVehicules';
import GestionTypesDepense from './pages/GestionTypesDepense';
import FormulaireDepense from './pages/FormulaireDepense';
import MesDepenses from './pages/MesDepenses';
import HistoriqueGlobal from './pages/HistoriqueGlobal';
import DepensesAPourvoir from './pages/DepensesAPourvoir';
import DetailDepenseValidation from './pages/DetailDepenseValidation';
import MesValidations from './pages/MesValidations'; // ✅ Ajouté

function AppContent() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LoginForm />} />

        <Route element={<ProtectedRoute allowedRoles={['LOGISTICIEN']} />}>
          <Route path="/dashboard/logisticien" element={<DashboardLogisticien />} />
          <Route path="/depense/nouvelle" element={<FormulaireDepense />} />
          <Route path="/depenses/mes-depenses" element={<MesDepenses />} />
          <Route path="/depenses/historique" element={<HistoriqueGlobal />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['CONTROLEUR_FINANCIER']} />}>
          <Route path="/dashboard/finance" element={<DashboardFinance />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['CONTROLEUR_GESTION']} />}>
          <Route path="/dashboard/gestion" element={<DashboardGestion />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['RESPONSABLE_ADMIN']} />}>
          <Route path="/dashboard/resp-admin" element={<DashboardRespAdmin />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['ADMIN_GENERAL']} />}>
          <Route path="/dashboard/admin" element={<DashboardAdmin />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['DG']} />}>
          <Route path="/dashboard/dg" element={<DashboardAdmin />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['SUPER_ADMIN']} />}>
          <Route path="/dashboard/superadmin" element={<DashboardSuperAdmin />} />
          <Route path="/admin/utilisateurs" element={<GestionUtilisateurs />} />
          <Route path="/admin/vehicules" element={<GestionVehicules />} />
          <Route path="/admin/types-depense" element={<GestionTypesDepense />} />
        </Route>

        <Route
          element={
            <ProtectedRoute
              allowedRoles={[
                'LOGISTICIEN',
                'CONTROLEUR_FINANCIER',
                'CONTROLEUR_GESTION',
                'RESPONSABLE_ADMIN',
                'ADMIN_GENERAL',
                'DG',
                'SUPER_ADMIN',
              ]}
            />
          }
        >
          <Route path="/depenses/a-pourvoir" element={<DepensesAPourvoir />} />
          <Route path="/depenses/:id/valider" element={<DetailDepenseValidation />} />
          <Route path="/depenses/mes-validations" element={<MesValidations />} /> {/* ✅ Ajouté */}
        </Route>

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