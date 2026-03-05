import React from "react";
import ceo from "../assets/images/ceo.png";
import img15 from "../assets/images/img15.png";
export default function AboutSection() {
  return (
    <section className=" px-6 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-4xl font-bold text-[#0f172a] mb-6">
            Get To Know Us
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Tech Pioneers Academy is a renowned technology institute offering a
            wide range of specialized courses tailored to meet industry
            standards. We focus on practical coding, mentorship from real-world
            industry professionals, and providing students with the skills they
            need to thrive in the tech world.
          </p>

          <div className=" border-2 border-blue-400 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={ceo}
                alt="Talha Sartaj"
                className="w-16 h-16 rounded-full object-cover"
              />
              <h2 className="text-2xl font-semibold text-[#0f172a]">
                Engr. Talha Sartaj
              </h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Engr. Talha Sartaj is a software engineer with expertise in AI and
              Django and serves as the CEO of Tech Pioneers, offering courses
              and services in development and e-commerce to international
              clients. A passionate motorsports enthusiast and blogger, Talha
              has also organized numerous tech, non-tech, and motorsports
              events, blending technical proficiency with hands-on event
              experience.
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={img15}
            alt="Team"
            className="w-[480px] h-[380px] object-cover shadow-md"
          />
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <button className="bg-blue-600  text-white px-10 py-4 rounded-3xl text-lg font-semibold">
          Know Us More
        </button>
      </div>
    </section>
  );
}
