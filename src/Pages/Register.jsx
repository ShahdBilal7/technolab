
import DropdownSelector from "../Components/DropdownSelector.jsx";
import { useEffect, Form, useState } from "../Constants.js";
const Register = ({ setShowSearch }) => {
  const [jobType, setJobType] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const Specialties = ["Computer", "Electrician", "Industrial", "Mechanical", "Civil", "Biomedical", "Other"];
  const Universitys = ["An-Najah National University", "Al-Quds University", "Bethlehem University", "Birzeit University", "Palestine Polytechnic University (PPU)", "Other"]

  useEffect(() => {
    setShowSearch(false);
    return () => {
      setShowSearch(true);
    };
  }, [setShowSearch]);

  const handleJobTypeChange = (event) => {
    setJobType(event.target.value);
    // Reset specialties and selected university when job type changes
    setSelectedSpecialty("");
    setSelectedUniversity("");
  };


  return (
    <div className="container mt-4">
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
                <Form.Control type="tel" placeholder="0592456951" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Your Address" required />
              </Form.Group>
              <div className='row'>
                <Form.Group className="mb-3 col-md-6">
                  <Form.Label>Select Job Type</Form.Label>
                  <Form.Control as="select" onChange={handleJobTypeChange} required>
                    <option value="" disabled selected>Select Job Type</option>
                    <option value="Student">Student</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Technician">Technician</option>
                    <option value="Instructor">Instructor</option>
                    <option value="Hopy">Hopy</option>
                    <option value="Other">Other</option>
                  </Form.Control>
                </Form.Group>


                {jobType === "Student" && (
                  <div className="col-md-12 row">
                    <DropdownSelector label="Your University" options={Universitys} setSelectedValue={setSelectedUniversity} />
                    <DropdownSelector label="Your Specialty" options={Specialties} setSelectedValue={setSelectedSpecialty} />
                  </div>
                )}


                {(jobType === "Engineer" || jobType === "Technician") && (
                  <DropdownSelector label="Your Specialty" options={Specialties} setSelectedValue={setSelectedSpecialty} />
                )}


                {jobType === "Instructor" && (
                  <DropdownSelector label=" the university where you are employed" options={Universitys} setSelectedValue={setSelectedUniversity} />
                )}


                {jobType === "Other" && (
                  <Form.Group className="mb-3 col-md-6">
                    <Form.Label>Whats Your Jop?</Form.Label>
                    <Form.Control type="text" placeholder="My Jop Is ..." required />
                  </Form.Group>
                )}

                {selectedUniversity === "Other" && (
                  <Form.Group className="mb-3 col-md-12">
                    <Form.Label>Whats Your University?</Form.Label>
                    <Form.Control type="text" placeholder="My University Is ..." required />
                  </Form.Group>
                )}

                {selectedSpecialty === "Other" && (
                  <Form.Group className="mb-3 col-md-12">
                    <Form.Label>Whats Your Specialty?</Form.Label>
                    <Form.Control type="text" placeholder="My Specialty Is ..." required />
                  </Form.Group>
                )}

              </div>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" required />
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
