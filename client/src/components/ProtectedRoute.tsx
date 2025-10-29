// client/src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getUser } from '../utils/auth';

const ProtectedRoute = ({ allowedRoles }) => {
  const user = getUser();

  if (!user?.id) return <Navigate to="/" replace />;

  if (allowedRoles?.length && !allowedRoles.includes(user.role)) {
    let redirect = '/';
    switch (user.role) {
      case 'LOGISTICIEN': redirect = '/dashboard/logisticien'; break;
      case 'FINANCE': redirect = '/dashboard/finance'; break;
      case 'GESTION': redirect = '/dashboard/gestion'; break;
      case 'ADMIN_GENERAL': redirect = '/dashboard/admin'; break;
      case 'SUPER_ADMIN': redirect = '/dashboard/superadmin'; break;
      case 'DG': redirect = '/dashboard/dg'; break;
      default: redirect = '/';
    }
    return <Navigate to={redirect} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;