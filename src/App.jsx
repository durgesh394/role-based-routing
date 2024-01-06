import React from "react";
import "./App.css";
import Authorization from "./components/authorization/authorization";
import Layout from "./pages/Layout";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthProvider } from "./app/auth/authContext";

const App = () => {
  const location = useLocation();
  const { role } = useSelector((state) => state.auth);

  return (
    <div>
      <AuthProvider>
        <Authorization userRole={role} location={location}>
          <Layout />
        </Authorization>
      </AuthProvider>
    </div>
  );
};

export default App;
