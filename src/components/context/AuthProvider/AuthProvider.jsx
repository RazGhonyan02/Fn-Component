import { createContext, useState } from "react";

export const authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const login = () => {
    setToken(true);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <authcontext.Provider value={{ login, logout, token }}>
      {children}
    </authcontext.Provider>
  );
};
