import React, { createContext, useContext, useState } from "react";

// Create UserContext
const UserContext = createContext();

// Provide the context to children
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  // Add a new user
  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, { ...user, id: prevUsers.length + 1 }]);
  };

  // Update an existing user
  const updateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  // Delete a user
  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for using UserContext
export const useUserContext = () => {
  return useContext(UserContext);
};
