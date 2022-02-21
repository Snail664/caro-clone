import React from 'react'
import BlackBar from "../BlackBar/BlackBar";
import WhiteBar from "../WhiteBar/WhiteBar";
import CategorySlider from "../CategorySlider/CategorySlider";
import ProductList from "../ProductsList/ProductsList";
import Gallery from "../Gallery";

const Home = () => {
  return (
    <div>
      {/* <BlackBar /> */}
      <WhiteBar />
      <Gallery />
      <CategorySlider />
      <ProductList />
    </div>
  )
}

export default Home