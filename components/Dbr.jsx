import React from "react";

const Dbr = ({ translations }) => {
  return (
    <div className=" relative">
      <img
        src="/images/Screenshot 2024-12-09 at 08.22.02.png"
        className="w-full h-[60px]  absolute -top-24"
        alt="Screenshot"
      />
      <section className="text-white px-4 lg:px-28 pb-20  overflow-hidden mt-16">
        <div className="flex flex-col lg:flex-row-reverse justify-between gap-12">
          <div className="w-full sm:w-1/2 ">
            <h1 className="text-3xl mb-12">{translations.dbr.title}</h1>
            <p className="text-xl">{translations.dbr.description}</p>
          </div>

          <div className="relative w-full">
            <img
              src="/images/Artboard 14-8.png"
              className="min-w-[200px] w-full  sm:min-w-[653.99px] h-[354px]  max-md:object-cover max-md:rounded-2xl "
              alt="Adventure Image"
            />
            <img
              src="/images/Rectangle 464 (1).png"
              className="absolute -bottom-2 w-full max-lg:hidden z-20 object-contain"
              alt="Rectangle Overlay"
            />
          </div>
        </div>

        <div className="flex  max-lg:hidden sm:flex-row justify-between gap-12 items-end -mt-16 lg:mt-0 relative">
          <img src="/images/arrow.png" className="w-full h-full" alt="Arrow" />
          <img
            src="/images/buggy.png"
            className="w-full h-full"
            alt="Buggy"
          />{" "}
          <img src="/images/samt.png" className="w-full h-full" alt="Samt" />
          <img
            src="/images/Rectangle 464 (1).png"
            className="absolute -bottom-6 w-full z-20 object-contain"
            alt="Rectangle Overlay"
          />
        </div>
      </section>
      <img
        src="/images/Screenshot 2024-12-09 at 08.22.02.png"
        className="w-full h-[60px]  relative"
        alt="Screenshot"
      />
    </div>
  );
};

export default Dbr;
