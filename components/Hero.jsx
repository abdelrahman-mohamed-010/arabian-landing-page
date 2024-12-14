import Link from "next/link";
import React from "react";

const Hero = ({ lang }) => {
  return (
    <section className="text-white relative ">
      <img
        src="/images/Dunes-Anouncement_Thumbnail12.png"
        className="w-full h-auto z-10"
      />

      <Link
        href={`/lang/${lang == "en" ? "ar" : "en"}`}
        className={`absolute top-12 sm:top-20 md:top-32 lg:top-32 
              ${
                lang === "ar"
                  ? "right-4 2xl:right-44 sm:right-6"
                  : "left-4 2xl:left-44 sm:left-6"
              } 
              z-30 
              text-white font-semibold bg-black rounded-lg 
              px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 
              text-xs sm:text-sm md:text-base 
              w-fit cursor-pointer 
              transition-all duration-300 
              hover:bg-gray-900 
              active:scale-95`}
      >
        {lang == "en" ? "العربيه" : "English"}
      </Link>

      <img
        // src="/images/Artboard12.png"
        src={`${
          lang == "en" ? "/images/Artboard12.png" : "/images/arLogo.png"
        } `}
        className={`absolute ${
          lang === "ar" ? " left-0 2xl:left-36" : " right-0 2xl:right-36 "
        } top-0   w-80 max-sm:w-28 h-auto z-20 object-contain max-md:w-40`}
      />
      <img
        src="/images/Artboard6@4x-8.png"
        className={`absolute top-0 ${
          lang === "ar" ? " right-0 2xl:right-36" : " left-0 2xl:left-36"
        } w-80 max-sm:w-28 h-auto z-20 object-contain max-md:w-40 `}
      />

      <img
        src="/images/Rectangle_464_(1).png"
        className="absolute bottom-0 w-full  z-20 object-contain "
      />
    </section>
  );
};

export default Hero;
