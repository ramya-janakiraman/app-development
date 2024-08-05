// AdminProfileEdit.js
import React, { useState } from 'react';
import '../assets/css/AdminProfileEdit.css';

const AdminProfileEdit = ({ profile, onProfileUpdate }) => {
  const [updatedProfile, setUpdatedProfile] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile({
      ...updatedProfile,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUpdatedProfile({
        ...updatedProfile,
        profilePicture: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onProfileUpdate(updatedProfile);
  };

  return (
    <div className="admin-profile-edit">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={updatedProfile.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={updatedProfile.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="profilePicture">Profile Picture:</label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        {updatedProfile.profilePicture && (
          <div className="profile-picture-preview">
            <img src={updatedProfile.profilePicture} alt="Profile Preview" />
          </div>
        )}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default AdminProfileEdit;
