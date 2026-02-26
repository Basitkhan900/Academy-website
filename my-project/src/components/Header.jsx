import React from "react";
import video from "../assets/video/video.mp4";
import Button from "./Button";

const Header = () => {
  return (
    <div className="relative w-full h-screen mt-[130px] overflow-hidden">

      
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>


      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 text-white">

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold 
        bg-gradient-to-r from-cyan-300 via-white to-cyan-300 
        bg-clip-text text-transparent">
          Tech Pioneer
        </h1>

        <h2 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-4xl bg-gradient-to-r from-cyan-300 via-white to-cyan-300
        bg-clip-text text-transparent font-bold ">
          Join Us To Pioneer Your Tech Career
        </h2>

        <div className="mt-6">
          <Button title={"Get Started"} className="w-32 sm:w-36 h-12 sm:h-14" />
        </div>

      </div>
    </div>
  );
};

export default Header;