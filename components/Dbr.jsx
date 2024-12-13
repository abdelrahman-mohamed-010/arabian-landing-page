// import React from "react";

// const Dbr = ({ translations }) => {
//   return (
//     <div className=" relative">
//       <img
//         src="/images/zigzag.png"
//         className="w-full h-[60px] object-cover absolute -top-24"
//         alt="Screenshot"
//       />
//       <section className="text-white px-4 lg:px-28 pb-20  overflow-hidden mt-16 ">
//         <div className="flex flex-col lg:flex-row-reverse text-justify justify-between gap-12 ">
//           <div dir="rtl" className={`w-full sm:w-1/2 `}>

//           </div>

//           <div className="relative w-full">
//             <img
//               src="/images/Artboard4.png"
//               className="min-w-[200px] w-full object-cover sm:min-w-[653.99px] h-[384px]  max-md:object-cover max-md:rounded-2xl "
//               alt="Adventure Image"
//             />
//             <img
//               src="/images/Rectangle_464_(1).png"
//               className="absolute -bottom-2 w-full max-lg:hidden z-20 object-contain"
//               alt="Rectangle Overlay"
//             />
//           </div>
//         </div>

//         <div className="flex  max-lg:hidden sm:flex-row justify-between gap-12 items-end -mt-16 lg:mt-12 relative">
//           <img src="/images/arrow.png" className="w-full h-full" alt="Arrow" />
//           <img
//             src="/images/buggy.png"
//             className="w-full h-full"
//             alt="Buggy"
//           />{" "}
//           <img src="/images/samt.png" className="w-full h-full" alt="Samt" />
//           <img
//             src="/images/Rectangle_464_(1).png"
//             className="absolute -bottom-6 w-full z-20 object-contain"
//             alt="Rectangle Overlay"
//           />
//         </div>
//       </section>
//       <img
//         src="/images/zigzag.png"
//         className="w-full h-[60px] object-cover  relative"
//         alt="Screenshot"
//       />
//     </div>
//   );
// };

// export default Dbr;

import React from "react";

const Dbr = ({ translations }) => {
  return (
    <div className=" relative">
      <img
        src="/images/zigzag.png"
        className="w-full h-[60px] object-cover absolute -top-24"
        alt="Screenshot"
      />{" "}
      <section className="text-white px-4 lg:px-28 pb-20 overflow-hidden mt-16">
        <div className="flex flex-col lg:flex-row-reverse justify-between  gap-12 ">
          <div className="w-full sm:w-1/2">
            <h1 dir="rtl" className="text-3xl mb-12 max-md:mb-6 max-md:text-lg">
              {translations.dbr.title}
            </h1>
            <p className="text-xl text-justify max-md:text-base ">
              {translations.dbr.description}
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
        <div className="flex flex-row justify-between items-end  relative max-sm:-mt-7 sm:mt-16 lg:-mt-12 gap-6">
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
          </div>{" "}
          <div className="flex-1 flex flex-col items-center ">
            <img
              src="/images/samt.png"
              className="w-full  h-auto object-contain "
              alt="Samt"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dbr;
