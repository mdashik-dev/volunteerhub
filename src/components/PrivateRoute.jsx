import { Navigate, useLocation } from "react-router-dom";
// import { useAuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  // const { user } = useAuthContext();
  const location = useLocation();
  const user = {name:'test'}

  return user ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
