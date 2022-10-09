import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../config/firebase";

const ProtectedRoutes = () => {
  return auth?.currentUser?.displayName ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
