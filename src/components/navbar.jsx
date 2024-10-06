// Navbar.js
import React, { useContext } from 'react';
import AuthContext from '../context/authContext';


const Navbar = () => {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <nav>
      <h1>React context</h1>
      {user ? (
        <>
          <span>Welcome, {user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login({ name: 'Jane Doe' })}>Login</button>
      )}
    </nav>
  );
};

export default Navbar;
