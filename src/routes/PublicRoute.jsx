import { Navigate } from "react-router-dom";

const PublicRoute = ({ children, token }) => {
  if (token) {
    Navigate("/");
  } else {
    return children;
  }
};
export default PublicRoute;
