import React from "react";

const BlogDesign = ({ image, title, desc }) => {
  return (
    <div className="relative min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-4">
      <div className="relative rounded-3xl overflow-hidden shadow-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-[340px] object-cover"
        />

        <div className="absolute "></div>

        <div className="absolute bottom-2  text-center text-white bg-black/50 object-cover text-left ">
          <h3 className="text-2xl font-bold mb-3 ml-4">{title}</h3>
          <p className="text-lg text-gray-200 ml-4">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDesign;
