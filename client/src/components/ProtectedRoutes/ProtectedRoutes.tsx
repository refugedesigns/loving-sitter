import { useState } from "react";
import { Navigate } from "react-router-dom";


const ProtectedRoutes = ({ children}: {children: JSX.Element}): JSX.Element => {
  const [isAuth, setIsAuth] = useState<boolean>(true);
  return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
