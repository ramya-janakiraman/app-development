import React from 'react';

const ProfileDetails = ({ userData }) => {
  return (
    <div className="profile-details">
      <h2>{userData.name}</h2>
      <p>Email: {userData.email}</p>
      <p>Mobile Number: {userData.mobile}</p>
    </div>
  );
};

export default ProfileDetails;