// client/src/components/layout/Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const location = useLocation();

  const getMenuItems = () => {
    switch(user?.role) {
      case 'LOGISTICIEN':
        return [
          { path: '/dashboard/logisticien', label: 'Tableau de bord' },
          { path: '/depense/nouvelle', label: 'Nouvelle dépense' },
          { path: '/depenses/mes-depenses', label: 'Mes dépenses' },
          { path: '/historique', label: 'Historique' }, // ✅ CORRECT
        ];
      case 'FINANCE':
        return [
          { path: '/dashboard/finance', label: 'Tableau de bord' },
          { path: '/depenses/finance', label: 'Dépenses à valider' },
          { path: '/finance/statistiques', label: 'Statistiques' },
          { path: '/historique', label: 'Historique' }, // ✅ CORRECT
        ];
      case 'GESTION':
        return [
          { path: '/dashboard/gestion', label: 'Tableau de bord' },
          { path: '/historique', label: 'Historique' }, // ✅ CORRECT
        ];
      case 'ADMIN_GENERAL':
      case 'SUPER_ADMIN':
        return [
          { path: '/dashboard/admin', label: 'Tableau de bord' },
          { path: '/depenses/admin', label: 'Toutes les dépenses' },
          { path: '/historique', label: 'Historique' }, // ✅ CORRECT
        ];
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link 
              to={item.path} 
              className={location.pathname === item.path ? 'active' : ''}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;