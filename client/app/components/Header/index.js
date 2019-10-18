import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="header">
        <NavLink to="/home" className="header-item header-item-logo" exact>
          IT Brand News
        </NavLink>
        <div className="header-right">
          <NavLink className="header-item" to="/" exact>
            Home
          </NavLink>
          <NavLink to="/users" className="header-item">Users</NavLink>
          <NavLink to="/login" className="header-item">About</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
