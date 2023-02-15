import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    Navigate("/login");
  } else {
    return children;
  }
};
export default PublicRoute;
