// client/src/components/Navbar.tsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// ⬇️ TOUTES les icônes nécessaires sont importées ici, y compris FaList
import {
  FaCar,
  FaChartBar,
  FaFileInvoice,
  FaUser,
  FaSignOutAlt,
  FaList,
  FaUsers,
  FaTruck
} from 'react-icons/fa';
import { getUser, logout } from '../utils/auth';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = getUser();

  // Log pour débogage - tu peux le retirer plus tard
  console.log("Navbar - User object from getUser():", user);

  const handleLogout = () => {
    logout(); // Supprime le token et les infos utilisateur du localStorage
    navigate('/'); // Redirige vers la page de login
  };

  // Fonction pour déterminer si un lien est actif
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Partie gauche : Logo et Titre */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <FaCar className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">FLOXCAR</span>
            </div>

            {/* Navigation Links - Affichés uniquement si l'utilisateur est connecté */}
            {user && (
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {/* Logisticien */}
                {user.role === 'LOGISTICIEN' && (
                  <>
                    <Link
                      to="/dashboard/logisticien"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                        isActive('/dashboard/logisticien') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } text-sm font-medium`}
                    >
                      <FaChartBar className="mr-2" /> Dashboard
                    </Link>
                    <Link
                      to="/depense/nouvelle"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                        isActive('/depense/nouvelle') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } text-sm font-medium`}
                    >
                      <FaFileInvoice className="mr-2" /> Créer dépense
                    </Link>
                  </>
                )}

                {/* Finance */}
                {user.role === 'FINANCE' && (
                  <>
                    <Link
                      to="/dashboard/finance"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                        isActive('/dashboard/finance') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } text-sm font-medium`}
                    >
                      <FaChartBar className="mr-2" /> Dashboard
                    </Link>
                    <Link
                      to="/depenses/finance"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                        isActive('/depenses/finance') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } text-sm font-medium`}
                    >
                      <FaFileInvoice className="mr-2" /> Dépenses
                    </Link>
                  </>
                )}

                {/* Admin General */}
                {user.role === 'ADMIN_GENERAL' && (
                  <>
                    <Link
                      to="/dashboard/admin"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                        isActive('/dashboard/admin') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } text-sm font-medium`}
                    >
                      <FaChartBar className="mr-2" /> Dashboard
                    </Link>
                    <Link
                      to="/depenses/admin"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                        isActive('/depenses/admin') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } text-sm font-medium`}
                    >
                      <FaFileInvoice className="mr-2" /> Gérer les dépenses
                    </Link>
                  </>
                )}

                {/* Super Admin */}
                {user.role === 'SUPER_ADMIN' && (
                  <>
                    <Link
                      to="/dashboard/superadmin"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                        isActive('/dashboard/superadmin') ? 'border-purple-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } text-sm font-medium`}
                    >
                      <FaChartBar className="mr-2" /> Dashboard Super
                    </Link>
                    <Link
                      to="/admin/utilisateurs"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                        isActive('/admin/utilisateurs') ? 'border-purple-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } text-sm font-medium`}
                    >
                      <FaUsers className="mr-2" /> Utilisateurs
                    </Link>
                    <Link
                      to="/admin/vehicules"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                        isActive('/admin/vehicules') ? 'border-purple-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } text-sm font-medium`}
                    >
                      <FaTruck className="mr-2" /> Véhicules
                    </Link>
                    <Link
                      to="/admin/types-depense"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                        isActive('/admin/types-depense') ? 'border-purple-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } text-sm font-medium`}
                    >
                      <FaList className="mr-2" /> Types de dépense
                    </Link>
                    {/* Lien pour accéder à la gestion des dépenses comme Admin General aussi */}
                    <Link
                      to="/depenses/admin"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                        isActive('/depenses/admin') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } text-sm font-medium`}
                    >
                      <FaFileInvoice className="mr-2" /> Gérer les dépenses
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Partie droite : Informations utilisateur et déconnexion */}
          {/* Cette partie est AFFICHÉE UNIQUEMENT si l'utilisateur est connecté */}
          {user && (
            <div className="flex items-center">
              <div className="ml-3 relative">
                <div className="flex items-center space-x-4">
                  {/* Affichage du nom de l'utilisateur */}
                  <span className="text-gray-700 font-medium hidden md:block">{user.nom}</span>

                  {/* Bouton de déconnexion */}
                  <button
                    onClick={handleLogout}
                    className="flex items-center text-gray-700 hover:text-gray-900 font-medium"
                  >
                    <FaSignOutAlt className="mr-2" /> Déconnexion
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;