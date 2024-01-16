import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../Logo/Logo';
import LoginModal from '../LoginModal/LoginModal';
import {navLinks,NavLink,useState} from "../../Constants.js";
import './Navbar.css';
const NavbarHeader = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <header>
      <div className="container">
        <Navbar expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
          <Logo />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-between" id="basic-navbar-nav">
            <Nav>
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                className="link"
                activeclassname="active"
                to={link.path}
                onClick={handleNavLinkClick}
              >
              {link.label}
              </NavLink>
            ))}
    {  /*        <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item>Action</NavDropdown.Item>
                <NavDropdown.Item>Another action</NavDropdown.Item>
            </NavDropdown>*/}
            </Nav>
            <LoginModal handleNavLinkClick={handleNavLinkClick} />
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default NavbarHeader;
