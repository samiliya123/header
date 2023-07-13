import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbarContainer">
        <ul className='navbarList'>
          <li className="navbarListed">About</li>
          <li className="navbarListed">Event</li>
          <li className="navbarListed">Annual Report</li>
          <li className="navbarListed">Sign Up</li>
          
        </ul>
        <button className='navbarButton'>Sign In</button>
      </div>

    </div>
  )
}
