import React from "react";
import PostBannerGrid from "./PostBannerGrid/PostBannerGrid";

const postBanners = [
  { heading: "50k+", subheading: "Active Users" },
  { heading: "200+", subheading: "Premium Tools" },
  { heading: "4.9", subheading: "Rating" },
];

const PostBanner = () => {
  return (
    <div className="py-15 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-3">
          {postBanners.map((postbanner, index) => (
            <div className="border-r last:border-r-0">
              <PostBannerGrid
                key={index}
                heading={postbanner.heading}
                subheading={postbanner.subheading}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostBanner;
