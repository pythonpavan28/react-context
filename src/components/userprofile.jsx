// UserProfile.js
import React, { useContext } from 'react';
import AuthContext from '../context/authContext';


const UserProfile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
    </div>
  );
};

export default UserProfile;
