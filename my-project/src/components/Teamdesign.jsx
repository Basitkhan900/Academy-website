import React, { useState } from 'react';

const Teamdesign = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group perspective-1000 w-full h-[450px] px-4 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)} // Allows flip on tap (mobile)
    >
      {/* Flip Container */}
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d 
        ${isFlipped ? 'rotate-y-180' : ''} 
        group-hover:rotate-y-180`}
      >
        
        {/* FRONT SIDE */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] px-6 py-10 flex flex-col items-center text-center border border-gray-50">
          <div className="w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden mb-8 shadow-md border-4 border-white">
            <img 
              src={member.image} 
              alt={member.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl md:text-[22px] font-bold text-[#1e293b] mb-2 leading-tight">
            {member.title}
          </h3>
          <p className="text-[#007bff] font-bold text-[14px] mb-6 min-h-[44px] flex items-center justify-center uppercase tracking-tight">
            {member.para}
          </p>
          <div className="text-[#64748b] text-[13px] leading-relaxed px-2">
            {Array.isArray(member.disc) ? (
              member.disc.map((line, index) => <p key={index} className="mb-1">{line}</p>)
            ) : (
              <p>{member.disc}</p>
            )}
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-[28px] p-6 sm:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex flex-col justify-center items-center text-white text-center bg-gradient-to-br from-blue-500 to-purple-600">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">
            {member.backside}
          </h2>
          <button className="bg-white text-blue-600 font-semibold rounded-full px-6 sm:px-8 py-2 sm:py-3 hover:scale-105 transition shadow-lg">
            View Details
          </button>
        </div>

      </div>
    </div>
  );
};

export default Teamdesign;