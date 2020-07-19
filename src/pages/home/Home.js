import React from 'react';
import { Carousel } from 'react-bootstrap';
import './home.scss';
import SignatureText from '../../components/signaturetext/SignatureText';
import { Link } from 'react-router-dom';

import first from '../../assets/slider-one.jpg';

const Home = () => {
  return (
    <div className="container custom-container d-flex flex-column">
      <div className="row flex-grow-1 d-flex">
        <div className="col-md-6 d-flex flex-column justify-content-center left-container">
          <h1 className="hero-text">
            Welcome to<br></br>your dream furniture.
          </h1>
          <Link className="custom-border shop-btn no-underline-hover" to="/shop">
            SHOP NOW
          </Link>
        </div>
        <div className="col-md-6">
          <h2 className="h-100 d-flex justify-content-center align-items-center">
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
      <SignatureText />
    </div>
  );
};

export default Home;
