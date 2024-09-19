import React from 'react'
import './Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import{NavLink}   from 'react-router-dom'
function Footer() {
  return (
    <div className='container-fluid bg-color-footer'>
      <div className='container '>
        <div className='row gap-3'>
          <div className='col-lg-12 '>
            <img src="img/logo.png" alt='logo' width={'250px'}/>
          </div>
          <div className='col-lg-3'>
            <h2>Link</h2>
        <hr/>
          <NavLink to='/'><h5>Home</h5></NavLink> 
          <NavLink to='/smartrecruiter'> <h5>Smart Recruiter</h5></NavLink> 
          <NavLink to='/about'> <h5>About Us</h5></NavLink> 
          <NavLink to='/contect'> <h5>Contect Us</h5></NavLink> 
          </div>
          <div className='col-lg-5'>
            <h2>Contact</h2>
             <hr/>
            <h5>jawadmirza606@gmail.com</h5>
          </div>
          <div className='col-lg-3'>
            <h2>Social Media</h2>
            <hr/>
            <a target="_blank" href="https://www.facebook.com/jawad.mirza.355" rel="noreferrer">
                {" "}
                <FaFacebookF className="footer__icons" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/jawad-mirza-208024207" rel="noreferrer">
                {" "}
                <FaLinkedin className="footer__icons" />
              </a>
              <a target="_blank" href="https://github.com/Jawad606" rel="noreferrer">
                {" "}
                <FaGithub className="footer__icons" />
              </a>
          </div>
          <div className='col-lg-12 pt-3 text-center'>
            <h6>© 2022 Jawad Mirza. All rights reserved.</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer