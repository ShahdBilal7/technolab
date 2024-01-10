
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../Logo/Logo";
import LoginModal from "../LoginModal/LoginModal";

const Navbar = () => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  }

  return (
    <header className={state ? 'mobile-header' : ''}>
      <div className='nav container'>
        <Logo />
        <div onClick={handleClick} className='mobile'>
          <FontAwesomeIcon id="bar" icon={state ? "fa-x" : "fa-bars-staggered"} />
        </div>
        <div className={`nav-change ${state ? 'mobile-menu-visible' : ''}`}>
          <div className='nav-menu'>
            <ul>
              <li ><NavLink className="link" activeclassname="active" to='/' onClick={handleClick}>Home</NavLink> </li>
              <li ><NavLink className="link" activeclassname="active" to='/shop' onClick={handleClick}>Shop</NavLink></li>
              <li ><NavLink className="link" activeclassname="active" to='/about' onClick={handleClick}>About</NavLink></li>
              <li ><NavLink className="link" activeclassname="active" to='/contact' onClick={handleClick}>Contact</NavLink></li>
            </ul>
          </div>
          <LoginModal />
        </div>
      </div>
    </header>
  )
}
export default Navbar;
