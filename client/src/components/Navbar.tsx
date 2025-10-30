// client/src/components/Navbar.tsx
import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// ⬇️ TOUTES les icônes nécessaires sont importées ici, y compris FaList
import {
  FaCar,
  FaChartBar,
  FaFileInvoice,
  FaSignOutAlt,
  FaList,
  FaUsers,
  FaTruck,
  FaUpload
} from 'react-icons/fa';
import { getUser, logout } from '../utils/auth';
import api from '../api';
import { FaBell } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = getUser();
  const [openNotif, setOpenNotif] = useState(false);
  const [notifs, setNotifs] = useState<any[]>([]);
  const [loadingNotif, setLoadingNotif] = useState(false);
  const unreadCount = useMemo(() => notifs.filter(n => !n.readAt).length, [notifs]);
  const fetchNotifications = async (unreadOnly = true) => {
    try {
      setLoadingNotif(true);
      const res = await api.get(`/api/notifications`, { params: { unreadOnly } });
      setNotifs(res.data || []);
    } catch (e) {
      console.error('Erreur chargement notifications', e);
    } finally {
      setLoadingNotif(false);
    }
  };

  useEffect(() => {
    if (!user) return;
    fetchNotifications(true);
    const id = setInterval(() => fetchNotifications(true), 60000);
    return () => clearInterval(id);
  }, [user]);

  const markAllRead = async () => {
    try {
      await api.post('/api/notifications/read-all');
      // On met à jour localement
      setNotifs((prev) => prev.map(n => ({ ...n, readAt: new Date().toISOString() })));
    } catch (e) {
      console.error('Erreur markAllRead', e);
    }
  };

  const markOneRead = async (id: number) => {
    try {
      await api.patch(`/api/notifications/${id}/read`);
      setNotifs((prev) => prev.map(n => n.id === id ? { ...n, readAt: new Date().toISOString() } : n));
    } catch (e) {
      console.error('Erreur markOneRead', e);
    }
  };

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
            {/* Bouton retour global (sauf page de login) */}
            {location.pathname !== '/' && (
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="mr-3 inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none"
                title="Retour"
              >
                <FaArrowLeft className="text-gray-700" />
              </button>
            )}
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
                    <Link
                      to="/depense/nouvelle"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                        isActive('/depense/nouvelle') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } text-sm font-medium`}
                    >
                      <FaFileInvoice className="mr-2" /> Créer dépense
                    </Link>
                    <Link
                      to="/depenses/mes-depenses"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                        isActive('/depenses/mes-depenses') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } text-sm font-medium`}
                    >
                      <FaList className="mr-2" /> Mes dépenses
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
                    <Link
                      to="/depense/nouvelle"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                        isActive('/depense/nouvelle') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } text-sm font-medium`}
                    >
                      <FaFileInvoice className="mr-2" /> Créer dépense
                    </Link>
                    <Link
                      to="/depenses/mes-depenses"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                        isActive('/depenses/mes-depenses') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } text-sm font-medium`}
                    >
                      <FaList className="mr-2" /> Mes dépenses
                    </Link>
                    <Link
                      to="/admin/import"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                        isActive('/admin/import') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } text-sm font-medium`}
                    >
                      <FaUpload className="mr-2" /> Importer
                    </Link>
                  </>
                )}

                {/* Gestion */}
                {user.role === 'GESTION' && (
                  <>
                    <Link
                      to="/dashboard/gestion"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                        isActive('/dashboard/gestion') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
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
                    <Link
                      to="/depenses/mes-depenses"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                        isActive('/depenses/mes-depenses') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } text-sm font-medium`}
                    >
                      <FaList className="mr-2" /> Mes dépenses
                    </Link>
                  </>
                )}

                {/* Super Admin */}
                {user.role === 'SUPER_ADMIN' && (
                  <>
                    <Link
                      to="/depense/nouvelle"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                        isActive('/depense/nouvelle') ? 'border-purple-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } text-sm font-medium`}
                    >
                      <FaFileInvoice className="mr-2" /> Créer dépense
                    </Link>
                    <Link
                      to="/depenses/mes-depenses"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                        isActive('/depenses/mes-depenses') ? 'border-purple-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } text-sm font-medium`}
                    >
                      <FaList className="mr-2" /> Mes dépenses
                    </Link>
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
                    <Link
                      to="/admin/import"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                        isActive('/admin/import') ? 'border-purple-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } text-sm font-medium`}
                    >
                      <FaUpload className="mr-2" /> Importer
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
                  {/* Cloche notifications */}
                  <button
                    type="button"
                    onClick={() => {
                      setOpenNotif((o) => !o);
                      if (!openNotif) fetchNotifications(true);
                    }}
                    className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none"
                    title="Notifications"
                  >
                    <FaBell className="text-gray-700" />
                    {unreadCount > 0 && (
                      <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                        {unreadCount}
                      </span>
                    )}
                  </button>

                  {openNotif && (
                    <div className="origin-top-right absolute right-24 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                      <div className="p-3 border-b flex items-center justify-between">
                        <span className="font-semibold text-gray-800">Notifications</span>
                        <button onClick={markAllRead} className="text-sm text-blue-600 hover:underline">Tout marquer comme lu</button>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {loadingNotif ? (
                          <div className="p-4 text-center text-gray-500">Chargement...</div>
                        ) : notifs.length === 0 ? (
                          <div className="p-4 text-center text-gray-500">Aucune notification</div>
                        ) : (
                          notifs.map((n) => (
                            <div key={n.id} className={`px-4 py-3 border-b last:border-b-0 ${n.readAt ? 'bg-white' : 'bg-blue-50'}`}>
                              <div className="flex items-start">
                                <div className="flex-1">
                                  <div className="text-sm font-medium text-gray-800">{n.title || 'Notification'}</div>
                                  <div className="text-sm text-gray-600">{n.message}</div>
                                  <div className="mt-1 text-xs text-gray-400">{new Date(n.createdAt).toLocaleString('fr-FR')}</div>
                                </div>
                                {!n.readAt && (
                                  <button onClick={() => markOneRead(n.id)} className="text-xs ml-3 text-blue-600 hover:underline">Marquer lu</button>
                                )}
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  )}
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