// App-wide constants

// Permission types
export const PERMISSIONS = {
    READ: "Read",
    WRITE: "Write",
    DELETE: "Delete",
  };
  
  // User statuses
  export const USER_STATUSES = {
    ACTIVE: "Active",
    INACTIVE: "Inactive",
  };
  
  // Default roles
  export const DEFAULT_ROLES = [
    {
      id: 1,
      name: "Admin",
      description: "Full access to all features",
      permissions: [PERMISSIONS.READ, PERMISSIONS.WRITE, PERMISSIONS.DELETE],
    },
    {
      id: 2,
      name: "User",
      description: "Limited access to read-only features",
      permissions: [PERMISSIONS.READ],
    },
  ];
  