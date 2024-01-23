import { useSelector, logoImage, FontAwesomeIcon, useState, Link,useDispatch,useEffect,getTotals } from "../../Constants.js";
import { Modal } from "react-bootstrap";
import "./loginModal.css";
const LoginModal = ({ handleNavLinkClick }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    handleNavLinkClick();
    setShow(true);
  }
  const handleSubmit = () => setShow(false);
  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };
  const { cartTotalQuantity } = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch])

  return (
    <>
      <div className="nav-login "  >
        <div className='link' onClick={handleShow}>Login</div>
        <Link to={"/cart"} onClick={handleNavLinkClick} className="cart-count link">
          <FontAwesomeIcon className="icon" icon="fa fa-shopping-cart" />
          <span className="count">{cartTotalQuantity}</span>

        </Link>
      </div>
      <Modal className="loginCont" show={show} onHide={handleClose} centered>
        <Modal.Header className='flex-column-reverse' closeButton>
          <div className="logo-login">
            <img src={logoImage} alt="logo" />
          </div>
          <h2 id="title">Log in</h2>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className='d-flex flex-column align-items-center p-4'>
            <div className="input-group">
              <div className="input-field" id="emailField">
                <FontAwesomeIcon icon={"fa-envelope"} />
                <input id="email" name="email" type="email" placeholder="Email" required />
              </div>
              <div className="input-field"  id="passwordField">
                <FontAwesomeIcon icon="fa-lock" />
                <input id="password" name="password"
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder="Password" required />
                <p id="toggle-password" onClick={handlePasswordToggle}>
                  <FontAwesomeIcon id="eye-slash" icon={passwordVisible ? 'eye' : 'eye-slash'} />
                </p>
              </div>
            </div>
            <button className='submit mt-2' type="submit" id="loginBtn" >
              Submit
            </button>
          </form>
          <div className="mod-footer px-4">
            <p id="lostPass">
              <Link className="lin"> Forgot your password?</Link>
            </p>
            <p className='reg' >
              No account?
              <Link className="lin" onClick={handleClose} to="/register" > Register</Link>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal
