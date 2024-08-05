import React, { useState } from 'react';

const ProfileForm = ({ userData, onSave, onCancel }) => {
  const [formData, setFormData] = useState(userData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <div className="form-group">
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
      </div>
      <div className="form-group">
        <label>Mobile:</label>
        <input 
          type="text" 
          name="mobile" 
          value={formData.mobile} 
          onChange={handleChange} 
        />
      </div>
     
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default ProfileForm;