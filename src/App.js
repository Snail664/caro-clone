import "./App.css";
import './App.scss';
/* import BlackBar from "./BlackBar/BlackBar";
import WhiteBar from "./WhiteBar/WhiteBar";
import CategorySlider from "./CategorySlider/CategorySlider"; */
import React from 'react';
/* import ProductList from "./ProductsList/ProductsList";
import Gallery from "./Gallery"; */
import Footer from "./Footer";
import Navibar from './components/Navibar/Navibar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/about'

function App() {
  return (
    <div className="App" > 
    <Router>
    <Navibar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
    
    <Footer />
    </div>
  );
}

export default App;
