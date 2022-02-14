import React from "react";
import ProductCard from './ProductListComponents/ProductCard';
import './ProductsList.css';
import productObj from './ProductListComponents/products.json';

const ProductList = () => {
  return <div className="product-section">
    <p className="slashed-prices section-header">Slashed Prices</p>
    <div className="recommended-for-you">
      <p className="section-header">Recommended For you</p>
      <div className="prod-list">
        {productObj.map((item)=>{
          console.log(item)
          return (<ProductCard 
            profilePic = {item.profilePic}
            userName = {item.userName}
            dateModified = {item.dateModified}
            prodImg = {item.prodImg}
            prodTitle = {item.prodTitle}
            prodPrice = {item.prodPrice}
            prodCondition = {item.prodCondition}
            prodLikes = {item.prodLikes}
            freeShipping = {item.freeShipping}
            carouProtect = {item.carouProtect}
            />)
        })
        }
      </div>
    </div>
  </div>;
};

export default ProductList;
