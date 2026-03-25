import React from 'react'

const Cdesign = ({ id, image, title }) => {
  return (
    <div className="relative w-full group overflow-hidden rounded-3xl">
      
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 sm:h-56 md:h-64 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3 sm:p-4 md:p-6 lg:p-8">
        <h1 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold text-white">
          {title}
        </h1>
      </div>

    </div>
  )
}

export default Cdesign