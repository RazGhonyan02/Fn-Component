import { createContext, useState, useEffect } from "react";

export const authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  const login = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };
  return (
    <authcontext.Provider
      value={
                { login, logout, token }
            }
    >
      {children}
    </authcontext.Provider>
  );
};
