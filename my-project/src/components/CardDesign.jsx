import React from "react";

const CardDesign = ({ image, title, points, backside, iconBg }) => {
  return (
    <div className="w-full max-w-[380px] h-[460px] sm:h-[500px] perspective">

      <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180">

        {/* FRONT */}
        <div className="absolute w-full h-full backface-hidden bg-[#f3f4f6] rounded-[28px] p-6 sm:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex flex-col">

          <div className="flex justify-center mb-6">
            <div className={`${iconBg} w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-[28px] sm:rounded-3xl`}>
              <img src={image} alt={title} className="w-10 h-10 sm:w-14 sm:h-14 object-contain" />
            </div>
          </div>

          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center mb-4 text-gray-800">
            {title}
          </h2>

          <ul className="space-y-3 text-gray-600 text-xs sm:text-sm flex-1">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* BACK */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-[28px] p-6 sm:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex flex-col justify-center items-center text-white text-center bg-gradient-to-br from-blue-500 to-purple-600">

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">
            {backside}
          </h2>

          <button className="bg-white text-blue-600 font-semibold rounded-full px-6 sm:px-8 py-2 sm:py-3 hover:scale-105 transition">
            View Details
          </button>
        </div>

      </div>
    </div>
  );
};

export default CardDesign;