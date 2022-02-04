import "./App.css";
import BlackBar from "./BlackBar/BlackBar";
import WhiteBar from "./WhiteBar/WhiteBar";
import CategorySlider from "./CategorySlider/CategorySlider";
import ProductList from "./ProductsList/ProductsList";
import Gallery from "./Gallery";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <BlackBar />
      <WhiteBar />
      <Gallery />
      <CategorySlider />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
