import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend
    axios.get('http://127.0.0.1:8080/api/users/readUsers', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Add authentication token if needed
      }
    })
    .then(response => {
      // Filter users to include only those with the "USER" role
      const userRoles = response.data.filter(user => user.roles === 'USER');
      setUsers(userRoles);
    })
    .catch(error => {
      console.error('There was an error fetching the users!', error);
    });
  }, []);

  return (
    <div className="users-container">
      <h2>Total Users</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.uid}>
              <td>{user.uid}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.roles}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
