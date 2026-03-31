import React from "react";
import Instagram from "../../assets/Instagram.png";
import Facebook from "../../assets/Facebook.png";
import X from "../../assets/fi_5968958.png";

const Footer = () => {
  return (
    <div className="py-30 bg-[#101727]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col md:flex-row justify-between text-white gap-5 md:gap-0 items-center md:items-start text-center md:text-start">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold">DigiTools</h1>
              <p className="text-xs text-gray-400 leading-5">
                Premium digital tools for creators,
                <br /> professionals, and businesses. Work smarter <br />
                with our suite of powerful tools.
              </p>
            </div>
            <div className="hidden md:flex flex-col gap-3">
              <h1>Products</h1>
              <ul className="text-gray-400 text-sm flex flex-col gap-3">
                <li>Features</li>
                <li>Pricing</li>
                <li>Templates</li>
                <li>Integrations</li>
              </ul>
            </div>
            <div className="hidden md:flex flex-col gap-3">
              <h1>Company</h1>
              <ul className="text-gray-400 text-sm flex flex-col gap-3">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div className="hidden md:flex flex-col gap-3">
              <h1>Resources</h1>
              <ul className="text-gray-400 text-sm flex flex-col gap-3">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Community</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h1>Social Links</h1>
              <ul className="flex gap-3">
                <li className="bg-white flex items-center justify-center rounded-full p-2">
                  <img src={Instagram} alt="" />
                </li>
                <li className="bg-white flex items-center justify-center rounded-full p-2">
                  <img src={Facebook} alt="" />
                </li>
                <li className="bg-white flex items-center justify-center rounded-full p-2">
                  <img src={X} alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-t-gray-800 ">
            <div className="mt-3 flex flex-col-reverse md:flex-row text-center md:text-start justify-between text-gray-500 text-sm gap-5 md:gap-0">
              <p>© 2026 Digitools. All rights reserved.</p>
              <div className="flex gap-5 justify-center">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Cookies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
