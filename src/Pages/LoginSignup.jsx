import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from '../Components/Assets/logo.png'
import { Link } from 'react-router-dom';
const LoginSignup = () => {
  return (
    <div className="loginCont">
      <div class="form-box">
        <h2 id="title">Log in</h2>
        <form>
          <div class="logo-login">
            <img src={logo} alt="logo" />
          </div>
          <div class="input-group">
            <div class="input-field validate-input" data-validate="" id="emailField">
              <FontAwesomeIcon icon={"fa-envelope"} />
              <input id="email" type="email" placeholder="Email" />
            </div>
            <div class="input-field validate-input " data-validate="" id="passwordField">
              <FontAwesomeIcon icon={"fa-lock"} />
              <input id="password" type="password" placeholder="Password" />
              <p id="toggle-password">
                <i id="eye" class="fa fa-eye disable"></i>
                <i id="eye-slash" class="fa fa-eye-slash"></i>
              </p>
            </div>
            <p id="lostPass">
              Lost password <Link className="lin">Click Here!</Link>
            </p>

          </div>

          <button className="mt-4" type="button" id="signinBtn" >
            Log in
          </button>

        </form>
      </div>


    </div>
  )
}

export default LoginSignup
