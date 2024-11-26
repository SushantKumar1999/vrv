import React, { useState } from "react";

const AddEditRoleModal = ({ role, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    name: role?.name || "",
    description: role?.description || "",
    permissions: role?.permissions || [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{role ? "Edit Role" : "Add Role"}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Role Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div>
            <label>Permissions:</label>
            <input
              type="text"
              name="permissions"
              value={formData.permissions.join(", ")}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  permissions: e.target.value.split(",").map((p) => p.trim()),
                }))
              }
              placeholder="Comma-separated (e.g., Read, Write)"
            />
          </div>
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEditRoleModal;
