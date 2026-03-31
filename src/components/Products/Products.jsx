import React from "react";
import { Suspense } from "react";
import ProductGrid from "./ProductGrid/ProductGrid";
import { useState } from "react";
import Cart from "./Cart/Cart";

const fetchTools = async () => {
  const res = await fetch("/public/products.json");
  return res.json();
};
const toolsPromise = fetchTools();

const Products = ({ cartItems, setCartItems }) => {
  const [selectedProductBtn, setSelectedProductBtn] = useState("products");

  const handleClick = (selected) => {
    setSelectedProductBtn(selected);
  };
  return (
    <div className="my-30">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 my-10 text-center ">
          <h1 className="font-extrabold text-4xl md:text-5xl">
            Premium Digital Tools
          </h1>
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
              className={`btn md:btn-lg btn-ghost rounded-full ${selectedProductBtn === "products" && "bg-linear-primary text-white"}`}
            >
              Products
            </button>
            <button
              onClick={() => {
                handleClick("cart");
              }}
              className={`btn md:btn-lg btn-ghost rounded-full ${selectedProductBtn === "cart" && "bg-linear-primary text-white"}`}
            >
              Cart ({cartItems.length})
            </button>
          </div>
        </div>

        <Cart
          selectedProductBtn={selectedProductBtn}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />

        {selectedProductBtn === "products" && (
          <div className="grid px-5 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 container">
            <Suspense fallback={<h1>Loading...</h1>}>
              <ProductGrid
                toolsPromise={toolsPromise}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </Suspense>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
