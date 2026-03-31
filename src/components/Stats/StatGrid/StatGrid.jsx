import React from "react";

const StatGrid = ({ heading, subheading }) => {
  return (
    <div className={"flex flex-col items-center justify-center"}>
      <h1 className="font-extrabold text-xl md:text-3xl">{heading}</h1>
      <p className="text-xs md:text-base">{subheading}</p>
    </div>
  );
};

export default StatGrid;
