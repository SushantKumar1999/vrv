// Simulated API for user operations
const mockUsers = [
    { id: 1, name: "Sushant Kumar", email: "sushantkumar19990819@gmail.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", role: "Admin", status: "Active" },
    { id: 4, name: "Bob Williams", email: "bob.williams@example.com", role: "Moderator", status: "Pending" },
    { id: 5, name: "Charlie Brown", email: "charlie.brown@example.com", role: "User", status: "Inactive" },
    { id: 6, name: "Diana Prince", email: "diana.prince@example.com", role: "Admin", status: "Active" },
    { id: 7, name: "Evan Davis", email: "evan.davis@example.com", role: "Guest", status: "Pending" },
    { id: 8, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" } 
  ];
  
  // Fetch all users
  export const fetchUsers = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve([...mockUsers]), 500);
    });
  };
  
  // Add a new user
  export const addUser = (user) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ ...user, id: mockUsers.length + 1 }), 500);
    });
  };
  
  // Update an existing user
  export const updateUser = (updatedUser) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = mockUsers.findIndex((user) => user.id === updatedUser.id);
        if (index !== -1) {
          mockUsers[index] = updatedUser;
          resolve(updatedUser);
        } else {
          resolve(null);
        }
      }, 500);
    });
  };
  
  // Delete a user
  export const deleteUser = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = mockUsers.findIndex((user) => user.id === id);
        if (index !== -1) {
          mockUsers.splice(index, 1);
          resolve(true);
        } else {
          resolve(false);
        }
      }, 500);
    });
  };
  