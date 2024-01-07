import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'
import { NavLink } from 'react-router-dom/dist';
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className='row'>
          <div className='col-lg-4'>
            <h5>TECHNOLAB </h5>
            <p class="small text-footer-details">Since 2015, <strong>Technolab </strong>has been helping turn ideas into reality.Whether you're exploring electronic world, building a robot for school or prototyping your first product. No matter your vision or skill level, our team are on guard. We are here to help you start
              <strong>something</strong>.</p></div>
          <div>
            <h5>Quick links</h5>

            <ul>
              <li ><NavLink className="" activeclassname="active" to='/'>Home</NavLink> </li>
              <li ><NavLink className="" activeclassname="active" to='/about'>About</NavLink></li>
              <li ><NavLink className="" activeclassname="active" to='/shop'>Shop</NavLink></li>
              <li ><NavLink className="" activeclassname="active" to='/contact'>Contact</NavLink></li>
            </ul>

          </div>
          <div>
            <h5>Contact</h5>
            <ul class="list-unstyled text-footer-details">
              <li>Go to map</li>
              <li>(+972) 92 355 329</li>
              <li>(+972) 568 182 180</li>
              <li>Technolab.Electronics @gmail.com</li>
            </ul>
          </div>
          <div>
            <h5>Follow Us</h5>
            <FontAwesomeIcon icon={"fa-user"} />
            <FontAwesomeIcon icon={"fa-user"} />
            <FontAwesomeIcon icon={"fa-user"} />
            <FontAwesomeIcon icon={"fa-user"} />
          </div>
        </div>
        <hr></hr>
        <div className='row'>
        <p class="small text-footer-details m-auto pt-3 mb-0">
        © Copyrights.All rights reserved.<a class="text-primary" href="https://technolab.ps">Technolab.ps</a></p>
        </div>
      </div>

    </footer>
  )
}

export default Footer;
