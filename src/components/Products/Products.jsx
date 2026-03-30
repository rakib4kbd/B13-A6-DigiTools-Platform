import React from "react";
import { Suspense } from "react";
import ProductGrid from "./ProductGrid/ProductGrid";
import { useState } from "react";

const fetchTools = async () => {
  const res = await fetch("/public/products.json");
  return res.json();
};
const toolsPromise = fetchTools();

const Products = () => {
  const [selectedProductBtn, setSelectedProductBtn] = useState("products");
  const handleClick = (selected) => {
    setSelectedProductBtn(selected);
  };
  return (
    <div className="my-30">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 my-10 text-center ">
          <h1 className="font-extrabold text-5xl">Premium Digital Tools</h1>
          <p>
            Choose from our curated collection of premium digital products
            designed
            <br />
            to boost your productivity and creativity.
          </p>
          <div className="flex mx-auto border border-gray-200 rounded-full">
            <button
              onClick={() => {
                handleClick("products");
              }}
              className={`btn btn-lg btn-ghost rounded-full ${selectedProductBtn === "products" && "bg-linear-primary text-white"}`}
            >
              Products
            </button>
            <button
              onClick={() => {
                handleClick("cart");
              }}
              className={`btn btn-lg btn-ghost rounded-full ${selectedProductBtn === "cart" && "bg-linear-primary text-white"}`}
            >
              Cart (2)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-7.5 container">
          <Suspense>
            <ProductGrid toolsPromise={toolsPromise} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Products;
