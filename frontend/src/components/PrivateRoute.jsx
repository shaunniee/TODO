import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { history } from "../helpers/history";

function PrivateRoute({ children,user,isLoading }) {
  if (isLoading) return null;
  return user ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;
