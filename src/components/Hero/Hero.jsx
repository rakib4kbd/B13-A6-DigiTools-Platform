import React from "react";
import focus from "../../assets/focus.png";
import banner from "../../assets/banner.png";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero my-15">
      <div className="flex container justify-center items-center gap-15">
        <div className="flex flex-col gap-2 px-5 md:px-0">
          <div className="flex items-center gap-2">
            <img src={focus} alt="" />
            <p className="text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
              New: AI-Powered Tools Available
            </p>
          </div>
          <h1 className="font-extrabold text-4xl md:text-6xl">
            Supercharge Your <br />
            Digital Workflow
          </h1>
          <p className="text-black/60 leading-5 text-sm md:text-base">
            Access premium AI tools, design assets, templates, and productivity
            <br />
            software—all in one place. Start creating faster today.
            <br /> Explore Products
          </p>

          <div className="flex mt-4 md:mt-8 gap-4 items-center">
            <button className="btn md:btn-lg bg-linear-primary text-white rounded-full py-3 px-4">
              Explore Products
            </button>
            <button className="rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-0.5">
              <div className="btn md:btn-lg rounded-full py-2 px-4 bg-white">
                <div className="text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex items-center gap-2 ">
                  <Play className="text-[#4F39F6]" />
                  Watch Demo
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="hidden md:block max-w-125">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="hero-content text-center"></div>
    </div>
  );
};

export default Hero;
