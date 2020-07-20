import React from 'react';
import './productdetails.scss';
import { Carousel } from 'react-bootstrap';
import first from '../../assets/category.png';

const ProductDetails = () => {
  return (
    <div className="container custom-container">
      <div className="row h-100 product-detail-row">
        <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center">
          <Carousel className="product-details-carousel">
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
        </div>
        <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center">
          <h1 className="details-heading">Pretty White Classical Chair</h1>
          <p className="details-subheading">YEAR 2014 • MODEL NO. 2309FKJ</p>
          <div className="details-description">
            <p>
              Lorem ipsum dolor do.. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do..
              <br></br>
            </p>
            <p>
              Lorem ipsum dolor do.. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do..
            </p>
          </div>
          <p className="details-price">₹1499</p>
          <button className="add-to-cart-btn">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
