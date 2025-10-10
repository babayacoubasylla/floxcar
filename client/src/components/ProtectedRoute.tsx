// client/src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getUser } from '../utils/auth';

interface ProtectedRouteProps {
  allowedRoles: string[]; // Tableau des rôles autorisés pour cette route
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  const user = getUser();

  // Si l'utilisateur n'est pas connecté, redirige vers la page de login
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Si le rôle de l'utilisateur n'est pas dans la liste des rôles autorisés, redirige vers la page de login
  if (!allowedRoles.includes(user.role)) {
    // Optionnel : Vous pouvez rediriger vers un tableau de bord par défaut à la place
    // return <Navigate to="/unauthorized" replace />; 
    return <Navigate to="/" replace />;
  }

  // Si l'utilisateur est connecté et a le bon rôle, affiche le contenu de la route enfant
  return <Outlet />;
};

export default ProtectedRoute;