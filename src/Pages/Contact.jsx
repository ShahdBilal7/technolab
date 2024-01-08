import { Link } from "react-router-dom"
import map from "../Components/Assets/map.PNG"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Contact = () => {
  return (
    <div className="container contact">
      <div className="row">
        <div className="col-md-6" >
          <div className="headline">
            <h2>Contact Us</h2>
          </div>
          <div className="d-flex flex-column gap-3 ">
            <i className=" d-flex gap-3 link "  ><FontAwesomeIcon className="icon" icon="fa-phone" />(+972) 92 355 329</i>
            <i className="d-flex gap-3 link "  > <FontAwesomeIcon className="icon" icon="fa-mobile" />(+972) 568 182 180</i>
            <i className="d-flex gap-3 link" > <FontAwesomeIcon className="icon" icon="fa-envelope" />Technolab.Electronics@gmail.com</i>
            <i className="d-flex gap-3 link" > <FontAwesomeIcon className="icon" icon="fa-location" />Near "Jorf" super Market , An Najah National Unversiity street , Rafydia, Nablus, Plasetine</i>
            </div>
        </div>
        <div className="col-md-6">
          <Link target="_blank" to="http://www.google.com/maps/place/32.226673,35.222009" >
            <img src={map} alt="map" />
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Contact
