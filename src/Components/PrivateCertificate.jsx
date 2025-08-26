import { Navigate } from "react-router-dom";

const UserPrivateRoute = ({ children }) => {
  const userEmail = localStorage.getItem("email");
  const payref = localStorage.getItem("payref");

  if (!userEmail || !payref) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default UserPrivateRoute;
