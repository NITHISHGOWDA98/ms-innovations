
import './App.css';
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import { LandingPage } from './LandingPage/LandingPage';
import ProductPage from './ProductPage/ProductPage';
import BuyNow from './BuyNow.js/BuyNow';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route path = "/" element = {  <LandingPage/>} />
       <Route path = "/products" element = {  <ProductPage/>} />
       <Route path = "/orderpage" element = {  <BuyNow/>} />


      
      </Routes>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
