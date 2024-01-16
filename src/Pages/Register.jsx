
import { Form } from 'react-bootstrap';
import {useEffect} from "../Constants.js";
const Register = ({ setShowSearch }) => {
  useEffect(() => {
    setShowSearch(false);
    return () => {
        setShowSearch(true); 
    };
}, [setShowSearch]);
  const Universitys = ["  An-Najah National University",
    "Al-Quds University",
    "Bethlehem University",
    "Birzeit University",
    "Palestine Polytechnic University (PPU)"]
  return (
    <div className="container reg">
      <div className="col-xs-12">
        <div className="row mb-2">
          <div className="mb-2 col-md-12">
            <p>
              By creating a technolab account you will gain full access to all technolab.ps sites.
              You will be able to purchase technolab products and track your orders
            </p>
          </div>
        </div>
        <div className="row mb-4">
          <div className=" col-md-6">
            <div className='headline mb-2'>
              <h2  >
                Create a new account
              </h2>
            </div>
            <p>All fields are required.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8  mb-5" >
            <Form>
              <div className='row'>
                <Form.Group className="mb-3 col-md-6">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Jane" required />
                </Form.Group>
                <Form.Group className="mb-3 col-md-6">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Doe" required />
                </Form.Group>
              </div>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="jane.doe@example.com" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="059-24-56-951" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Your Address" required />
              </Form.Group>
              <div className='row'>
                <Form.Group className="mb-3 col-md-6">
                  <Form.Label>Job</Form.Label>
                  <Form.Control type="text" placeholder="Computer Engineering" required />
                </Form.Group>
                <Form.Group className="mb-3 col-md-6">
                  <Form.Label>Are you a student ? </Form.Label>
                  <Form.Control as="select" required>
                    <option value="najah" disabled >Select your university</option>
                    {Universitys.map((university, index) => (
                      <option key={index} value={university}>
                        {university}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </div>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required />
              </Form.Group>
              <button className='submit mt-2' type="submit" id="register">
                Register
              </button>
            </Form>
          </div>
          <div className="col-md-4 mb-5">

          </div>
        </div>

      </div>
    </div>
  )
}

export default Register
