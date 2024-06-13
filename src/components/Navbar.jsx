import React from 'react'
import './Navbar.scss'
import { TiThMenu } from "react-icons/ti";
import { FaUserAlt } from "react-icons/fa";

function Navbar() {
  return (
    <div className='navbar-container'>
        <div className="navbar-inner">
          <TiThMenu />
          <FaUserAlt/>
        </div>
    </div>
  )
}

export default Navbar