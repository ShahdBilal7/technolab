import { NavLink ,logoImage } from "../../Constants.js";
import "./logo.css"
const Logo = () => {
  return (
    <NavLink className="link" activeclassname="active" to='/'> 
     <div className='logo'>
      <img src={logoImage} alt="logo" />
      <div className='info'>
        <h4>Technolab</h4>
        <span>Electronics</span>
      </div>
    </div>
    </NavLink>

  )
}

export default Logo
