import React from "react";
import logo from "../../assets/images/tect logo.png";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img src={logo} alt="logo" className="w-32 mb-4" />

          <p className="text-sm text-black leading-relaxed">
            Tech Pioneers Academy is a renowned technology institute offering a
            wide range of specialized courses tailored to meet industry
            standards. We focus on practical coding, mentorship from real-world
            industry professionals, and providing students with the skills they
            need to thrive in the tech world.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h1 className="text-lg text-black font-bold uppercase mt-4">
            Contact Info
          </h1>

          <ul className="space-y-2 text-sm mt-6">
            <li>
              <a
                href="mailto:techpioneers01@gmail.com"
                className="text-blue-600 hover:border-b-2 transition"
              >
                techpioneers01@gmail.com
              </a>
            </li>

            <li>
              <a
                href="tel:+923190748277"
                className="text-blue-600 hover:border-b-2 transition"
              >
                +92 319 0748277
              </a>
            </li>

            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=1st+Floor+Dansish+Abad+Near+Islamia+College+BRT+Station+Peshawar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:border-b-2 transition"
              >
                Saya Heights, 1st Floor Dansish Abad, Near Islamia College BRT
                Station, Peshawar
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h1 className="text-lg text-black font-bold mt-4 uppercase">
            Join Us On
          </h1>

          <div className="flex gap-4 mt-6">
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-black rounded-full hover:scale-110 transition"
            >
              <FaTiktok className="text-white text-lg" />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full hover:scale-110 transition"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-pink-500 rounded-full hover:scale-110 transition"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Tech Pioneers Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
