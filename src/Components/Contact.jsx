import React, { useState } from 'react';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css'
import logo from "../../Images/Testimonials/logo-wide.png";

import { Link } from 'react-router-dom';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryFor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // Reset the form after submission
    setFormData({
      name: '',
      lastName: '',
      email: '',
      phone: '',
      inquiryFor: '',
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d2v0q6k', 'template_kpe9yct', form.current, 'YMKspFClZ12EGG2OZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <>
     <nav className=" navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand text-size my-auto" href="#">
            <i className="fa-solid fa-phone icon-size my-auto"></i>9832480087
          </a>
          <Link to={'/privacy_policy'} className='text-white text-decoration-none privacy_policy_link'>Privacy Policy</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <i className="fa-solid fa-envelope text-danger icon-size"></i>    kaizenkarateindia.com
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <i className="fa-brands fa-google-plus-g"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <button className=" btn btn-danger">Free Consulting</button>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand ms-5" href="#">
          {/* <img src="./Images/Testimonials/logo-wide.png" alt="" /> */}
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href='/about'>
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/contact">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Our Trainers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Blogs
              </a>
            </li>
          </ul>
        </div>
      </nav>
    
    
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h2>Contact Form</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inquiryFor" className="form-label">
                Inquiry For
              </label>
              <textarea
                className="form-control"
                id="inquiryFor"
                name="inquiryFor"
                value={formData.inquiryFor}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-6">
          {/* Display Delhi Map here */}
          <h2>Delhi Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.95105788554!2d76.76355803886992!3d28.644287347036204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1708447355928!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
