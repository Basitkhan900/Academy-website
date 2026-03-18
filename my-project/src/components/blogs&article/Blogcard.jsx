import React, { useState, useEffect } from "react";
import data5 from "../../arrays/articles";
import BlogDesign from "./BlogDesign";

const Blogcard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Responsive cards logic
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const maxIndex = data5.length - cardsToShow;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Reset index if screen resizes and index becomes invalid
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [cardsToShow, maxIndex, currentIndex]);

  return (
    <section className="bg-gray-100 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-center text-[#0f172a] mb-20">
          Blogs & Articles
        </h2>

        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="absolute left-0 top-15 -translate-y-1/2  w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-blue-600 text-white 
          text-3xl shadow-md flex items-center justify-center z-20 disabled:opacity-30"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          disabled={currentIndex === maxIndex}
          className="absolute right-0 top-15 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12  rounded-2xl bg-blue-600 text-white text-3xl shadow-md flex items-center justify-center z-20 disabled:opacity-30"
        >
          ›
        </button>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            }}
          >
            {data5.map((item) => (
              <BlogDesign
                key={item.id}
                image={item.image}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center mt-14 gap-3">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-blue-600 w-8" : "bg-gray-400 w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogcard;
