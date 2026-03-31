import React from "react";
import DigiTools from "../../assets/DigiTools.png";
import { ShoppingCart } from "lucide-react";
const Navbar = ({ cartItems }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-1 md:px-10">
      <div className="navbar-start py-4">
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Login</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testomonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <a href="#" className="w-30 flex items-center">
          <img src={DigiTools} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden md:flex items-center justify-center">
        <ul className="menu menu-horizontal px-1 gap-8">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testomonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal items-center flex-nowrap hidden md:flex">
          <li>
            <a>
              <span className="relative">
                <ShoppingCart width={20} />
                <p className="absolute -top-2 -right-2 text-error font-semibold">
                  {cartItems}
                </p>
              </span>
            </a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
        <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full px-4 py-3">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Navbar;
