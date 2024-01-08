import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { NavLink, Link } from 'react-router-dom';
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="w-100 p-5 shadow-lg">
      <div className="container">
        <div className="row px-xl-5 pt-5">
          <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
            <Logo className="mt-0" />
            <p className="mt-3 small text-footer-details">
              Since 2015, <strong>Technolab </strong>has been helping turn ideas
              into reality.Whether you're exploring electronic world, building a
              robot for school or prototyping your first product. No matter your
              vision or skill level, our team are on guard. We are here to help
              you start
              <strong> something</strong>.
            </p>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-4 mb-5">
                <h4 className="mb-4">Quick links</h4>
                <div className="d-flex flex-column justify-content-start">
                  <NavLink className="link mb-2" activeclassname="active" to='/'> <FontAwesomeIcon icon="fa-angle-right" />Home</NavLink>
                  <NavLink className="link mb-2" activeclassname="active" to='/about'><FontAwesomeIcon icon="fa-angle-right" /> About</NavLink>
                  <NavLink className="link mb-2" activeclassname="active" to='/shop'> <FontAwesomeIcon icon="fa-angle-right" /> Shop</NavLink>
                  <NavLink className="link mb-2" activeclassname="active" to='/contact'> <FontAwesomeIcon icon="fa-angle-right" /> Contact</NavLink>
                </div>

              </div>
              <div className="col-md-4 mb-5">
                <h4 className="mb-4">Contact</h4>
                <div className="d-flex flex-column justify-content-start">
                  <i className="link mb-2"  > <FontAwesomeIcon icon="fa-map-location-dot" /> Go to map</i>
                  <i className="link mb-2"  ><FontAwesomeIcon icon="fa-phone" /> (+972) 92 355 329</i>
                  <i className="link mb-2"  > <FontAwesomeIcon icon="fa-mobile" /> (+972) 568 182 180</i>
                  <i className="link mb-2 email" > <FontAwesomeIcon icon="fa-envelope" /> Technolab.Electronics @gmail.com</i>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h4 className=" mb-4">Follow Us</h4>
                <div className="d-flex gap-3 ">
                  <FontAwesomeIcon className="icon fac" icon={['fab', 'facebook']} />
                  <FontAwesomeIcon className="icon what" icon={['fab', 'whatsapp']} />
                  <FontAwesomeIcon className="icon yout" icon={['fab', 'youtube']} />
                  <FontAwesomeIcon className="icon inst" icon={['fab', 'instagram']} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex border-top border-light mx-xl-5 py-4">
          <p className="small text-footer-details m-auto pt-3 mb-0">
            &copy; Copyrights.All rights reserved.
            <Link className="linkT" to="https://technolab.ps">
              Technolab.ps
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
