// Helper functions for common operations

// Format dates (example format: "DD-MM-YYYY")
export const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };
  
  // Check if a role has a specific permission
  export const hasPermission = (role, permission) => {
    return role.permissions.includes(permission);
  };
  
  // Filter active users
  export const filterActiveUsers = (users) => {
    return users.filter((user) => user.status === "Active");
  };
  