import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <h2 className="text-center mt-20 text-red-500 text-xl">
      Access Denied: You don’t have permission.
    </h2>;
  }

  return children;
}

export default ProtectedRoute;
