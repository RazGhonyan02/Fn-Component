import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const token = useSelector((store) => {
    return store.token;
  });
  const navigate = useNavigate();
  if (token) {
    navigate("/");
  } else {
    return children;
  }
};
export default PublicRoute;
