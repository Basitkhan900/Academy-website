import React from 'react'
import Hero from '../assets/images/hero.jpeg'

const Herosec = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      
      
      <img
        src={Hero}
        alt="Hero"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        
        <h1 className="uppercase text-2xl sm:text-3xl md:text-[48px] font-bold text-white">
          Join Us
        </h1>

        <p className="text-xs sm:text-sm md:text-[28px] text-white mt-3 ">
          Ready to Lace Up Your Dreams? Join us and unlock your true potential on the pitch
        </p>

        <button className="h-[56px] w-[220px] bg-[#007BFF] text-white font-semibold rounded-[16px] mt-10 hover:bg-blue-600 transition duration-300">
          Register Now
        </button>

      </div>
    </div>
  )
}

export default Herosec