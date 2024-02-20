import React from 'react';
import "../App.css";

import logo from "../../Images/Testimonials/logo-wide.png";

import testimonial1 from '../../Images/Testimonials/1.jpg';
import testimonial2 from '../../Images/Testimonials/2.jpg';
import bg2 from '../../Images/Bg/bg2.jpg';
import bg3 from '../../Images/Bg/bg10.jpg';
import bg19 from '../../Images/Bg/bg19.jpg'
import about4 from '../../Images/About/4.jpg';
import classes1 from '../../Images/Classes/1.jpg'
import classes2 from '../../Images/Classes/2.jpg'
import classes3 from '../../Images/Classes/3.jpg'
import classes4 from '../../Images/Classes/4.jpg'
import classes5 from '../../Images/Classes/5.jpg'

import gallery1 from "../../Images/Gallery/gallery-md1.jpg";
import gallery2 from "../../Images/Gallery/gallery-md2.jpg";
import gallery3 from "../../Images/Gallery/gallery-md3.jpg";
import gallery4 from "../../Images/Gallery/gallery-md4.jpg";
import gallery5 from "../../Images/Gallery/gallery-md5.jpg";
import gallery6 from "../../Images/Gallery/gallery-md6.jpg";
import gallery7 from "../../Images/Gallery/gallery-md7.jpg";
import gallery8 from "../../Images/Gallery/gallery-md8.jpg";
import gallery9 from "../../Images/Gallery/gallery-md9.jpg";
import gallery10 from "../../Images/Gallery/gallery-md10.jpg";
import gallery11 from "../../Images/Gallery/gallery-md11.jpg";
import gallery12 from "../../Images/Gallery/gallery-md12.jpg";

import team1 from '../../Images/Teams/1 (1).jpg';
import team2 from '../../Images/Teams/2.jpg';
import team3 from '../../Images/Teams/3.jpg';
import team4 from '../../Images/Teams/4.jpg';

import price1 from '../../Images/Pricing/1.jpg';
import price2 from '../../Images/Pricing/2.jpg';
import price3 from '../../Images/Pricing/3.jpg';

import news1 from '../../Images/News/1.jpg';
import news2 from '../../Images/News/2.jpg';
import news3 from '../../Images/News/3.jpg';

import clients1 from '../../Images/Clients/w1.png';
import clients2 from '../../Images/Clients/w2.png';
import clients3 from '../../Images/Clients/w3.png';
import clients4 from '../../Images/Clients/w4.png';
import clients5 from '../../Images/Clients/w5.png';
import clients6 from '../../Images/Clients/w6.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
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
{/* coarousel  */}

