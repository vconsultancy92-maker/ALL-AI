import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>🤖 AI Tools Dashboard</h1>
        </div>
        <div className="navbar-menu">
          <a href="#home">Home</a>
          <a href="#tools">Tools</a>
          <a href="#settings">Settings</a>
          <a href="#docs">Docs</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
