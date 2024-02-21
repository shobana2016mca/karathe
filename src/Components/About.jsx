import React from 'react';
import '../App.css'
import logo from "../../Images/Testimonials/logo-wide.png";

import { Link } from 'react-router-dom';

const About = () => {
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
      <h2 className="text-center mb-4">Karethe Teaching</h2>
      <div className="row">
        <div className="col-md-6">
          <h3>Our Mission</h3>
          <p>
            At Karethe Teaching, our mission is to provide high-quality education and empower
            individuals to achieve their learning goals. We believe in fostering a positive
            learning environment that encourages curiosity, creativity, and collaboration.
          </p>
        </div>
        <div className="col-md-6">
          <h3>Our Instructors</h3>
          <p>
            Our dedicated team of experienced instructors is committed to guiding students
            through their educational journey. With a focus on both theoretical knowledge and
            practical skills, our instructors ensure a well-rounded learning experience.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <h3>Learning Approach</h3>
          <p>
            We embrace a hands-on and interactive learning approach. Through engaging lectures,
            workshops, and projects, students gain a deep understanding of the subjects they are
            studying.
          </p>
        </div>
        <div className="col-md-6">
          <h3>Facilities</h3>
          <p>
            Our state-of-the-art facilities provide a conducive learning environment. From modern
            classrooms to well-equipped labs, we ensure that students have access to the resources
            they need.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <h3>Testimonials</h3>
          <p>
            Hear what our students have to say about their experiences at Karethe Teaching. Our
            testimonials reflect the success stories and positive impact our education has had on
            their lives and careers.
          </p>
        </div>
        <div className="col-md-6">
          <h3>Contact Us</h3>
          <p>
            Have questions or ready to enroll? Contact us today! Our friendly staff is ready to
            assist you. Visit our campus or reach out via email or phone for more information about
            our courses and programs.
          </p>
          <p>Email: info@karethe-teaching.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
