import { Navigate } from "react-router-dom";

const AdminPrivateRoute = ({ children }) => {
  const adminEmail = localStorage.getItem("adminEmail");

  if (!adminEmail) {
    return <Navigate to="/login" replace />; 
  }

  return children;
};

export default AdminPrivateRoute;
