// Users.js
import React, { useState, useEffect } from 'react';
import '../assets/css/Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);

  // Simulate fetching user data from an API
  useEffect(() => {
    // Sample data to simulate API response
    const sampleUsers = [
      {
        id: '1',
        name: 'Vijay',
        email: 'vijay@example.com',
        role: 'Admin',
      },
      {
        id: '2',
        name: 'Dhana',
        email: 'dhana@example.com',
        role: 'User',
      },
      {
        id: '3',
        name: 'Priya',
        email: 'priya@example.com',
        role: 'Moderator',
      },
    ];

    // Simulate API call delay
    setTimeout(() => {
      setUsers(sampleUsers);
    }, 1000);
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
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
