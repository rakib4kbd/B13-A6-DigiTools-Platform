import React from "react";
import { use } from "react";

const ProductGrid = ({ toolsPromise }) => {
  const tools = use(toolsPromise);
  return (
    <>
      {tools.map((tool) => (
        <div className="card bg-base-100 border rounded-2xl border-gray-200">
          <div className="card-body">
            <div className="w-15 h-15 flex items-center justify-center">
              <img src={tool.img} alt="" />
              <span className="badge badge-base rounded-full badge-warning absolute top-2 right-2">
                {tool.badge}
              </span>
            </div>
            <h2 className="text-3xl font-bold">{tool.title}</h2>
            <p className="text-gray-500 text-base">{tool.description}</p>
            <div className="flex items-baseline">
              <span className="font-bold text-xl">${tool.price}</span>
              <span className="text-gray-500">/{tool.billingCycle}</span>
            </div>
            <ul className="flex flex-col gap-2 text-xs text-gray-500">
              {tool.features.map((feature) => (
                <li>
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
            <div className="mt-2">
              <button className="btn btn-primary btn-block rounded-full bg-linear-primary">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductGrid;
