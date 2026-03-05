import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/tect logo.png";
import Button from "./Button";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-50 w-full top-0 ">
    <div className="bg-white/30 backdrop-blur-[6.3px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-2
    rounded-xl border border-white/20 text-black  md:m-6">

      <div className="flex items-center justify-between px-4 md:px-8 py-4">

        
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="w-18 md:w-18 h-6 md:h-10 cursor-pointer"
          />

          <div className=" sm:block">
            <h1 className="font-bold text-xl md:text-3xl transition duration-300 hover:scale-105">
              Tech Pioneers
            </h1>
            <h3 className="text-gray-600 text-sm md:text-base">
              Pioneer with Tech Careers
            </h3>
          </div>
        </div>

        
        <div className="hidden lg:flex gap-6 font-bold">
          <Link to="/" className="transition duration-300 hover:text-blue-600 hover:scale-105">
            Home
          </Link>
          <Link to="/About" className="transition duration-300 hover:text-blue-600 hover:scale-105">
            About Us
          </Link>
          <Link to="/Courses" className="transition duration-300 hover:text-blue-600 hover:scale-105">
            Courses
          </Link>
          <Link to="/Academyprocess" className="transition duration-300 hover:text-blue-600 hover:scale-105">
            Academy Process
          </Link>
          <Link to="/Facilities" className="transition duration-300 hover:text-blue-600 hover:scale-105">
            Facilities
          </Link>
          <Link to="/Team" className="transition duration-300 hover:text-blue-600 hover:scale-105">
            Team
          </Link>
        </div>

       
        <div className="hidden lg:block ">
          <Button title={"Contact Us"} className="w-28 md:w-38 h-8 md:h-12" />
        </div>

        
        <div className="lg:hidden text-3xl cursor-pointer">
          {isOpen ? (
            <HiX onClick={() => setIsOpen(false)} />
          ) : (
            <HiMenu onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

    
      {isOpen && (
        <div className="lg:hidden flex flex-col gap-4 px-6 pb-6 font-semibold bg-white/80 backdrop-blur-md rounded-b-xl">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/About" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/Courses" onClick={() => setIsOpen(false)}>Courses</Link>
          <Link to="/Academyprocess" onClick={() => setIsOpen(false)}>Academy Process</Link>
          <Link to="/Facilities" onClick={() => setIsOpen(false)}>Facilities</Link>
          <Link to="/Team" onClick={() => setIsOpen(false)}>Team</Link>

          <Button title={"Contact Us"} className="w-full h-10 mt-2 mr-4" />
        </div>
      )}
    </div>
    </div>
  );
};

export default Navbar;