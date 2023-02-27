import React from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import NotFound from "./pages/NotFound";
import "./default.scss";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import { HomeLayout } from "./layouts/HomeLayout";
import { ProtectedLayout } from "./layouts/ProtectedLayout";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Route>

        <Route path="/auth" element={<ProtectedLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
