import React, { useContext } from 'react';
import './productdetails.scss';
import { Carousel } from 'react-bootstrap';
import { ProductContext } from '../../contexts/ProductContext';
import first from '../../assets/category.png';

const ProductDetails = props => {
  const [products, setProducts] = useContext(ProductContext);

  //This gets us the productID - which we will use
  //to identify which product's data to get
  //Using parseInt to convert String route parameter to int for ID check
  const productIDSearched = parseInt(props.match.params.id);
  const { sofas, seating, tables, beds, storage, decor, dining, cupboards } = products;
  const combined = [...sofas, ...seating, ...tables,
    ...beds, ...storage, ...decor, ...dining, ...cupboards];
  const foundProduct = combined.filter(product => product.productID === productIDSearched)[0];

  
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
          <h1 className="details-heading">{foundProduct.name}</h1>
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
          <p className="details-price">₹{foundProduct.price}</p>
          <button className="add-to-cart-btn">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
