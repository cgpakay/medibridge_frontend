/* import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../context/authContext";

const ProtectedRoute = ({children, allowedRoles}) => {

  const {Token, role} = useContext(authContext)

  const isAllowed = allowedRoles.includes(role)
  const accessibleRoute = toke && isAllowed ? children : <Navigate to="/login" {true} />


  return accessibleRoute;
};

export default ProtectedRoute;
 */
