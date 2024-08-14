// import React, { useState, useEffect } from 'react';
// import adminIm from '../assets/images/admin-im.webp';
// import '../assets/css/AdminProfile.css';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// const AdminProfile = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [profile, setProfile] = useState({
//     name: '',
//     email: '',
//     profilePicture: adminIm,
//   });
//   const [error, setError] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           console.error("No token found. Please log in.");
//           navigate("/login");
//           return;
//         }

//         const config = {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         };

//         const response = await axios.get(
//           "http://127.0.0.1:8080/api/users/readUsers",
//           config
//         );

//         const adminData = response.data.find(user => user.roles.includes('ADMIN'));

//         if (adminData) {
//           setProfile({
//             ...profile,
//             name: adminData.name,
//             email: adminData.email,
//           });
//         } else {
//           console.log('Admin data not found.');
//         }
//       } catch (error) {
//         if (error.response && error.response.status === 403) {
//           console.error("Access forbidden: You don't have permission to access this resource.");
//           navigate("/login");
//         } else {
//           console.error("Error fetching data:", error.message);
//         }
//       }
//     };
//     fetchData();
//   }, [navigate]);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleProfileUpdate = async (e) => {
//     e.preventDefault();
//     setError('');
//     setMessage('');

//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("No token found. Please log in.");
//         navigate("/login");
//         return;
//       }

//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       const response = await axios.put(
//         `http://127.0.0.1:8080/api/users/updateUser/${encodeURIComponent(profile.email)}`,
//         {
//           name: profile.name,
//           email: profile.email,
//         },
//         config
//       );

//       if (response.status === 200) {
//         setIsEditing(false);
//         setMessage('Profile updated successfully.');
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 403) {
//         console.error("Access forbidden: You don't have permission to update this profile.");
        
//       } else {
//         console.error("Error updating profile:", error.message);
//         setError('Failed to update profile.');
//       }
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({
//       ...profile,
//       [name]: value,
//     });
//   };

//   return (
//     <div className="admin-profile-container">
//       {error && <p className="error">{error}</p>}
//       {message && <p className="message">{message}</p>}

//       {isEditing ? (
//         <div className="admin-profile-edit">
//           <h2>Edit Profile</h2>
//           <form onSubmit={handleProfileUpdate}>
//             <div className="form-group">
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={profile.name}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={profile.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <button type="submit">Save Changes</button>
//             <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
//           </form>
//         </div>
//       ) : (
//         <div className="admin-profile">
//           <img src={profile.profilePicture} alt="Admin" className="admin-image" />
//           <h2 style={{ color: 'black', fontSize: '20px' }}>{profile.name}</h2>
//           <p style={{ color: 'black', fontSize: '16px' }}>{profile.email}</p>
//           <button onClick={handleEditClick}>Edit Profile</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminProfile;
import React, { useState, useEffect } from 'react';
import adminIm from '../assets/images/admin-im.webp';
import '../assets/css/AdminProfile.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    profilePicture: adminIm,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const userEmail = localStorage.getItem('email');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (!token) {
          console.error('No token found. Please log in.');
          navigate('/login');
          return;
        }

        const response = await axios.get(
          `http://127.0.0.1:8080/api/users/readUser/${encodeURIComponent(userEmail)}`,
          {
            headers: { 'Authorization': `Bearer ${token}` }
          }
        );

        const adminData = response.data;

        if (adminData && adminData.roles.includes('ADMIN')) {
          setProfile({
            name: adminData.name,
            email: adminData.email,
            profilePicture: adminData.profilePicture || adminIm, // Use profile picture from response or fallback
          });
        } else {
          console.log('Admin data not found.');
        }
      } catch (error) {
        if (error.response && error.response.status === 403) {
          console.error("Access forbidden: You don't have permission to access this resource.");
          navigate('/login');
        } else {
          console.error('Error fetching profile:', error.message);
          setError('Failed to fetch profile.');
        }
      }
    };

    fetchProfile();
  }, [token, navigate, userEmail]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await axios.put(
        `http://127.0.0.1:8080/api/users/updateUser/${encodeURIComponent(profile.email)}`,
        {
          name: profile.name,
          email: profile.email,
        },
        {
          headers: { 'Authorization': `Bearer ${token}` }
        }
      );

      if (response.status === 200) {
        setIsEditing(false);
        setMessage('Profile updated successfully.');
      }
    } catch (error) {
      if (error.response && error.response.status === 403) {
        console.error("Access forbidden: You don't have permission to update this profile.");
      } else {
        console.error('Error updating profile:', error.message);
        setError('Failed to update profile.');
      }
    }
  };

  return (
    <div className="admin-profile-container">
      {error && <p className="error">{error}</p>}
      {message && <p className="message">{message}</p>}

      {isEditing ? (
        <div className="admin-profile-edit">
          <h2>Edit Profile</h2>
          <form onSubmit={handleProfileUpdate}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={profile.name}
              onChange={handleChange}
              required
              style={{
                padding: '10px',
                width: '100%',
                marginBottom: '10px',
                borderRadius: '3px',
                border: '1px solid #ccc',
                boxSizing: 'border-box'
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={profile.email}
              onChange={handleChange}
              required
              style={{
                padding: '10px',
                width: '100%',
                marginBottom: '10px',
                borderRadius: '3px',
                border: '1px solid #ccc',
                boxSizing: 'border-box'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '10px',
                backgroundColor: '#FFCC00',
                color: 'white',
                borderRadius: '3px',
                border: 'none',
                cursor: 'pointer',
                marginTop: '10px'
              }}
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              style={{
                padding: '10px',
                backgroundColor: '#dc3545',
                color: 'white',
                borderRadius: '3px',
                border: 'none',
                cursor: 'pointer',
                marginTop: '10px',
                marginLeft: '10px'
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      ) : (
        <div className="admin-profile">
          <img src={profile.profilePicture} alt="Admin" className="admin-image" />
          <h2 style={{ color: 'black', fontSize: '20px' }}>{profile.name}</h2>
          <p style={{ color: 'black', fontSize: '16px' }}>{profile.email}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
