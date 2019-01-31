import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <nav>
        <h1 className="logo">Friends</h1>
        <div className="right-nav">
          <NavLink to="/">View Friends</NavLink>
          <NavLink to="/add-friend">Add Friend</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
