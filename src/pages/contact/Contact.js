import React from 'react';
import BorderButton from '../../components/borderbutton/BorderButton.js';
import RedLine from '../../components/redline/RedLine';
import './contact.scss';
import SignatureText from '../../components/signaturetext/SignatureText';

const Contact = () => {
  return (
    <div className="container custom-container d-flex flex-column">
      <div className="row flex-grow-1">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h1>Contact Us Me.</h1>
          <RedLine />
          <BorderButton text="LETS TALK :)" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center contact-details">
          <div className="container d-flex justify-content-center">
            <div className="d-flex flex-column mr-5">
              <p className="contact-detail-type">PHONE</p>
              <p className="contact-detail-type">EMAIL</p>
              <p className="contact-detail-type">LINKEDIN</p>
            </div>
            <div className="d-flex flex-column">
              <p className="contact-detail-data underline">+91-9315696194</p>
              <p className="contact-detail-data underline">
                rohitkumar377024@gmail.com
              </p>
              <p className="contact-detail-data underline">rohit-kumar-18b24a111</p>
            </div>
          </div>
        </div>
      </div>
      <SignatureText />
    </div>
  );
};

export default Contact;
