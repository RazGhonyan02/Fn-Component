export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const LoginReducer = (token = null, { type }) => {
  switch (type) {
    case LOGIN:
      token = true;
      return localStorage.setItem("token", token);
    case LOGOUT:
      return localStorage.removeItem("token");
    default:
      return localStorage.getItem("token");
  }
};
