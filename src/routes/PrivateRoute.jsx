import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ token, children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
    return children;
  }, [token]);
};
export default PrivateRoute;
