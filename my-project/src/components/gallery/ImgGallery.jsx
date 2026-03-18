import React from "react";
import g1 from "../../assets/images/g1.jpeg";
import g2 from "../../assets/images/g2.png";
import g3 from "../../assets/images/g3.jpeg";
import g4 from "../../assets/images/g4.jpeg";
import g5 from "../../assets/images/g5.jpeg";

const ImgGallery = () => {
  return (
    <div className="w-full flex flex-col items-center gap-6 p-6">

      {/* Images Section */}
      <div className="w-full flex gap-6">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6 w-3/4">

          {/* Big Image */}
          <img
            src={g1}
            alt=""
            className="w-full h-[350px] object-cover rounded-[36px]"
          />

          {/* Bottom 3 Images */}
          <div className="flex gap-6">
            <img
              src={g2}
              alt=""
              className="w-1/3 h-[200px] object-cover rounded-[36px]"
            />

            <img
              src={g3}
              alt=""
              className="w-1/3 h-[200px] object-cover rounded-[36px]"
            />

            <img
              src={g4}
              alt=""
              className="w-1/3 h-[200px] object-cover rounded-[36px]"
            />
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6 w-1/4">
          <img
            src={g5}
            alt=""
            className="w-full h-[290px] object-cover rounded-[36px]"
          />

          <img
            src={g5}
            alt=""
            className="w-full h-[260px] object-cover rounded-[36px]"
          />
        </div>

      </div>

      
      <button className="bg-blue-500 px-16 h-14 rounded-2xl text-white font-bold text-xl mt-4 hover:bg-blue-600 transition">
        View More
      </button>

    </div>
  );
};

export default ImgGallery;