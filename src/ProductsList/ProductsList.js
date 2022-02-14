import React from "react";
import ProductCard from './ProductListComponents/ProductCard';
import './ProductsList.css';
import productObj from './ProductListComponents/products.json';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProductList = () => {
  const newProdObj = [];
  const prodObjCopy = [...productObj]

  while (prodObjCopy.length) {
    newProdObj.push(prodObjCopy.splice(0,5));
  }

  return <div className="product-section">
    <p className="slashed-prices section-header">Slashed Prices</p>
    <Carousel infiniteLoop={true}>
    {newProdObj.map((row)=> {
      return (
        <div className="slashed-price-carousel-row">
          {row.map((item)=>{
            return <ProductCard item={item} />
          })}
        </div>
      )
    })}
    </Carousel>
    <div className="recommended-for-you">
      <p className="section-header">Recommended For you</p>
      <div className="prod-list">
        {productObj.map((item)=>{ return (<ProductCard item={item} />)})}
      </div>
      <div className="view-more">
        <button class="view-more-button">View More</button>
      </div>
    </div>
  </div>;
};

export default ProductList;
