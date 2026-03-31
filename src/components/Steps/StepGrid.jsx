import React from "react";

const StepGrid = ({ stepList }) => {
  return (
    <>
      {stepList.map((item, index) => (
        <div
          className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col items-center justify-center relative py-20 hover:border-neutral hover:shadow-xl transition duration-300 ease-in-out"
          key={index}
        >
          <span className="bg-linear-primary rounded-full text-white text-sm p-4 w-5 h-5 flex items-center justify-center absolute right-3 top-3">
            {item.id}
          </span>
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <div className="bg-linear-to-r from-[#4F39F6]/20 to-[#9514FA]/20 rounded-full">
              {item.icon}
            </div>
            <h1 className="font-bold text-xl">{item.title}</h1>
            <p className="text-gray-500 text-sm leading-4">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default StepGrid;
