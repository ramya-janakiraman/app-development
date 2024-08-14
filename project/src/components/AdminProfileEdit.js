import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/css/AdminProfileEdit.css';

const AdminProfileEdit = ({ profile, onProfileUpdate }) => {
  const [updatedProfile, setUpdatedProfile] = useState(profile);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile({
      ...updatedProfile,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found. Please log in.");
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const email = updatedProfile.email;
      if (!email) {
        throw new Error("Email is required to update the profile.");
      }

      const response = await axios.put(
        `http://127.0.0.1:8080/api/users/updateUser/${email}`,
        updatedProfile,
        config
      );

      if (response.status === 200) {
        onProfileUpdate(updatedProfile);
        navigate("/admin-profile");
      } else {
        throw new Error(`Failed to update profile: ${response.status}`);
      }

    } catch (error) {
      console.error("Error updating profile:", error.response || error);
      alert(`Failed to update profile: ${error.message}`);
    }
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
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default AdminProfileEdit;
