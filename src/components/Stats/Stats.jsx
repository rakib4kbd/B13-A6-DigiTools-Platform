import React from "react";
import StatGrid from "./StatGrid/StatGrid";

const statsBanners = [
  { heading: "50k+", subheading: "Active Users" },
  { heading: "200+", subheading: "Premium Tools" },
  { heading: "4.9", subheading: "Rating" },
];

const Stats = () => {
  return (
    <div className="py-15 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-3">
          {statsBanners.map((statbanner, index) => (
            <div className="border-r last:border-r-0" key={index}>
              <StatGrid
                key={index}
                heading={statbanner.heading}
                subheading={statbanner.subheading}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
