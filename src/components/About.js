import React from 'react';

const About = () => {
  return (
    <div>
      <div className="container custom-container d-flex flex-column">
        <div className="border row flex-grow-1">
          <div className="border col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h1>About Us Me</h1>
            <button className="custom-border">MADE BY ROHIT KUMAR</button>
          </div>
          <div className="border col-md-6 d-flex flex-column justify-content-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore.
              <br></br>
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat.
              <br></br>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam.
            </p>
          </div>
        </div>
        <div className="border row signature-text">2020 • NEW DELHI - NCR</div>
      </div>
    </div>
  );
};

export default About;
