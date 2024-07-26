import React, { useState } from 'react';

const ProfileForm = ({ userData, onSave, onCancel }) => {
  const [formData, setFormData] = useState(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
        />
      </label>
      <label>
        Email:
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
      </label>
      <label>
        Mobile Number:
        <input 
          type="tel" 
          name="mobile" 
          value={formData.mobile} 
          onChange={handleChange} 
          pattern="[0-9]{10}" 
          placeholder="1234567890" 
        />
      </label>
      <label>
        Address:
        <textarea 
          name="bio" 
          value={formData.address} 
          onChange={handleChange} 
        />
      </label>
      <div className="button-wrapper">
        <button type="submit">Save</button>
        <button type="button" className="cancel-button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default ProfileForm;
