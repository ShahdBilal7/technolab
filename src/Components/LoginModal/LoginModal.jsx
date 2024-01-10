import React from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import logo from '../Assets/logo.png';
import "./loginModal.css";
import { Link } from 'react-router-dom';
const LoginModal = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => setShow(false);
  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <div className="nav-login link" onClick={handleShow} >
        <div>Login</div>
        <FontAwesomeIcon icon="fa-user" />
        <div className="cart-count">
          <FontAwesomeIcon className="icon" icon="fa fa-shopping-cart" />
          <span className="count">0</span>
        </div>
      </div>
      <Modal className="loginCont" show={show} onHide={handleClose} centered>
        <Modal.Header className='flex-column-reverse' closeButton>
          <div className="logo-login">
            <img src={logo} alt="logo" />
          </div>
          <h2 id="title">Log in</h2>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className='d-flex flex-column align-items-center p-4'>
            <div className="input-group">
              <div className="input-field validate-input" data-validate="" id="emailField">
                <FontAwesomeIcon icon={"fa-user"} />
                <input id="name" name="username" type="text" placeholder="Name" />
              </div>
              <div className="input-field validate-input " data-validate="" id="passwordField">
                <FontAwesomeIcon icon="fa-lock" />
                <input id="password" name="password"
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password" />
                <p id="toggle-password" onClick={handlePasswordToggle}>
                <FontAwesomeIcon id="eye-slash" icon={passwordVisible ? 'eye' : 'eye-slash'} />
              </p>
    
              </div>
          
            </div>
            <button className='mt-2' type="submit" id="signinBtn" >
              Submit
            </button>
          </form>
          <div className="mod-footer px-4">
          <p id="lostPass">
               
          <Link className="lin"> Forgot your password?</Link>
        </p> 
            <p id="lostPass">
              No account?
              <Link className="lin"> Register</Link>
            </p>
          </div>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal
