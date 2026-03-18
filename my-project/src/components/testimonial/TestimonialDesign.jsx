function TestimonialDesign({ image, title, course, disc }) {

  const getInitials = (name) => {
    if (!name) return "TP";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="bg-white p-6 sm:p-10 lg:p-14 rounded-3xl sm:rounded-[2rem] lg:rounded-[3rem] border-2 border-blue-400 shadow-sm max-w-xl w-full mx-auto transition-all duration-300">

      {/* USER INFO */}
      <div className="flex items-center gap-4 sm:gap-5 mb-4 sm:mb-6">

        {image ? (
          <img
            src={image}
            alt={title}
            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-blue-100"
          />
        ) : (
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-[#007AB9] flex items-center justify-center text-white text-sm sm:text-lg font-bold">
            {getInitials(title)}
          </div>
        )}

        <div className="flex flex-col">
          <h2 className="font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 leading-tight">
            {title}
          </h2>

          <p className="text-[#007AB9] text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-1">
            {course}
          </p>
        </div>

      </div>

      {/* REVIEW TEXT */}
      <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed">
        {disc}
      </p>

    </div>
  );
}

export default TestimonialDesign;