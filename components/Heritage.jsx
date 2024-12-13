import React from "react";

const Heritage = ({ translations }) => {
  return (
    <div className="relative text-justify">
      <img
        src="/images/print.png"
        className="w-full h-[60px] object-cover relative z-50"
        alt="Screenshot"
      />
      <section className="text-white bg-[#544229cb] px-4 md:px-28 pt-10 md:pt-20 pb-10 md:pb-16 z-20 relative -mt-7">
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-20">
          <div className="w-full relative order-2 md:order-1 max-md:hidden">
            <img
              src="/images/Artboard_20-8.png"
              className="w-full relative"
              alt="Screenshot"
            />
            <img
              src="/images/Rectangle_464_(1).png"
              className="absolute bottom-0 rounded-xl w-full z-20 object-contain md:max-w-none max-w-40 max-md:hidden"
            />
          </div>
          <div className="text-[#FFFFFF] flex flex-col justify-end items-start w-full order-1 md:order-2">
            <h1 className="text-2xl md:text-3xl mb-4 md:mb-6 t w-full max-sm:text-xl">
              {translations.heritage.title}
            </h1>
            <p className="mb-6 md:mb-12 max-sm:text-sm">
              {translations.heritage.description1}
            </p>
            <div className=" max-md:flex w-full  max-md:flex-row-reverse  max-md:gap-8 ">
              <div className="w-full relative  max-md:mt-24">
                <img
                  src="/images/hFlag_3_1.png"
                  className="w-full relative"
                  alt="Screenshot"
                />
                <img
                  src="/images/Rectangle_464_(1).png"
                  className="absolute bottom-0 rounded-xl w-full z-20 object-contain md:max-w-none max-sm:hidden max-w-40 max-md:hidden"
                />
              </div>
              <div className="w-full relative order-2 md:order-1 md:hidden">
                <img
                  src="/images/Artboard_20-8.png"
                  className="w-full relative"
                  alt="Screenshot"
                />
                <img
                  src="/images/Rectangle_464_(1).png"
                  className="absolute bottom-0 rounded-xl w-full z-20 object-contain md:max-w-none max-w-40 max-md:hidden"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse  items-start gap-6 md:gap-20 mt-12   md:mt-32">
          <div className="w-full relative order-2 md:order-1 max-md:hidden">
            <img
              src="/images/dessert.png"
              className="w-full relative"
              alt="Screenshot"
            />
            <img
              src="/images/Rectangle_464_(1).png"
              className="absolute bottom-0 rounded-xl w-full z-20 object-contain md:max-w-none max-w-40 max-md:hidden"
            />
          </div>
          <div className="text-[#FFFFFF] flex flex-col justify-end items-start w-full order-1 md:order-2">
            <h1 className="text-2xl md:text-3xl mb-4 md:mb-6 t w-full max-sm:text-xl">
              {translations.heritage.title2}
            </h1>
            <p className="mb-6 md:mb-12 max-sm:text-sm">
              {translations.heritage.description2}
            </p>
            <div className=" max-md:flex  max-md:flex-row  max-md:gap-8 ">
              <div className="w-full relative  max-md:mt-24">
                <img
                  src="/images/hFlag.png"
                  className="w-full relative  max-sm:h-36 max-md:h-44  lg:h-96"
                  alt="Screenshot"
                />
                <img
                  src="/images/Rectangle_464_(1).png"
                  className="absolute bottom-0 rounded-xl w-full z-20 object-contain md:max-w-none max-sm:hidden max-w-40 max-md:hidden"
                />
              </div>
              <div className="w-full relative order-2 md:order-1 md:hidden">
                <img
                  src="/images/dessert.png"
                  className="w-full relative"
                  alt="Screenshot"
                />
                <img
                  src="/images/Rectangle_464_(1).png"
                  className="absolute bottom-0 rounded-xl w-full z-20 object-contain md:max-w-none  max-md:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heritage;
