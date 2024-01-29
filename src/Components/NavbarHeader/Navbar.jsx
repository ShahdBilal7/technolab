import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../Logo';
import LoginModal from '../LoginModal/LoginModal';
import { NavLink, useState ,useEffect,useDispatch,useSelector,getTotals,FontAwesomeIcon,Link} from "../../Constants.js";
import './Navbar.css';
const NavbarHeader = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleNavLinkClick = () => {
    setExpanded(false);
  };
  const { cartTotalQuantity } = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch])

  return (
    <header>
      <div className="NavbarHeader container">
        <Navbar expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
          <Logo />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-between" id="basic-navbar-nav">
            <Nav>
              <NavLink
                className="link"
                activeclassname="active"
                to="/"
                onClick={handleNavLinkClick}>
                Home
              </NavLink>
              <NavLink
                className="link"
                activeclassname="active"
                to="/products"
                onClick={handleNavLinkClick}>
                Products
              </NavLink>
              <NavDropdown activeclassname="active" className='link ' title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item >&gt; PCB Services</NavDropdown.Item>
                <NavDropdown.Item>&gt;  Projects Idea</NavDropdown.Item>
                <NavDropdown.Item>&gt; 3D Printing</NavDropdown.Item>
              </NavDropdown>
              <NavLink
              className="link"
              activeclassname="active"
              to="/about"
              onClick={handleNavLinkClick}>
              About
            </NavLink><NavLink
            className="link"
            activeclassname="active"
            to="/contact"
            onClick={handleNavLinkClick}>
        Contact    
          </NavLink>

            </Nav> 

            <div className="nav-login "  >
            <div className='link' onClick={()=>setShowLoginModal(true)}>Login</div>
            <Link to={"/cart"} onClick={handleNavLinkClick} className="cart-count link">
              <FontAwesomeIcon className="icon-cart" icon="fa fa-shopping-cart" />
              <span className="count">{cartTotalQuantity}</span>
    
            </Link>
          </div>

            <LoginModal show={showLoginModal}
            handleClose={() => setShowLoginModal(false)}
             />

          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default NavbarHeader;
