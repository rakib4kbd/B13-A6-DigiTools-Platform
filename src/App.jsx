import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import PostBanner from "./components/PostBanner/PostBanner";
import { useState } from "react";
import Products from "./components/Products/Products";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Navbar cartItems={cartItems.length} />
      <Hero />
      <PostBanner />
      <Products cartItems={cartItems} setCartItems={setCartItems} />
    </>
  );
};

export default App;
