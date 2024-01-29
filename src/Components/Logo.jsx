import {logoImage,NavLink } from "../Constants.js";
const Logo = () => {
  return (
    <NavLink className="link" activeclassname="active" to='/'>
      <div className='logo d-flex align-items-center gap-2'>
        <img src={logoImage} alt="logo" style={{ width: "100px" }} />
        <div className='info'>
          <h4 style={{ color:"var(--main-color)", fontWeight: "bold", fontSize: "30px"}}>
            Technolab
          </h4>
          <span style={{ color:"var(--dark-color)"}}>
            Electronics
          </span>
        </div>
      </div>
    </NavLink>

  )
}

export default Logo
