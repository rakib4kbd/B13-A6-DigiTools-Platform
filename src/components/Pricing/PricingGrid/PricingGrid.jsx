import React from "react";
import { use } from "react";

const PricingGrid = ({ pricingPromise }) => {
  const pricingList = use(pricingPromise);
  return (
    <>
      {pricingList.map((item, index) =>
        item.tag ? (
          <div
            className="card border border-gray-200 rounded-2xl bg-linear-primary text-white hover:shadow-2xl hover:border-[#4F39F6]"
            key={index}
          >
            <div className="card-body relative">
              <div className="flex items-center justify-center ">
                <span className="badge badge-sm badge-warning absolute flex -top-2">
                  {item.tag}
                </span>
              </div>

              <div>
                <h2 className="text-3xl font-bold">{item.name}</h2>
                <p className="text-gray-200">{item.description}</p>
              </div>
              <p>
                <span className="text-2xl font-bold">
                  ${item.price_per_month}
                </span>
                /Month
              </p>
              <ul className="mt-4 flex flex-col gap-2 text-xs items-start">
                {item.features.map((feature, index) => (
                  <li key={index}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button className="btn bg-white text-[#4F39F6] rounded-full btn-block">
                  {item.button}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="card border border-gray-200 rounded-2xl bg-[#F2F2F2] hover:shadow-2xl hover:border-gray-500"
            key={index}
          >
            <div className="card-body">
              <div>
                <h2 className="text-3xl font-bold">{item.name}</h2>
                <p className="text-gray-500">{item.description}</p>
              </div>
              <p>
                <span className="text-2xl font-bold">
                  ${item.price_per_month}
                </span>
                /Month
              </p>
              <ul className="mt-4 flex flex-col gap-2 text-xs items-start">
                {item.features.map((feature, index) => (
                  <li key={index}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button className="btn bg-linear-primary text-white rounded-full btn-block">
                  {item.button}
                </button>
              </div>
            </div>
          </div>
        ),
      )}
    </>
  );
};

export default PricingGrid;
