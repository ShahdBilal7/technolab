import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../Logo/Logo';
import LoginModal from '../LoginModal/LoginModal';
import { navLinks, NavLink, useState } from "../../Constants.js";
import './Navbar.css';
const NavbarHeader = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <header>
      <div className="NavbarHeader container">
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
              <NavDropdown activeclassname="active" className='link ' title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item >&gt; PCB Services</NavDropdown.Item>
                <NavDropdown.Item>&gt;  Projects Idea</NavDropdown.Item>
                <NavDropdown.Item>&gt; 3D Printing</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <LoginModal handleNavLinkClick={handleNavLinkClick} />
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default NavbarHeader;
