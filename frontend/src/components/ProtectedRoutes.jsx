import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

const RoleProtectedRoute = ({ requiredRoles }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (!requiredRoles.some(role => user.roles.includes(role))) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};

export default RoleProtectedRoute;
