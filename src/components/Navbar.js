import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import lo from "./img/logo.png"
import{GiHamburgerMenu} from "react-icons/gi"
import "./css/Navbar.css"
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div>
        <nav className='main-nav'>
            <div className="logo">
                <img src={lo} alt="" />
            </div>
            <div className={showMediaIcons ? "menu-link mobile" :"menu-link"}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/optlog">Rentals</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/optlog">Login</Link></li>
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

export default Navbar