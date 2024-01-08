import { NavLink } from 'react-bootstrap'
import logo from '../Assets/logo.png'
const Logo = () => {
  return (
    <NavLink className="link" activeclassname="active" to='/'>  <div className='nav-logo'>
      <img src={logo} alt="logo" />
      <div className='info'>
        <h4>Technolab</h4>
        <span>Electronics</span>
      </div>
    </div></NavLink>

  )
}

export default Logo
