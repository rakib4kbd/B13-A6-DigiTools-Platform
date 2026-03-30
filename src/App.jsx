import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import PostBanner from "./components/PostBanner/PostBanner";
import Tools from "./components/Products/Products";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PostBanner />
      <Tools />
    </>
  );
};

export default App;
