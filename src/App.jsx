import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { useState } from "react";
import Products from "./components/Products/Products";
import Stats from "./components/Stats/Stats";
import Steps from "./components/Steps/Steps";
import Pricing from "./components/Pricing/Pricing";
import ReadyToTransform from "./components/ReadyToTransform/ReadyToTransform";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Navbar cartItems={cartItems.length} />
      <Hero />
      <Stats />
      <Products cartItems={cartItems} setCartItems={setCartItems} />
      <Steps />
      <Pricing />
      <ReadyToTransform />
      <Footer />
    </>
  );
};

export default App;
