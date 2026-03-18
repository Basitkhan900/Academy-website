import { useState } from "react";
import data4 from "../../arrays/testimonial";
import TestimonialDesign from "./TestimonialDesign";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Testimonialcard() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < data4.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(data4.length - 1);
    }
  };

  return (
    <section className="w-full mx-auto px-4 sm:px-10 lg:px-20 py-12 sm:py-20 flex flex-col items-center bg-[#F8F9FA] overflow-hidden">

      {/* HEADER */}
      <div className="w-full max-w-7xl flex items-center justify-between mb-10 sm:mb-16">

        <button
          onClick={prevSlide}
          className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-blue-600 text-white shadow hover:bg-blue-700 transition"
        >
          <FaChevronLeft size={20} />
        </button>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1D2B3A] text-center">
          Testimonial
        </h1>

        <button
          onClick={nextSlide}
          className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-blue-600 text-white shadow hover:bg-blue-700 transition"
        >
          <FaChevronRight size={20} />
        </button>

      </div>

      {/* SLIDER */}
      <div className="w-full max-w-4xl overflow-hidden mb-10">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {data4.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full flex justify-center px-2 sm:px-4"
            >
              <TestimonialDesign
                image={item.image}
                title={item.title}
                course={item.course}
                disc={item.disc}
              />
            </div>
          ))}
        </div>
      </div>

      {/* PAGINATION */}
      <div className="flex flex-col items-center gap-6 sm:gap-10 w-full">

        <div className="flex items-center gap-2 sm:gap-3">
          {data4.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                index === i
                  ? "w-10 sm:w-16 bg-[#007AB9]"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <button className="bg-[#1D63FF] w-38 h-10 rounded-full text-stone-100 font-semibold">
          Add a Review
        </button>

      </div>

    </section>
  );
}

export default Testimonialcard;