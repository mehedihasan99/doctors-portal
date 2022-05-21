import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../hook/useAdmin";
import Loading from "../Shared/Loading";

const RequireAdmin = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, loadingAdmin] = useAdmin(user);
  let location = useLocation();
  if (loading || loadingAdmin) {
    return <Loading />;
  }
  if (!user || !admin) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAdmin;
