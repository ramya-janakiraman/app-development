import React, { useState, useEffect } from 'react';
import ProfileForm from './ProfileForm';
import ProfileDetails from './ProfileDetails';
import '../assets/css/Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    mobile: '', // Added mobile number
    address: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch user data from API or local storage
    // Example data
    const fetchedData = {
      name: 'Ramya J',
      email: 'ramya@example.com',
      mobile: '1234567890', // Example mobile number
      address: '3/912,police line street,R K PET,631303'
    };
    setUserData(fetchedData);
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedData) => {
    // Save updated data to API or local storage
    setUserData(updatedData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      {isEditing ? (
        <ProfileForm 
          userData={userData} 
          onSave={handleSave} 
          onCancel={handleCancel} 
        />
      ) : (
        <>
          <ProfileDetails userData={userData} />
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Profile;
