import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg"

import './header.style.scss'

const Header = () => {
  return (
    <header className="header">
      <Link className="logo-container" to='/'>
        <Logo className="logo" />
      </Link>
      <nav>
        <div className="options">
          <Link className="option" to='/shop'>
            SHOP
          </Link>
          <Link className="option" to='/contact'>
            CONTACT
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header