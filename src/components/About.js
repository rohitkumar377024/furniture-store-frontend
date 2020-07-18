import React from 'react';

const About = () => {
  return (
    <div>
      <div className="container custom-container d-flex flex-column">
        <div className="row flex-grow-1">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h1>About Us Me.</h1>
            <div class="red-line"></div>
            <button className="custom-border">MADE BY ROHIT KUMAR</button>
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
            <button className="custom-border about-bottom-page-btn">
              DESIGNED IN FIGMA. BUILT IN REACT.
            </button>
          </div>
        </div>
        <div className="row signature-text">2020 • NEW DELHI - NCR</div>
      </div>
    </div>
  );
};

export default About;
