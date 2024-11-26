import React, { useEffect, useState } from "react";
import UsersTable from "./UsersTable";
import AddEditUserModal from "../../components/Modal/AddEditUserModal";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Simulate fetching users from API
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
    setUsers(mockUsers);
  }, []);

  const handleAddUser = () => {
    setSelectedUser(null);
    setIsModalOpen(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleSaveUser = (user) => {
    if (selectedUser) {
      setUsers(users.map((u) => (u.id === selectedUser.id ? user : u)));
    } else {
      setUsers([...users, { ...user, id: users.length + 1 }]);
    }
  };

  return (
    <div>
      <h1>Manage Users</h1>
      <button onClick={handleAddUser}>Add User</button>
      <UsersTable
        users={users}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />
      {isModalOpen && (
        <AddEditUserModal
          user={selectedUser}
          onSave={handleSaveUser}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default UsersPage;
