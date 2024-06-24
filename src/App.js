import "./App.css";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/home";
import Products from "./pages/products";
import CreateShop from "./pages/shop";
import CreateProduct from "./pages/product";
import Aos from "aos";
import Navbar from "./componets/navbar";

function App() {
  Aos.init();
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/product/:id" element={<Products />} />
        <Route path="/new/product" element={<CreateProduct />} />
        <Route path="/new/shop" element={<CreateShop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
