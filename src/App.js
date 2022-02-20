import "./App.css";
import BlackBar from "./BlackBar/BlackBar";
import WhiteBar from "./WhiteBar/WhiteBar";
import CategorySlider from "./CategorySlider/CategorySlider";
import React from 'react';
import ProductList from "./ProductsList/ProductsList";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages'
import About from './pages/about'

function App() {
  return (
    <div className="App" > 
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
    {/* <BlackBar /> */}
    <WhiteBar />
    <Gallery />
    <CategorySlider />
    <ProductList />
    <Footer />
    </div>
  );
}

export default App;
