import React, { useState } from 'react';
import AdminProfileEdit from './AdminProfileEdit';
import adminIm from '../assets/images/admin-im.webp'; // Correctly import the image
import '../assets/css/AdminProfile.css';

const AdminProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Ramya Janakiraman',
    email: 'ramya.j@gmail.com',
    profilePicture: adminIm, // Use the imported image
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleProfileUpdate = (updatedProfile) => {
    setProfile(updatedProfile);
    setIsEditing(false);
  };

  console.log('Profile State:', profile); // Debug the profile state

  return (
    <div className="admin-profile-container">
      {isEditing ? (
        <AdminProfileEdit profile={profile} onProfileUpdate={handleProfileUpdate} />
      ) : (
        <div className="admin-profile">
          <img src={profile.profilePicture} alt="Admin" className="admin-image" />
          <h2 style={{ color: 'black', fontSize: '20px' }}>{profile.name}</h2>
          <p style={{ color: 'black', fontSize: '16px' }}>{profile.email}</p>
          <button onClick={handleEditClick}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
