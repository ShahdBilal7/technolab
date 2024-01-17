import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "./Breadcrum.css"
const Breadcrum = ({Category,SubCategory,Data}) => {
  return (
    <Breadcrumb>
    <Breadcrumb.Item  href="#">{Category}</Breadcrumb.Item>
    <Breadcrumb.Item href="#">{SubCategory}</Breadcrumb.Item>
    <Breadcrumb.Item active>{Data}</Breadcrumb.Item>
  </Breadcrumb>
  )
}

export default Breadcrum
