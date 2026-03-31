import React from "react";
import { User, Package, Rocket } from "lucide-react";
import StepGrid from "./StepGrid";

const Steps = () => {
  const stepList = [
    {
      id: "01",
      icon: <User width={50} height={50} className="m-6" color="#4F39F6" />,
      title: "Create Account",
      description:
        "Sign up for free in seconds. No credit card required to get started.",
    },
    {
      id: "02",
      icon: <Package width={50} height={50} className="m-6" color="#4F39F6" />,
      title: "Choose Products",
      description:
        "Browse our catalog and select the toolsthat fit your needs.",
    },
    {
      id: "03",
      icon: <Rocket width={50} height={50} className="m-6" color="#4F39F6" />,
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
    },
  ];

  return (
    <div className="px-3 md:px-0 py-30 bg-[#F9FAFC]">
      <div className="container mx-auto flex flex-col gap-10 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Get Started in 3 Steps
          </h1>
          <p className="text-gray-500">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
          <StepGrid stepList={stepList} />
        </div>
      </div>
    </div>
  );
};

export default Steps;
