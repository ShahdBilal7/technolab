import {  logoImage, FontAwesomeIcon, useState, Link ,Modal} from "../../Constants.js";
import "./loginModal.css";
const LoginModal = (props) => {
  const { show, handleClose,describe } = props;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
      <Modal className="loginCont" show={show} onHide={handleClose} centered>
        <Modal.Header className='flex-column-reverse' closeButton>
          <div className="logo-login">
            <img src={logoImage} alt="logo" />
          </div>
          <h2 id="title">Log in</h2>
        </Modal.Header>
        <Modal.Body>
        <p>{describe}</p>
          <form onSubmit={handleClose} className='d-flex flex-column align-items-center p-4'>
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
  );
}

export default  LoginModal;
