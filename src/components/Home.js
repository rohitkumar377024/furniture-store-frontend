import React from 'react';
import { Carousel } from 'react-bootstrap';

import first from '../slider-one.jpg';

const Home = () => {
  return (
    <div className="container custom-container d-flex flex-column">
      {/* Row 1 - Main Container */}
      <div className="row flex-grow-1 d-flex">
        {/* Col 1 Left Side - Hero Text and Shop Button */}
        <div className="col-md-6 d-flex flex-column justify-content-center left-container">
          <h1 className="hero-text">
            Welcome to<br></br>your dream furniture.
          </h1>
          <button className="custom-border">SHOP NOW</button>
        </div>
        {/* Col 2 Right Side - Hero Carousel */}
        <div className="col-md-6">
          <h2 className="h-100 d-flex justify-content-center align-items-center">
            {/* Image Carousel */}
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={first} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={first} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={first} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </h2>
        </div>
      </div>
      {/* Row 2 - Signature Text */}
      <div className="row d-flex justify-content-center align-items-center">
        <p className="signature-text">2020 • NEW DELHI - NCR</p>
      </div>
    </div>
  );
};

export default Home;
