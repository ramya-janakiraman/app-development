// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [redirectPath, setRedirectPath] = useState(null);

  const login = (user, admin = false) => {
    setIsLoggedIn(true);
    setIsAdmin(admin);
    setRedirectPath(null); // Clear redirect path on login
  };

  const logout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setRedirectPath(null); // Clear redirect path on logout
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin, redirectPath, setRedirectPath, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
