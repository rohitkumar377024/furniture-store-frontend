import React from 'react';
import BorderText from '../../components/bordertext/BorderText';
import RedLine from '../../components/redline/RedLine';
import './about.scss';
import SignatureText from '../../components/signaturetext/SignatureText';

const About = () => {
  return (
    <div>
      <div className="container custom-container d-flex flex-column">
        <div className="row flex-grow-1">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h1>About Us Me.</h1>
            <RedLine />
            <BorderText text="MADE BY ROHIT KUMAR" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <p className="h5 about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore.
              <br></br>
              <br></br>
            </p>
            <p className="h5 about-text">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat.
              <br></br>
              <br></br>
            </p>
            <p className="h5 about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br></br>
              <br></br>
            </p>
            <p className="h5 about-text">
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
      </div>
      <div className="container custom-container d-flex flex-column">
        <div className="row flex-grow-1">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <p className="h5 about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore.
              <br></br>
              <br></br>
            </p>
            <p className="h5 about-text">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat.
              <br></br>
              <br></br>
            </p>
            <p className="h5 about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br></br>
              <br></br>
            </p>
            <p className="h5 about-text">
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h1>
              Web Developer. <br></br> UI/UX Designer.
            </h1>
            <BorderText text="DESIGNED IN FIGMA. BUILT IN REACT." />
          </div>
        </div>
        <SignatureText />
      </div>
    </div>
  );
};

export default About;
