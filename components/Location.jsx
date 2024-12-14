"use client";
import { Clock3 } from "lucide-react";

const Location = ({ translations }) => {
  const schedule = {
    date: "15 December",
    time: "9 AM to 3 AM",
  };

  return (
    <section className="text-white px-4 md:px-28 2xl:px-40 pt-4">
      <p className=" text-justify max-sm:text-sm ">
        {translations.address.description}
      </p>
      <div className="flex flex-col lg:flex-row gap-7 mt-6 md:mt-12 max-lg:items-center max-md:gap-6">
        <a
          href="/"
          className="w-[80%] max-md:mt-4 md:w-[555px] h-auto md:h-[194px] z-20 rounded-2xl overflow-hidden"
        >
          <img src="/images/map.png" alt="" />
        </a>
        <div
          dir="ltr"
          className="w-[80%] md:w-[279px] h-[165px] md:h-[194px] z-20 p-5 pl-7 bg-[#242424] rounded-2xl max-sm:w-[82.5%]"
        >
          <Clock3 className="w-12 h-12 mb-6 max-sm:w-8 max-sm:h-8" />
          <span className="block text-xl mb-1 max-sm:text-base">
            {schedule.date} -{" "}
          </span>
          <span className="block text-xl max-sm:text-base">
            {schedule.time}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Location;
