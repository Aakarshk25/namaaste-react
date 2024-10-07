import React from 'react'
import "./Header.css"
// import { assets } from "../assets";


const Header = () => {
  return (
    <div className="header">
      <div className="logo">
      <img src="https://logos-world.net/wp-content/uploads/2020/11/Zomato-Logo.png" alt="Logo" className='logo' />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
      </div>

    </div>
  )
}

export default Header