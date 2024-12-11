import React from "react";

const Location = ({ translations }) => {
  return (
    <section className="text-white px-4 md:px-28 pt-4">
      <p className="text-sm md:text-[16px] mr-0 md:mr-40  ">
        {translations.address.description}
      </p>
      <div className="flex flex-col lg:flex-row gap-2 mt-6 md:mt-12 max-lg:items-center max-md:gap-6">
        <img
          src="/images/Screenshot 2024-12-09 at 15.01.24 1.png"
          className="w-[80%] max-md:mt-4 md:w-[555px] h-auto md:h-[194px] z-20 object-contain"
        />{" "}
        <img
          src="/images/Group 2.png"
          className="w-[80%] md:w-[279px] h-[160px] md:h-[194px] z-20 object-contain"
        />
      </div>
    </section>
  );
};

export default Location;
