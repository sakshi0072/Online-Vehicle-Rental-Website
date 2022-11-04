import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import lo from "./img/logo.png"
import{GiHamburgerMenu} from "react-icons/gi"
import "./css/Navbar.css"
const NavbarLog = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div>
        <nav className='main-nav'>
            <div className="logo">
                <img src={lo} alt="" />
            </div>
            <div className={showMediaIcons ? "menu-link mobile" :"menu-link"}>
                <ul>
                    <li><Link to="/vehicle">Home</Link></li>
                    <li><Link to="/vehicle">Rentals</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </div>
            <div id="hamburger" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <a href="#">
                <GiHamburgerMenu/>
              </a>
            </div>
        </nav>
    </div>
  )
}

export default NavbarLog