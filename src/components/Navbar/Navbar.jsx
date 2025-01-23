import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
<div className="navbar-main">
  <ul className="navbar-list">
    <li className="navbar-logo">
      <img src= '../../assets/book-my-hotel-logo.svg' alt="Book My Hotel Logo" />
    </li>
    <li className="navbar-item">
      <a href="/">Home</a>
    </li>
    <li className="navbar-item">
      <a href="/hotels">Hotels</a>
    </li>
    <li className="navbar-item">
      <a href="/places">Places</a>
    </li>
    <li className="navbar-item">
      <a href="/signin">Sign in</a>
    </li>
  </ul>
</div>

  )
}

export default Navbar