import React from "react";

const Heritage = ({ translations }) => {
  return (
    <div className="relative">
      <img
        src="/images/Screenshot 2024-12-09 at 08.22.02.png"
        className="w-full h-[60px] object-cover relative"
        alt="Screenshot"
      />
      <section className="text-white bg-[#544229cb] px-4 md:px-28 pt-10 md:pt-20 pb-10 md:pb-16 z-20 relative -mt-7">
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-20">
          <div className="w-full relative order-2 md:order-1">
            <img
              src="/images/Artboard 20-8.png"
              className="w-full relative"
              alt="Screenshot"
            />
            <img
              src="/images/Rectangle 464 (1).png"
              className="absolute bottom-0 rounded-xl w-full z-20 object-contain md:max-w-none max-w-40"
            />
          </div>
          <div className="text-[#FFFFFF] flex flex-col justify-end items-end w-full order-1 md:order-2">
            <h1 className="text-2xl md:text-3xl mb-4 md:mb-6 text-right w-full">
              {translations.heritage.title}
            </h1>
            <p className="mb-6 md:mb-12 text-right">
              {translations.heritage.description1}
            </p>
            <div className="w-full relative">
              <img
                src="/images/hFlag 3 1.png"
                className="w-full relative"
                alt="Screenshot"
              />
              <img
                src="/images/Rectangle 464 (1).png"
                className="absolute bottom-0 rounded-xl w-full z-20 object-contain md:max-w-none max-w-40"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-20 mt-10 md:mt-36">
          <div className="text-[#FFFFFF] flex flex-col justify-end w-full order-2 md:order-1">
            <h1 className="text-2xl md:text-3xl mb-4 md:mb-6 text-right w-full">
              {translations.heritage.title2}
            </h1>
            <p className="mb-6 md:mb-12 text-right">
              {translations.heritage.description2}
            </p>
            <div className="w-full relative">
              <img
                src="/images/hFlag 2 1 (1).png"
                className="w-full relative object-cover"
                alt="Screenshot"
              />
              <img
                src="/images/Rectangle 464 (1).png"
                className="absolute bottom-0 rounded-xl w-full z-20 object-contain md:max-w-none max-w-40"
              />
            </div>
          </div>
          <div className="w-full relative order-1 md:order-2">
            <img
              src="/images/dessert.png"
              className="w-full relative"
              alt="Screenshot"
            />
            <img
              src="/images/Rectangle 464 (1).png"
              className="absolute bottom-0 rounded-xl w-full z-20 object-contain md:max-w-none max-w-40"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heritage;
