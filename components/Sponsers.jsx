import React from "react";

const Sponsers = () => {
  return (
    <section className=" text-white px-4 lg:px-28  mt-6 pb-12 border-b border-[#FFFFFF]">
      <div className=" justify-center items-center w-full flex flex-col ">
        <img src="/images/sponser.png" className="  min-w-[370px] h-full" />
        <img
          src="/images/cuted.png"
          className=" w-[210px] max-md:w-[120px] mt-4 h-full"
        />
      </div>
    </section>
  );
};

export default Sponsers;
