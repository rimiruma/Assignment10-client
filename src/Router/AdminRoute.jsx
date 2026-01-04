import { Navigate } from "react-router";
import useAdmin from "../hooks/useAdmin";
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AdminRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const [isAdmin, adminLoading] = useAdmin();

  if (loading || adminLoading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return user && isAdmin ? children : <Navigate to="/" replace />;
};

export default AdminRoute;
