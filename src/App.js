import "./App.css";

import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Register } from "./pages/Register";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="products"> */}
          <Route exact path="Products" element={<ProductList />} />
          <Route path="products/:id" element={<Product />} />
          {/* //</Route> */}
          <Route path="about" element={<About />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
