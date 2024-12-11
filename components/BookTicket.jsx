import React from "react";

const BookTicket = ({ translations }) => {
  return (
    <div className="relative">
      <img
        src="/images/Screenshot 2024-12-09 at 08.22.02.png"
        className="w-full h-[60px] object-cover relative"
        alt="Screenshot"
      />
      <section className="text-white bg-[#544229cb] px-4 md:px-28 pt-10 md:pt-20 pb-10 md:pb-16 z-20 relative -mt-7">
        <div>
          <h1 className=" text-2xl mb-6"> {translations.tickets.title}</h1>
          <div className=" flex gap-4 flex-wrap">
            <div>
              <img
                src="/images/women.png"
                className={`w-full h-[200px] cursor-pointer md:h-[299px] object-cover rounded-md `}
                alt="Screenshot"
              />
              <div className=" text-xl mt-3">
                {translations.tickets.category.weekly}
              </div>
            </div>
            <div>
              <img
                src="/images/arab.png"
                className={`w-full cursor-pointer h-[200px] md:h-[299px] object-cover rounded-md `}
                alt="Screenshot"
              />
              <div className=" text-xl mt-3">
                {translations.tickets.category.family}
              </div>
            </div>{" "}
            <div>
              <img
                src="/images/man.png"
                className={`w-full cursor-pointer h-[200px] md:h-[299px] object-cover rounded-md `}
                alt="Screenshot"
              />
              <div className=" text-xl mt-3">
                {translations.tickets.category.oneday}
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-28">
          <h1 className=" text-2xl mb-6">Book Your Activities</h1>
          <div className=" flex gap-4 flex-wrap">
            <div>
              <img
                src="/images/buggies.png"
                className={`w-full h-[200px] cursor-pointer md:h-[299px] object-cover rounded-md `}
                alt="Screenshot"
              />
            </div>
            <div>
              <img
                src="/images/dune.png"
                className={`w-full h-[200px] cursor-pointer md:h-[299px] object-cover rounded-md `}
                alt="Screenshot"
              />
            </div>{" "}
            <div>
              <img
                src="/images/archarab.png"
                className={`w-full h-[200px] cursor-pointer md:h-[299px] object-cover rounded-md `}
                alt="Screenshot"
              />
            </div>
            <div>
              <img
                src="/images/archman.png"
                className={`w-full h-[200px] cursor-pointer  md:h-[299px] object-cover rounded-md `}
                alt="Screenshot"
              />
            </div>{" "}
            <div>
              <img
                src="/images/archwomen.png"
                className={`w-full h-[200px] cursor-pointer md:h-[299px] object-cover rounded-md `}
                alt="Screenshot"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookTicket;

