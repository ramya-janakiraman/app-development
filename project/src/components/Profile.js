import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
  const [profile, setProfile] = useState({ name: '', email: '', password: '' });
  const [newProfile, setNewProfile] = useState({ name: '', password: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        const email = localStorage.getItem("email");

        if (!token || !email) {
          console.error('Token or Email not found in localStorage');
          return;
        }

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(
          `http://127.0.0.1:8080/api/users/readUser/${email}`,
          config
        );

        if (response.status === 200) {
          setProfile({
            name: response.data.name || '',
            email: response.data.email || '',
            password: response.data.password || ''
          });
          setNewProfile({
            name: response.data.name || '',
            password: response.data.password || ''
          });
        } else {
          console.error('Error fetching profile data:', response.status);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setErrorMessage('Failed to fetch profile data.');
      }
    };

    fetchProfileData();
  }, []);

  const handleSaveProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const email = localStorage.getItem("email");

      if (!token || !email) {
        setErrorMessage('Token or Email is missing in localStorage');
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const updatedProfile = {
        name: newProfile.name,
        password: newProfile.password
      };

      const response = await axios.put(
        `http://127.0.0.1:8080/api/users/updateUser/${email}`,
        updatedProfile,
        config
      );

      if (response.status === 200) {
        setProfile({
          ...profile,
          name: newProfile.name,
          password: newProfile.password
        });
        setIsEditing(false);
        setErrorMessage('');
      } else {
        setErrorMessage(`Error updating profile data: ${response.status}`);
      }
    } catch (error) {
      console.error("Error updating profile data:", error);
      setErrorMessage('Failed to update profile data.');
    }
  };

  const renderPasswordDisplay = () => {
    if (isEditing) {
      return (
        <input
          type="password"
          value={newProfile.password}
          onChange={(e) => setNewProfile({ ...newProfile, password: e.target.value })}
        />
      );
    }
    return (
      <div className="info-value">
        {profile.password ? '*'.repeat(Math.min(profile.password.length, 8)) : ''}
      </div>
    );
  };

  return (
    <div className="edit-profile-container">
      <style>
        {`
          .edit-profile-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            background-color: #fff8e1; /* Light yellow background */
            color: #333;
            box-shadow: 0 0 10px #fdd835; /* Yellow shadow */
            max-width: 600px;
            margin: 90px auto;
            margin-top: 90px;
            margin-right: 400px;
          }

          .profile-photo-container {
            position: relative;
            width: 140px;
            height: 140px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            overflow: hidden;
            margin-bottom: 20px;
          }

          .profile-photo {
            width: 100%;
            height: auto;
          }

          .edit-options {
            display: flex;
            justify-content: space-around;
            width: 100%;
            margin-bottom: 20px;
          }

          .edit-options button {
            background-color: #fff9c4; /* Light yellow background */
            color: #333;
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
          }

          .edit-options button:hover {
            background-color: #fdd835; /* Bright yellow */
            color: #333;
          }

          .info-group {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 15px;
          }

          .info-text {
            font-size: 16px;
            color: #333;
            margin-right: 10px;
            width: 30%;
            text-align: left;
          }

          .info-value {
            font-size: 16px;
            color: #333;
            border-bottom: 1px solid #ccc;
            padding: 2px 0;
            width: calc(70% - 10px);
            margin-left: 0;
          }

          .edit-profile-button {
            background-color: #fdd835; /* Bright yellow */
            color: #333;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            margin-left: 10px;
          }

          .edit-profile-button:hover {
            background-color: #fff9c4; /* Light yellow */
            color: #333;
          }

          .error-message {
            color: red;
            margin-top: 10px;
          }
        `}
      </style>
      
      <div className="info-group">
        <div className="info-text">Name:</div>
        {isEditing ? (
          <input
            type="text"
            value={newProfile.name}
            onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
          />
        ) : (
          <div className="info-value">{profile.name}</div>
        )}
      </div>
      <div className="info-group">
        <div className="info-text">Email:</div>
        <div className="info-value">{profile.email}</div>
      </div>
      <div className="info-group">
        <div className="info-text">Password:</div>
        {renderPasswordDisplay()}
      </div>
      {isEditing ? (
        <>
          <button className="edit-profile-button" onClick={handleSaveProfile}>
            Save Profile
          </button>
          <button className="edit-profile-button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </>
      ) : (
        <button className="edit-profile-button" onClick={() => setIsEditing(true)}>
          Edit Profile
        </button>
      )}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default Profile;
