import React from "react";

const Camping = ({ translations }) => {
  return (
    <section className="px-4 md:px-28 2xl:px-40">
      <div className=" text-white  max-sm:gap-3 flex flex-col gap-7 items-center w-full justify-center">
        <h1 className=" lg:text-2xl ">{translations.camp.title}</h1>
        <p className=" max-sm:text-sm">{translations.camp.desc}</p>
      </div>
      <div className="wrapper flex justify-center items-center my-12 max-sm:my-8">
        <div className="grid grid-cols-1  md:grid-cols-3  gap-6">
          <img src="/images/first.png" alt="" className=" w-full" />
          <img src="/images/second.png" alt="" className=" w-full" />
          <img src="/images/third.png" alt="" className=" w-full" />
        </div>
      </div>
      <div className=" w-full flex justify-center mb-12">
        <button
          type="submit"
          className="w-fit rounded-2xl py-2 md:py-3 px-4 md:px-6 bg-black border-2 border-white text-white focus:outline-none text-sm md:text-base"
        >
          {translations.camp.btn}
        </button>
      </div>
    </section>
  );
};

export default Camping;
