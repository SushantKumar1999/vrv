import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { RoleProvider } from "./context/RoleContext";
import Dashboard from "./pages/Dashboard/Dashboard";
import UsersPage from "./pages/Users/UsersPage";
import RolesPage from "./pages/Roles/RolesPage";
import "./App.css";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <div className="App">
      <h1>VRV Security’s Frontend Developer Intern Assignment</h1>
      <UserProvider>
        <RoleProvider>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/roles" element={<RolesPage />} />
            </Routes>
        </RoleProvider>
      </UserProvider>
      <Footer />
    </div>
  );
};

export default App;
