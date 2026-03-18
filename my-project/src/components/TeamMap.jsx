import React, { useState, useEffect } from "react";
import data3 from "../arrays/team";
import Teamdesign from "./Teamdesign";

const TeamMap = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = data3.length - visibleCards + 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <section className="py-12 md:py-20 bg-[#fbfcfd] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        {/* Header and Top Corner Navigation */}
        <div className="flex flex-col items-center mb-10 relative">
          <h2 className="text-3xl md:text-[42px] font-bold text-[#0f172a]">
            Our Team
          </h2>

          {/* Buttons positioned at the corners of the slider area */}
          <div className="absolute w-full top-16 md:top-20 flex justify-between px-2 z-30">
            <button
              onClick={prevSlide}
              className="bg-blue-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center transition-all shadow-sm"
            >
              <span className="text-2xl md:text-3xl font-light mb-1">‹</span>
            </button>

            <button
              onClick={nextSlide}
              className="bg-blue-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center transition-all shadow-lg"
            >
              <span className="text-2xl md:text-3xl font-light mb-1">›</span>
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="overflow-hidden px-2 mt-12">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {data3.map((member) => (
              <div
                key={member.id}
                style={{ minWidth: `${100 / visibleCards}%` }}
                className="px-2"
              >
                <Teamdesign member={member} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Pagination Bar */}
        <div className="flex justify-center items-center mt-12 space-x-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-12 bg-[#007bff]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMap;
