import React, { useState, useEffect } from "react";
import courses from "../arrays/courses";
import CardDesign from "./CardDesign";

const CardMap = () => {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = courses.length - cardsPerView;

  const nextSlide = () => {
    if (index < maxIndex) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="relative mt-8 bg-[#f1f2f6] py-16 sm:py-24 overflow-hidden">

      
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12 sm:mb-20 text-gray-800">
        Our Courses
      </h2>

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        disabled={index === 0}
        className="absolute left-2 sm:left-10 top-30 -translate-y-1/2 bg-blue-600 text-white w-9 h-9 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-lg sm:text-2xl shadow-md hover:bg-blue-700 transition disabled:opacity-40"
      >
        {"<"}
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        disabled={index === maxIndex}
        className="absolute right-2 sm:right-10 top-30 -translate-y-1/2 bg-blue-600 text-white w-9 h-9 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-lg sm:text-2xl shadow-md hover:bg-blue-700 transition disabled:opacity-40"
      >
        {">"}
      </button>

      
      <div className="max-w-7xl mx-auto overflow-hidden px-4 sm:px-10">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / cardsPerView)}%)`,
          }}
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className={`flex-shrink-0 flex justify-center ${
                cardsPerView === 1
                  ? "w-full"
                  : cardsPerView === 2
                  ? "w-1/2"
                  : "w-1/3"
              }`}
            >
              <CardDesign
                image={course.image}
                iconBg={course.iconBg}
                title={course.title}
                points={course.points}
                backside={course.backside}
              />
            </div>
          ))}
        </div>
      </div>

      
      <div className="flex justify-center mt-10 sm:mt-16 gap-3">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
              index === i
                ? "w-8 sm:w-10 bg-blue-600"
                : "w-2 sm:w-3 bg-gray-400"
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default CardMap;