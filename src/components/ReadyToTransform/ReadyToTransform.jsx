import React from "react";

const ReadyToTransform = () => {
  return (
    <div className="py-30 px-3 md:px-0 bg-linear-primary">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center text-center gap-3">
            <h1 className="text-white text-3xl md:text-4xl font-extrabold">
              Ready to Transform Your Workflow?
            </h1>
            <p className="text-gray-200 text-sm">
              Join thousands of professionals who are already using Digitools to
              work smarter. <br />
              Start your free trial today.
            </p>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <button className="btn rounded-full text-transparent bg-white">
              <p className="text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-semibold">
                Explore Products
              </p>
            </button>
            <button className="btn rounded-full text-transparent bg-clip-text font-semibold">
              View Pricing
            </button>
          </div>
          <div>
            <p className="text-gray-300 text-sm text-center">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToTransform;
