import React, { useEffect, useState } from 'react';
import api from '../api';

const SameZodiacUsers = ({ zodiacSign }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await api.get(`/users?zodiacSign=${zodiacSign}`);
      setUsers(response.data);
    };

    getUsers();
  }, [zodiacSign]);

  const connectWithUser = (user) => {
    // Implement your connection logic here
  };

  return (
    <div>
      <h2>Users with the same Zodiac Sign ({zodiacSign})</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} 
            <button onClick={() => connectWithUser(user)}>
              Connect
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SameZodiacUsers;
