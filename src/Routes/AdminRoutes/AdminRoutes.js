import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hookes/useAdmin';

const AdminRoutes = ({ children }) => {
  const { user, lodding } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  const location = useLocation();
  if (lodding || isAdminLoading) {
    return <progress className="progress w-full"></progress>;
  }
  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="login" state={{ from: location }} replace></Navigate>;
};


export default AdminRoutes;