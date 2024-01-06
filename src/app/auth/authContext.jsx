import React, { useEffect, useState, useMemo } from "react";
import { useDispatch } from "react-redux";

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);
  const [waitAuthCheck, setWaitAuthCheck] = useState(false);
  const dispatch = useDispatch();

  const authContextValue = useMemo(
    () => ({ isAuthenticated }),
    [isAuthenticated]
  );

  return waitAuthCheck ? (
    <h1>Loading...</h1>
  ) : (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
