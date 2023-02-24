import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const token = useSelector((store) => {
    return store.token;
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
    return children;
  }, [token]);
};
export default PrivateRoute;
