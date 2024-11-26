import React, { createContext, useContext, useState } from "react";

// Create RoleContext
const RoleContext = createContext();

// Provide the context to children
export const RoleProvider = ({ children }) => {
  const [roles, setRoles] = useState([]);

  // Add a new role
  const addRole = (role) => {
    setRoles((prevRoles) => [...prevRoles, { ...role, id: prevRoles.length + 1 }]);
  };

  // Update an existing role
  const updateRole = (updatedRole) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) => (role.id === updatedRole.id ? updatedRole : role))
    );
  };

  // Delete a role
  const deleteRole = (id) => {
    setRoles((prevRoles) => prevRoles.filter((role) => role.id !== id));
  };

  return (
    <RoleContext.Provider value={{ roles, addRole, updateRole, deleteRole }}>
      {children}
    </RoleContext.Provider>
  );
};

// Custom hook for using RoleContext
export const useRoleContext = () => {
  return useContext(RoleContext);
};
