import React, { useEffect, useState } from "react";
import RolesTable from "./RolesTable";
import AddEditRoleModal from "../../components/Modal/AddEditRoleModal";

const RolesPage = () => {
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Simulate fetching users from API
    const mockRoles = [
      { id: 1, name: "Admin", description: "Administrator role", permissions: ["Read", "Write", "Delete"] },
      { id: 2, name: "User", description: "User role", permissions: ["Read"] },
    ];
    setRoles(mockRoles);
  }, []);

  const handleAddRole = () => {
    setSelectedRole(null);
    setIsModalOpen(true);
  };

  const handleEditRole = (role) => {
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  const handleDeleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  const handleSaveRole = (role) => {
    if (selectedRole) {
      setRoles(roles.map((r) => (r.id === selectedRole.id ? role : r)));
    } else {
      setRoles([...roles, { ...role, id: roles.length + 1 }]);
    }
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <h1>Manage Roles</h1>
        <button onClick={handleAddRole}>Add Role</button>
        <RolesTable
          roles={roles}
          onEdit={handleEditRole}
          onDelete={handleDeleteRole}
        />
        {isModalOpen && (
          <AddEditRoleModal
            role={selectedRole}
            onSave={handleSaveRole}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default RolesPage;
