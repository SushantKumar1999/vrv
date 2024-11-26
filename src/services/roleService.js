// Simulated API for role operations
const mockRoles = [
    { id: 1, name: "Admin", description: "Administrator role", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "User", description: "User role", permissions: ["Read"] },
  ];
  
  // Fetch all roles
  export const fetchRoles = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve([...mockRoles]), 500);
    });
  };
  
  // Add a new role
  export const addRole = (role) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ ...role, id: mockRoles.length + 1 }), 500);
    });
  };
  
  // Update an existing role
  export const updateRole = (updatedRole) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = mockRoles.findIndex((role) => role.id === updatedRole.id);
        if (index !== -1) {
          mockRoles[index] = updatedRole;
          resolve(updatedRole);
        } else {
          resolve(null);
        }
      }, 500);
    });
  };
  
  // Delete a role
  export const deleteRole = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = mockRoles.findIndex((role) => role.id === id);
        if (index !== -1) {
          mockRoles.splice(index, 1);
          resolve(true);
        } else {
          resolve(false);
        }
      }, 500);
    });
  };
  