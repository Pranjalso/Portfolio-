import React, { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Frontend Developer",
  "Backend Developer",
];

const PortfolioCard = () => {
  const [index, setIndex] = useState(0);

  // Change heading every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 px-6">

      {/* LEFT SIDE – Animated Headings */}
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className="text-white text-center lg:text-left"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-5 drop-shadow-[0_0_25px_rgba(59,130,246,0.35)]">
          Hi, I’m{" "}
          <span className="text-purple-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]">
            Pranjal Soni
          </span>
        </h1>

        {/* Animated Role Text */}
        <h2
          key={roles[index]}
          className="text-2xl sm:text-3xl lg:text-5xl font-semibold h-14
          animate-[fadeUp_0.6s_ease-out]"
        >
          {roles[index]}
        </h2>

        <p className="mt-6 text-gray-300 max-w-md text-base sm:text-lg lg:text-xl leading-relaxed">
          I design and develop optimized web and mobile applications that
          deliver seamless user experiences and real business value.
        </p>
      </div>

      {/* RIGHT SIDE – Portfolio Card */}
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="text-white w-[90vw] sm:w-[65vw] lg:w-[32vw]
        backdrop-blur-xl bg-white/5
        border border-white/20 rounded-2xl p-7
        hover:scale-[1.04]
        transition-all duration-500
        shadow-[0_0_40px_rgba(0,0,0,0.7)]
        hover:shadow-[0_0_70px_rgba(59,130,246,0.35)]"
      >
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold py-4 border-b border-white/20 drop-shadow-md">
          Portfolio*
        </h3>

        <h4 className="text-xl sm:text-2xl lg:text-3xl py-4 border-b border-white/20 drop-shadow-sm">
          Pranjal Soni
        </h4>

        <p className="text-lg sm:text-xl lg:text-2xl mt-4 text-gray-300 leading-relaxed">
          MERN Stack Developer <br />
          Web & App Development
        </p>
      </div>

      {/* Inline animation for role text */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioCard;
