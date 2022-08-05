import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/Auth";
const PrivateRoutes = () => {
  const { user } = useAuth();
  return user.loggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/accounts/login/" replace />
  );
};

export { PrivateRoutes };
