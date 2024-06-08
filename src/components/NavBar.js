import React from 'react';
import '../components/styles.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <a href="/" className="logo">MovieBlocks</a>
      <div className="nav-links">
        <a href="/" className="nav-link">Home</a>
        <div className="genre-dropdown">
          <a href="#" className="nav-link">Genre</a>
          <div className="dropdown-menu">
            <a href="/comedy" className="dropdown-item">Comedy</a>
            <a href="#" className="dropdown-item">Horror</a>
            <a href="#" className="dropdown-item">Adventure</a>
            <a href="#" className="dropdown-item">Action</a>
            <a href="#" className="dropdown-item">Thriller</a>
            <a href="#" className="dropdown-item">Mystery</a>
            <a href="#" className="dropdown-item">Crime</a>
            <a href="#" className="dropdown-item">Family</a>
            <a href="#" className="dropdown-item">Drama</a>
            <a href="#" className="dropdown-item">War</a>
          </div>
        </div>
        <a href="#" className="nav-link">Top Picks</a>
        <a href="#" className="nav-link">Shows</a>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
}

export default NavBar;
