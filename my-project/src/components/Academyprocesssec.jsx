import React, { useState } from "react";
import img1 from "../assets/images/Director.png";
import img2 from "../assets/images/ceo.png";

const Academyprocesssec = () => {
  const [showMoreDirector, setShowMoreDirector] = useState(false);
  const [showMoreCEO, setShowMoreCEO] = useState(false);

  return (
    <div className="mt-16 px-4 md:px-8">

      {/* Heading Section */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-alegreya">
          Academy Progress
        </h1>

        <h3 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold font-alegreya">
          Our Team of Industry Experts
        </h3>

        <div className="max-w-4xl mx-auto mt-8 text-base sm:text-lg md:text-xl leading-relaxed">
          <p className="font-alegreya font-semibold text-gray-700">
            Our faculty consists of seasoned professionals who not only teach
            but actively run companies and manage real-time projects. Their
            expertise helps students engage with real-world problems and
            solutions, making their learning experience highly practical and
            relevant to today’s market demands. Our faculty members also manage
            NAVTTC batches, further showcasing their credibility in technical
            training.
          </p>
        </div>
      </div>

     
      <div className="max-w-4xl mx-auto bg-gray-50 rounded-4xl p-6 sm:p-8 md:p-12 mt-14 transition duration-300 hover:scale-105 cursor-pointer shadow-md">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">

          <img
            src={img1}
            alt="Director"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover shadow-lg"
          />

          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
              Engr. Sartaj Gull Khattak
            </h2>

            <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mt-1">
              Director
            </h3>

            <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
              {/* Mobile Version */}
              <span className="md:hidden">
                {showMoreDirector
                  ? `Sartaj Gull Khattak, an accomplished electrical engineer, recently retired as Principal of Government Technical College Peshawar. With over 8 years as a TEVTA Syndicate Member and BPS-20 officer, he’s been a driving force in technical education. Now, he dedicates his expertise to managing his own school, continuing his commitment to advancing education in Pakistan.`
                  : `Sartaj Gull Khattak, an accomplished electrical engineer, recently retired as Principal of Government Technical College Peshawar...`}
              </span>

              {/* Desktop Version */}
              <span className="hidden md:inline">
                Sartaj Gull Khattak, an accomplished electrical engineer,
                recently retired as Principal of Government Technical College
                Peshawar. With over 8 years as a TEVTA Syndicate Member and
                BPS-20 officer, he’s been a driving force in technical
                education. Now, he dedicates his expertise to managing his own
                school, continuing his commitment to advancing education in
                Pakistan.
              </span>
            </p>

            {/* Toggle Button */}
            <button
              onClick={() => setShowMoreDirector(!showMoreDirector)}
              className="md:hidden mt-2 text-blue-600 font-semibold"
            >
              {showMoreDirector ? "See Less" : "See More"}
            </button>
          </div>
        </div>
      </div>

      {/* CEO Card */}
      <div className="max-w-4xl mx-auto bg-gray-50 rounded-4xl p-6 sm:p-8 md:p-12 mt-10 transition duration-300 hover:scale-105 cursor-pointer shadow-md">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">

          <img
            src={img2}
            alt="CEO"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover shadow-lg"
          />

          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
              Engr. Talha Sartaj
            </h2>

            <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mt-1">
              CEO
            </h3>

            <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
              {/* Mobile Version */}
              <span className="md:hidden">
                {showMoreCEO
                  ? `Engr. Talha Sartaj is a software engineer with expertise in AI and Django and serves as the CEO of Tech Pioneers, offering courses and services in development and e-commerce to international clients. A passionate motorsports enthusiast and blogger, Talha has also organized numerous tech, non-tech, and motorsports events, blending technical proficiency with hands-on event experience.`
                  : `Engr. Talha Sartaj is a software engineer with expertise in AI and Django and serves as the CEO of Tech Pioneers...`}
              </span>

              {/* Desktop Version */}
              <span className="hidden md:inline">
                Engr. Talha Sartaj is a software engineer with expertise in AI
                and Django and serves as the CEO of Tech Pioneers, offering
                courses and services in development and e-commerce to
                international clients. A passionate motorsports enthusiast and
                blogger, Talha has also organized numerous tech, non-tech, and
                motorsports events, blending technical proficiency with
                hands-on event experience.
              </span>
            </p>

            {/* Toggle Button */}
            <button
              onClick={() => setShowMoreCEO(!showMoreCEO)}
              className="md:hidden mt-2 text-blue-600 font-semibold"
            >
              {showMoreCEO ? "See Less" : "See More"}
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Academyprocesssec;