<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={bg2} className="d-block w-100 carousel_image" alt="..."/>
      {/* <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div> */}
      <div className="carousel-caption d-none d-md-block">
              <h2>MARTIAL ARTS</h2>
              <h4>TRAIN WITH BEST LEGENDS</h4>
              <p>
                Everyday we bring hope to millions of children in the world's
                hardest places as a sign of God's Unconditional love.
              </p>
              <button type="button" className="btn btn-danger">
                BOOK NOW
              </button>
            </div>

    </div>
    <div className="carousel-item">
      <img src={bg3} className="d-block w-100  carousel_image" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={bg19} className="d-block w-100 carousel_image" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      <div className="row my-5 mx-auto w-100 sm:px-5 about">
        <div className="col-12 col-md-6 mt-1 ms-2 ">
          <h2>
            WELCOME TO <span className="text-danger">MARTIAL ARTS</span>
          </h2>
          <p className="text-secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            neque voluptatem nihil consequatur saepe iusto aperiam, minus
            blanditiis, repellendus eligendi cumque excepturi nostrum deserunt
            quaerat cum facere, eaque ratione beatae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis,
            molestias?
          </p>
          <div className="row">
            <div className="col-12 col-sm-6 mt-1 d-flex justify-content-center align-items-center ">
              {/* <img src="../Images/Testimonials/1.jpg" className='rounded-circle m-2 w-50' /> */}
              <img src={testimonial1} className='rounded-circle m-2 w-50' />
              <div>
                <span className="text-danger fw-bold">American Karate</span>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                  vero!
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center ">
              {/* <img src="../Images/Testimonials/2.jpg" className='rounded-circle m-2 w-50 ' /> */}
              <img src={testimonial2} className='rounded-circle m-2 w-50 ' />
              <div>
                <span className="text-danger fw-bold">Shuri Rui</span>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                  vero!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center ">
              {/* <img src="../Images/Testimonials/1.jpg" className='rounded-circle m-2 w-50' /> */}
              <img src={testimonial1} className='rounded-circle m-2 w-50' />
              <div>
                <span className="text-danger fw-bold">American Karate</span>
                <p className=" text-secondary fs-6">
                  {" "}
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.
                </p>
              </div>

            </div>
            <div className=" col-12 col-sm-6 d-flex justify-content-center align-items-center ">
              <img src={testimonial2} className='rounded-circle m-2 w-50' />
              {/* <img src="../Images/Testimonials/2.jpg" className='rounded-circle m-2 w-50' /> */}
              <div>
                <span className="text-danger fw-bold">Shuri Rui</span>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                  vero!
                </p>
              </div>

            </div>
          </div>
        </div>
        <div className=" col-12 col-md-5 mt-5">
          {/* <img src="./Images/About/4.jpg" /> */}
          <img src={about4} />
        </div>
      </div>

      <p className="display-6 fw-bold text-center">Our <span className="text-danger fw-bold">Classes</span></p>
      <p className="text-center font-italic">Join our martial art club and be healthy </p>
      {/* ms-5 */}
      <div className="row container-fluid container-lg mx-auto my-4 box-parent">
        <div className="col-12 col-sm-6 col-lg-3 mx-3 my-2 box">
          {/* <img src="../Images/Classes/1.jpg" className=" w-100 my-2" /> */}
          <img src={classes1} className=" w-100 my-2" />
          <h3 className="mt-3"><span className="text-danger fw-bold">Private</span> | Group Lessons</h3>
          <p className="text-secondary fst-italic my-0">01:00 pm - 03:00 pm</p>
          <p className="text-secondary fst-italic">121 King Street, Melbourne</p>

        </div>
        {/* <div className="col-1"></div> */}
        <div className="col-12 col-sm-6 col-lg-3 mx-3 my-2 box">
          {/* <img src="../Images/Classes/2.jpg" className=" w-100 my-2" /> */}
          <img src={classes2} className=" w-100 my-2" />
          <h3 className="mt-3"><span className="text-danger fw-bold">Private</span> | Group Lessons</h3>
          <p className="text-secondary fst-italic my-0">01:00 pm - 03:00 pm</p>
          <p className="text-secondary fst-italic">121 King Street, Melbourne</p>
        </div>
        {/* <div className="col-1"></div> */}
        <div className="col-12 col-sm-6 col-lg-3 mx-3 box ">
          <img src={classes3} className=" w-100 my-2" />
          <h3 className="mt-3"><span className="text-danger fw-bold">Private</span> | Group Lessons</h3>
          <p className="text-secondary fst-italic my-0">01:00 pm - 03:00 pm</p>
          <p className="text-secondary fst-italic">121 King Street, Melbourne</p>
        </div>
        {/* <div className="col-1"></div> */}
      {/* </div> */}
      {/* <div className="row container mx-auto my-4 box-parent"> */}
        <div className="col-12 col-sm-6 col-lg-3 mx-3 my-2 w-full box">
          {/* <img src="../Images/Classes/4.jpg" className=" w-100 my-2" /> */}
          <img src={classes4} className=" w-100 my-2" />
          <h3 className="mt-3"><span className="text-danger fw-bold">Private</span> | Group Lessons</h3>
          <p className="text-secondary fst-italic my-0">01:00 pm - 03:00 pm</p>
          <p className="text-secondary fst-italic">121 King Street, Melbourne</p>

        </div>
        {/* <div className="col-1"></div> */}
        <div className="col-12 col-sm-6 col-lg-3 mx-3 my-2 box">
          <img src={classes5} className=" w-100 my-2" />
          <h3 className="mt-3"><span className="text-danger fw-bold">Private</span> | Group Lessons</h3>
          <p className="text-secondary fst-italic my-0">01:00 pm - 03:00 pm</p>
          <p className="text-secondary fst-italic">121 King Street, Melbourne</p>
        </div>
        {/* <div className="col-1"></div> */}
        <div className="col-12 col-sm-6 col-lg-3 mx-3 box ">
          <img src={classes1} className=" w-100 my-2" />
          <h3 className="mt-3"><span className="text-danger fw-bold">Private</span> | Group Lessons</h3>
          <p className="text-secondary fst-italic my-0">01:00 pm - 03:00 pm</p>
          <p className="text-secondary fst-italic">121 King Street, Melbourne</p>
        </div>
        {/* <div className="col-1"></div> */}
      </div>


      <section className=" container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8 text-center">
            <h3 className="mt-5">Testimonials</h3>
            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
              numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
              quisquam eum porro a pariatur veniam.
            </p>
          </div>
        </div>

        <div className="row text-center ">
          <div className="col-md-4 mb-5 mb-md-0 ">
            <div className="d-flex justify-content-center mb-4">
              {/* <img src="../Images/Gallery/gallery-md1.jpg" alt="" */}
              <img src={gallery1} alt=""
                className="rounded-circle shadow-1-strong" width="150" height="150" />
            </div>
            <h5 className="mb-3">Maria Smantha</h5>
            <h6 className="text-primary mb-3">karate</h6>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
              tenetur.
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star-half-alt fa-sm text-warning"></i>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-5 mb-md-0 ">
            <div className="d-flex justify-content-center mb-4">
              <img src={gallery2}
                className="rounded-circle shadow-1-strong" width="150" height="150" />
            </div>
            <h5 className="mb-3">Lisa Cudrow</h5>
            <h6 className="text-primary mb-3">karate</h6>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i>Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
            </ul>
          </div>
          <div class="col-md-4 mb-0">
            <div class="d-flex justify-content-center mb-4">
              <img src={gallery3}
                class="rounded-circle shadow-1-strong" width="150" height="150" />
            </div>
            <h5 class="mb-3">John Smith</h5>
            <h6 class="text-primary mb-3">Karate</h6>
            <p class="px-xl-3">
              <i class="fas fa-quote-left pe-2"></i>At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>
            <ul class="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="far fa-star fa-sm text-warning"></i>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <p className="display-6 fw-bold text-center">Our <span className="text-danger fw-bold">Trainers</span></p>
      <p className="text-center font-italic">Join our martial art club and be healthy </p>
      <div className="row container-fluid container-lg justify-content-center mx-auto">
        <div className="col-12 col-sm-6 col-lg-3 box m-2">
          {/* <img src="../Images/Teams/1 (1).jpg" className=" w-100 my-2" /> */}
          <img src={team1} className=" w-100 my-2" />
          <h3 className="mt-3 ms-3"><span className="text-danger fw-bold ">Private</span> | Group Lessons</h3>
          <p className="text-secondary fst-italic ms-2 my-0">01:00 pm - 03:00 pm</p>
          <p className="text-secondary fst-italic ms-2">121 King Street, Melbourne</p>

        </div>
        {/* <div className="col-1"></div> */}
        <div className="col-12 col-sm-6 col-lg-3 box m-2">
          {/* <img src="../Images/Teams/2.jpg" className=" w-100 my-2" /> */}
          <img src={team2} className=" w-100 my-2" />
          <h3 className="mt-3 ms-2"><span className="text-danger fw-bold">Private</span> | Group Lessons</h3>
          <p className="text-secondary fst-italic ms-2 my-0">01:00 pm - 03:00 pm</p>
          <p className="text-secondary fst-italic ms-2">121 King Street, Melbourne</p>
        </div>
        {/* <div className="col-1"></div> */}
        <div className="col-12 col-sm-6 col-lg-3 box m-2">
          <img src={team3} className=" w-100 my-2" />
          <h3 className="mt-3"><span className="text-danger fw-bold">Private</span> | Group Lessons</h3>
          <p className="text-secondary fst-italic my-0">01:00 pm - 03:00 pm</p>
          <p className="text-secondary fst-italic">121 King Street, Melbourne</p>
        </div>
        {/* <div className="col-1"></div> */}
      {/* </div> */}


      {/* <div className="row container mx-auto"> */}
        <div className="col-12 col-sm-6 col-lg-3  box m-2">
          <img src={team4} className=" w-100 my-2" />
          <h3 className="mt-3"><span className="text-danger fw-bold">Private</span> | Group Lessons</h3>
          <p className="text-secondary fst-italic my-0">01:00 pm - 03:00 pm</p>
          <p className="text-secondary fst-italic">121 King Street, Melbourne</p>

        </div>
        {/* <div className="col-1"></div> ms-3*/}
        <div className="col-12 col-sm-6 col-lg-3 box m-2">
          <img src={team3} className=" w-100 my-2" />
          <h3 className="mt-3"><span className="text-danger fw-bold">Private</span> | Group Lessons</h3>
          <p className="text-secondary fst-italic my-0">01:00 pm - 03:00 pm</p>
          <p className="text-secondary fst-italic">121 King Street, Melbourne</p>
        </div>
        {/* <div className="col-1"></div> */}
        <div className="col-12 col-sm-6 col-lg-3 box m-2">
          <img src={team2} className=" w-100 my-2" />
          <h3 className="mt-3"><span className="text-danger fw-bold">Private</span> | Group Lessons</h3>
          <p className="text-secondary fst-italic my-0">01:00 pm - 03:00 pm</p>
          <p className="text-secondary fst-italic">121 King Street, Melbourne</p>
        </div>
        {/* <div className="col-1"></div> */}
      </div>

      <div className="row mt-5 container mx-auto">
        <div className="col-12 col-md-5 ms-md-2 ">
          {/* <img src="../Images/Bg/bg19.jpg" width="450" width="400" height="350" /> */}
          <img src={bg19} className=' w-100'  height="350" />
        </div>
        <div className="col-12 col-md-6 mt-2">
          <span className="text-danger fw-bold"><h2 className="fw-bold ms-2">TRAIN WITH THE LEGENDS</h2></span>
          <p className="fst-italic p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium doloremque corrupti eligendi veniam ab odio sint nesciunt ducimus dolor molestias soluta aliquam cupiditate fugiat temporibus nam, nemo deleniti quia? Quas ut asperiores porro aliquid, molestiae itaque dolores delectus ab ipsa? Error rerum possimus neque tempora ipsam a sit repellat porro, vitae veniam dignissimos ad quo repudiandae modi reprehenderit velit illo.</p>
          <h4 className="ms-2">OUR SKILLS</h4>


        </div>
      </div>

      <p className="display-6 fw-bold text-center mt-4">PHOTO <span className="text-danger fw-bold">GALLERY</span></p>
      <p className="text-center font-italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem aliquam corporis officia consequuntur cumque animi</p>
      <div className="row mx-3">
        <div className="col-3 bg-danger px-0 border border-white">
          <img src={gallery1} className=" w-100 h-100" />
        </div>
        <div className="col-3 px-0 border border-white">
          {/* <img src="../Images/Gallery/gallery-md2.jpg" className=" w-100" /> */}
          <img src={gallery2} className=" w-100" />
        </div>
        <div className="col-3 px-0 border border-white">
          <img src={gallery3} className=" w-100" />
        </div>
        <div className="col-3 px-0 border border-white">
          <img src={gallery4} className=" w-100" />
        </div>
      </div>
      <div className="row mx-3">
        <div className="col-3 px-0 border border-white">
          <img src={gallery5} className=" w-100" />
        </div>
        <div className="col-3 px-0 border border-white">
          <img src={gallery6} className=" w-100" />
        </div>
        <div className="col-3 px-0 border border-white">
          <img src={gallery7} className=" w-100" />
        </div>
        <div className="col-3 px-0 border border-white">
          <img src={gallery8} className=" w-100" />
        </div>
      </div>
      <div className="row mx-3">
        <div className="col-3 px-0 border border-white">
          <img src={gallery9} className=" w-100" />
        </div>
        <div className="col-3 px-0 border border-white">
          <img src={gallery10} className=" w-100" />
        </div>
        <div className="col-3 px-0 border border-white">
          <img src={gallery11} className=" w-100" />
        </div>
        <div className="col-3 px-0 border border-white">
          <img src={gallery12} className=" w-100" />
        </div>
      </div>

      <p className="display-6 fw-bold text-center mt-5">MEMBERSHIP <span className="text-danger fw-bold">PACKAGES</span></p>
      {/* <p className="text-center"></p> */}
      <div className="row px-5 py-5 d-flex justify-content-center" style={{ backgroundColor: "lightgray" }}>
        <div className="col-12 col-sm-6 col-lg-3  membership-card ">
          {/* <img src="../Images/Pricing/1.jpg" className=" w-100" /> */}
          <img src={price1} className=" w-100" />
          <div>
            <h3 className="bg-dark text-light text-center ms-auto my-0 pt-3">BEGINNER</h3>
            <p className="bg-dark text-light text-center ms-auto my-0 pb-3">TRAINING WITH JON ISMAIL</p>
          </div>
          <p className="text-center border-bottom mt-3">Free Consultation</p>
          <p className="text-center border-bottom">Fitness Assessment</p>
          <p className="text-center border-bottom">24 Hour Gym</p>
          <p className="text-center border-bottom">Free Consultation</p>
          <p className="text-center border-bottom">$35* / MONTHLY</p>
          <div className="text-center">
            <button className="btn btn-danger">SIGN UP</button>
          </div>

        </div>
        {/* <div className="col-1">
        </div> */}
        <div className="col-12 col-sm-6 col-lg-3 membership-card">
          {/* <img src="../Images/Pricing/2.jpg" height={160} className="w-100" /> */}
          <img src={price2} height={160} className="w-100" />
          <div>
            <h3 className="bg-dark text-light text-center ms-auto my-0 pt-3">BEGINNER</h3>
            <p className="bg-dark text-light text-center ms-auto my-0 pb-3">TRAINING WITH JON ISMAIL</p>
          </div>
          <p className="text-center border-bottom mt-3">Free Consultation</p>
          <p className="text-center border-bottom">Fitness Assessment</p>
          <p className="text-center border-bottom">24 Hour Gym</p>
          <p className="text-center border-bottom">Free Consultation</p>
          <p className="text-center border-bottom">$35* / MONTHLY</p>
          <div className="text-center">
            <button className="btn btn-dark">SIGN UP</button>
          </div>
        </div>
        {/* <div className="col-1"> */}
        {/* </div> */}
        <div className="col-12 col-sm-6 col-lg-3 membership-card">
          {/* <img src="../Images/Pricing/3.jpg" className="w-100" /> */}
          <img src={price3} className="w-100" />
          <div>
            <h3 className="bg-dark text-light text-center ms-auto my-0 pt-3">BEGINNER</h3>
            <p className="bg-dark text-light text-center ms-auto my-0 pb-3">TRAINING WITH JON ISMAIL</p>
          </div>
          <p className="text-center border-bottom mt-3">Free Consultation</p>
          <p className="text-center border-bottom">Fitness Assessment</p>
          <p className="text-center border-bottom">24 Hour Gym</p>
          <p className="text-center border-bottom">Free Consultation</p>
          <p className="text-center border-bottom">$35* / MONTHLY</p>
          <div className="text-center">
            <button className="btn btn-danger">SIGN UP</button>
          </div>
        </div>
        {/* <div className="col-1">
        </div> */}
      </div>


      <section className="container">
        <div class="row d-flex justify-content-center">
          <div class="col-md-10 col-xl-8 text-center">
            <h3 class="mt-5"><span className="text-danger fw-bold">OUR HAPPY CLIENTS SAYS</span></h3>
            <p class="mb-4 pb-2 mb-md-5 pb-md-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
              numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
              quisquam eum porro a pariatur veniam.
            </p>
          </div>
        </div>

        <div class="row text-center justify-content-center">
          <div class=" col-12 col-sm-6 col-lg-3 mb-5 mb-md-0 happy_client_box py-2 mx-2">
            <div class="d-flex justify-content-center mb-4">
              {/* <img src="../Images/Gallery/gallery-md1.jpg" alt="" */}
              <img src={gallery1} alt=""
                class="rounded-circle shadow-1-strong" width="150" height="150" />
            </div>
            <h5 class="mb-3">Maria Smantha</h5>
            <h6 class="text-primary mb-3">karate</h6>
            <p class="px-xl-3">
              <i class="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
              tenetur.
            </p>
            <ul class="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star-half-alt fa-sm text-warning"></i>
              </li>
            </ul>
          </div>
          <div class="col-12 col-sm-6 col-lg-3 mb-5 mb-md-0 happy_client_box py-2 mx-2">
            <div class="d-flex justify-content-center mb-4">
              {/* <img src="../Images/Gallery/gallery-md2.jpg" */}
              <img src={gallery2}
                class="rounded-circle shadow-1-strong" width="150" height="150" />
            </div>
            <h5 class="mb-3">Lisa Cudrow</h5>
            <h6 class="text-primary mb-3">karate</h6>
            <p class="px-xl-3">
              <i class="fas fa-quote-left pe-2"></i>Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.
            </p>
            <ul class="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
            </ul>
          </div>
          <div class="col-12 col-sm-6 col-lg-3 mb-0 happy_client_box py-2 mx-2">
            <div class="d-flex justify-content-center mb-4">
              {/* <img src="../Images/Gallery/gallery-md3.jpg" */}
              <img src={gallery3}
                class="rounded-circle shadow-1-strong" width="150" height="150" />
            </div>
            <h5 class="mb-3">John Smith</h5>
            <h6 class="text-primary mb-3">Karate</h6>
            <p class="px-xl-3">
              <i class="fas fa-quote-left pe-2"></i>At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>
            <ul class="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="far fa-star fa-sm text-warning"></i>
              </li>
            </ul>
          </div>
        </div>
      </section>



      <section className="container">
        <div class="row d-flex justify-content-center">
          <div class="col-md-10 col-xl-8 text-center">
            <h3 class="mt-5">NEWS & <span className="text-danger fw-bold">BLOGS</span></h3>
            <p class="mb-4 pb-2 mb-md-5 pb-md-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
              numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
              quisquam eum porro a pariatur veniam.

            </p>
          </div>
        </div>

        <div class="row text-center justify-content-center">
          <div class="col-md-4 mb-5 mb-md-0 happy_client_box py-4 mx-1">
            <div class="d-flex justify-content-center mb-4">
              {/* <img src="../Images/Gallery/gallery-md1.jpg" alt="" */}
              <img src={gallery1} alt=""
                width="200" height="200" />
            </div>
            <h5 class="mb-3">Maria Smantha</h5>
            <h6 class="text-primary mb-3">karate</h6>
            <p class="px-xl-3">
              <i class="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
              tenetur.
            </p>
            <button type="button" class="btn btn-danger">Show More</button>

          </div>
          <div class="col-md-4 mb-5 mb-md-0 happy_client_box py-4 mx-1">
            <div class="d-flex justify-content-center mb-4">
              <img src={gallery2}
                width="200" height="200" />
            </div>
            <h5 class="mb-3">Lisa Cudrow</h5>
            <h6 class="text-primary mb-3">karate</h6>
            <p class="px-xl-3">
              <i class="fas fa-quote-left pe-2"></i>Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.
            </p>
            <button type="button" class="btn btn-danger">Show More</button>
          </div>
          <div class="col-md-4 mb-0 happy_client_box py-4 mx-1">
            <div class="d-flex justify-content-center mb-4">
              <img src={gallery3}
                width="200" height="200" />
            </div>
            <h5 class="mb-3">John Smith</h5>
            <h6 class="text-primary mb-3">Karate</h6>
            <p class="px-xl-3">
              <i class="fas fa-quote-left pe-2"></i>At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>
            <button type="button" class="btn btn-danger">Show More</button>


          </div>
        </div>
      </section>
      <div className="mt-3 ">
        <button type="button" class="btn btn-danger w-100">
          <img src={clients1} width="200" height="100"></img>
          {/* <img src="../Images/Clients/w1.png" width="200" height="100"></img> */}
          <img src={clients2} width="200" height="100"></img>
          {/* <img src="../Images/Clients/w2.png" width="200" height="100"></img> */}
          <img src={clients3} width="200" height="100"></img>
          {/* <img src="../Images/Clients/w3.png" width="200" height="100"></img> */}
          <img src={clients4} width="200" height="100"></img>
          {/* <img src="../Images/Clients/w4.png" width="200" height="100"></img> */}
          <img src={clients5} width="200" height="100"></img>
          {/* <img src="../Images/Clients/w5.png" width="200" height="100"></img> */}
          <img src={clients6} width="200" height="100"></img>
          {/* <img src="../Images/Clients/w6.png" width="200" height="100"></img> */}
        </button>
      </div>

    </div>
  );
}

export default Home;
