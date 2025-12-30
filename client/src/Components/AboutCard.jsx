import React from "react";

const AboutCard = () => {
  return (
    <div
      data-aos="zoom-in-left"
      className="flex flex-col lg:flex-row justify-between lg:items-center mb-20 lg:mb-36"
    >
      <span className="uppercase text-3xl lg:text-2xl font-bold gradient-text mb-8 lg:mb-0 rotate-0 lg:-rotate-90">
        What i do
      </span>
      <p className="text-3xl lg:text-7xl gradient-text lg:w-[85%]">
       My applications combine thoughtful design and performance optimization to captivate users and fulfill their intended objectives.
      </p>
    </div>
  );
};

export default AboutCard;