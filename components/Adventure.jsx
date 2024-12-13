import React from "react";

const Adventure = ({ translations }) => {
  return (
    <section className="text-white px-4 lg:px-28 pb-20 overflow-hidden 2xl:px-40">
      {/* Previous sections remain the same */}
      <div className="flex justify-center pb-40">
        <div className="w-[441px] h-[198px] max-md:w-[212px] max-md:h-[100px]">
          <img
            src="/images/Dunes-Anouncement-323.png"
            className="w-full h-full mt-20"
            alt="Announcement"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between  gap-12 max-sm:items-end">
        <div className="w-full sm:w-1/2">
          <h1 className="text-3xl mb-12 max-md:mb-6 max-md:text-lg max-sm:font-semibold max-sm:text-xl">
            {translations.adventure.title}
          </h1>
          <p className="text-base text-justify max-md:text-base ">
            {translations.adventure.description}
          </p>
        </div>

        <div className="relative w-full max-sm:w-[60%] gap-3  ">
          <img
            src="/images/Artboard4.png"
            className="min-w-[100px] w-full sm:min-w-[653.99px]  h-[394px] max-md:h-full  max-md:rounded-3xl"
            alt="Adventure Image"
          />
          <img
            src="/images/Rectangle_464_(1).png"
            className="absolute -bottom-6 mr-1 w-full z-20 object-contain max-md:hidden"
            alt="Rectangle Overlay"
          />
        </div>
      </div>
      {/* Bottom Images */}
      <div className="flex flex-row justify-between items-end  gap-6 relative max-sm:-mt-7 sm:mt-16 lg:-mt-12">
        <div className="flex-1 flex flex-col items-center ">
          <img
            src="/images/samt.png"
            className="w-full  h-auto object-contain "
            alt="Samt"
          />
        </div>
        <div className="flex-1 flex flex-col items-center">
          <img
            src="/images/arrow.png"
            className="w-full  h-auto object-contain max-md:rounded-3xl"
            alt="Arrow"
          />
          <img
            src="/images/Rectangle_464_(1).png"
            className="absolute -bottom-6 w-full z-20 object-contain"
            alt="Rectangle Overlay"
          />
        </div>
        <div className="flex-1 flex flex-col items-center">
          <img
            src="/images/buggy.png"
            className="w-full h-auto object-contain max-md:rounded-3xl"
            alt="Buggy"
          />{" "}
          <img
            src="/images/Rectangle_464_(1).png"
            className="absolute -bottom-6 w-full z-20 object-contain"
            alt="Rectangle Overlay"
          />
        </div>
      </div>
    </section>
  );
};

export default Adventure;
