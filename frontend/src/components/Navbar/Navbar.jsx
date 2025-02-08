import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import bell from '../../assets/notification.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Series</li>
          <li>Trending</li>
          <li>Actors</li>
        </ul>
      </div>
      <div className="navbar-right">
        <input type="search" name="" id="" placeholder=" search"/>
        <img src={bell} alt="" className='bell'/>
        <div className="profile">
        <div className="logout">Signout of VTUFLIX</div>
        </div> 
        <div className="name">hi, Abd</div>
        
      </div>
    </div>
  )
}

export default Navbar
