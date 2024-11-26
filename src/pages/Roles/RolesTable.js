import React from "react";
import "./RolesTable.css";

const RolesTable = ({ roles, onEdit, onDelete }) => (
  <table>
    <thead>
      <tr>
        <th>Role Name</th>
        <th>Description</th>
        <th>Permissions</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {roles.map((role) => (
        <tr key={role.id}>
          <td>{role.name}</td>
          <td>{role.description}</td>
          <td>{role.permissions.join(", ")}</td>
          <td>
            <div className="table-buttons">
              <button onClick={() => onEdit(role)}>Edit</button>
              <button onClick={() => onDelete(role.id)}>Delete</button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default RolesTable;
