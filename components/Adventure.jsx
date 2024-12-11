import React from "react";

const Adventure = ({ translations }) => {
  return (
    <section className="text-white px-4 lg:px-28 pb-20  overflow-hidden">
      <div className="flex justify-center pb-40">
        <div className="w-[441px] h-[198px] max-md:w-[212px] max-md:h-[100px]">
          <img
            src="/images/Dunes-Anouncement-32 1.png"
            className="w-full h-full mt-20"
            alt="Announcement"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between  gap-12">
        <div className="w-full sm:w-1/2">
          <h1 className="text-3xl mb-12">{translations.adventure.title}</h1>
          <p className="text-xl">{translations.adventure.description}</p>
        </div>

        <div className="relative w-full gap-3">
          <img
            src="/images/Artboard 14-8.png"
            className="min-w-[100px] w-full sm:min-w-[653.99px]  h-[354px]"
            alt="Adventure Image"
          />
          <img
            src="/images/Rectangle 464 (1).png"
            className="absolute -bottom-6 mr-1 w-full z-20 object-contain max-md:hidden"
            alt="Rectangle Overlay"
          />
        </div>
      </div>

      <div className="flex max-lg:hidden sm:flex-row justify-between gap-12 items-end -mt-16 lg:mt-0  relative">
        <img src="/images/samt.png" className="w-full h-full" alt="Samt" />
        <img src="/images/arrow.png" className="w-full h-full" alt="Arrow" />
        <img src="/images/buggy.png" className="w-full h-full" alt="Buggy" />
        <img
          src="/images/Rectangle 464 (1).png"
          className="absolute -bottom-6 w-full z-20 object-contain"
          alt="Rectangle Overlay"
        />
      </div>
    </section>
  );
};

export default Adventure;
