import React from "react";
import PricingGrid from "./PricingGrid/PricingGrid";
import { Suspense } from "react";

const fetchPricing = async () => {
  const res = await fetch("/pricing.json");
  return res.json();
};

const pricingPromise = fetchPricing();

const Pricing = () => {
  return (
    <div className="py-30 px-3 md:px-0">
      <div className="container mx-auto space-y-4">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center ">
            Simple, Transparent Pricing
          </h1>
          <p className="text-gray-500">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
          <Suspense fallback={<h1>Loading...</h1>}>
            <PricingGrid pricingPromise={pricingPromise} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
