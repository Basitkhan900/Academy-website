import React from "react";
import HeroImg from "../assets/images/hero.jpeg"; // replace with your image
import ceo from "../assets/images/ceo.png"
import Navbar from "../components/layout/Navbar";
import { FaStar, FaLightbulb, FaUsers, FaTools } from "react-icons/fa";
import Footer from "../components/layout/Footer";
import Cmap from "../components/cards2/Cmap";


const HeroSection = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 py-36 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-blue-600 leading-tight">
            Pioneering Tech <br /> Education
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            Tech Pioneers Academy is a premier technology institute offering 
            cutting-edge courses designed to meet global industry standards. 
            We combine practical coding, mentorship from industry leaders, 
            and real-world projects to create tech professionals of tomorrow.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-10">
            
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-blue-600">200+</h2>
              <p className="text-gray-600 mt-1">Students Trained</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-blue-600">50+</h2>
              <p className="text-gray-600 mt-1">Industry Experts</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-blue-600">95%</h2>
              <p className="text-gray-600 mt-1">Satisfaction Rate</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-blue-600">30+</h2>
              <p className="text-gray-600 mt-1">Courses Offered</p>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src={HeroImg}
            alt="team"
            className="w-full h-[450px] object-cover rounded-3xl shadow-lg"
          />

          {/* Floating Card */}
          <div className="absolute bottom-4 right-4 bg-white px-6 py-4 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-800">Since 2015</h3>
            <p className="text-sm text-gray-500">Transforming careers</p>
          </div>
        </div>

      </div>

     <div className="bg-gray-100 px-6 py-16">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="bg-gradient-to-b from-blue-600 to-indigo-700 flex flex-col items-center justify-center text-center p-10">
          
          <img
            src={ceo}
            alt="Founder"
            className="w-40 h-40 rounded-full border-4 border-white object-cover mb-6"
          />

          <h2 className="text-white text-2xl font-bold">
            Engr. Talha Sartaj
          </h2>

          <p className="text-white/80 mt-2">CEO & Founder</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 md:p-12">
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            From Our Founder
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Engr. Talha Sartaj is a software engineer with expertise in AI and Django and serves as the CEO of Tech Pioneers.
          </p>

          <hr className="my-6" />

          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Our Core Values
          </h3>

          {/* VALUES */}
          <div className="grid sm:grid-cols-2 gap-6">
            
            {/* Excellence */}
            <div className="flex gap-4">
              <FaStar className="text-yellow-500 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Excellence</h4>
                <p className="text-sm text-gray-600">
                  We pursue the highest standards in tech education
                </p>
              </div>
            </div>

            {/* Innovation */}
            <div className="flex gap-4">
              <FaLightbulb className="text-yellow-400 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Innovation</h4>
                <p className="text-sm text-gray-600">
                  Constantly evolving with industry trends
                </p>
              </div>
            </div>

            {/* Community */}
            <div className="flex gap-4">
              <FaUsers className="text-purple-500 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Community</h4>
                <p className="text-sm text-gray-600">
                  Building networks that last beyond graduation
                </p>
              </div>
            </div>

            {/* Practicality */}
            <div className="flex gap-4">
              <FaTools className="text-gray-500 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Practicality</h4>
                <p className="text-sm text-gray-600">
                  Skills you can immediately apply in the real world
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  <div className="">
    <h1 className="font-bold text-3xl text-center">Life at Tech Pioneers</h1>
    <Cmap/>
  </div>

  <div className="bg-gradient-to-r from-blue-600 to-indigo-700  p-8 md:p-12 max-w=6xl h-72 rounded-3xl text-center text-white py-16">
     <h2 className="text-3xl font-bold mb-4">Ready to Start Your Tech Journey?</h2>
     <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Join hundreds of students who have transformed their careers with our industry-relevant programs and expert mentorship.</p>
     <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition">Explore Courses</button>
      <button className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition">Contact Us</button>
     </div>
  </div>
    </div>
    
    <Footer/>
    </>
  );
};

export default HeroSection;