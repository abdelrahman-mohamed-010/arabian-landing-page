import React from 'react'

const Camping = () => {
  return (
    <section className="px-4 md:px-28 2xl:px-40">
      <div className=" text-white  max-sm:gap-3 flex flex-col gap-7 items-center w-full justify-center">
        <h1 className=" lg:text-2xl ">Camping & Domes</h1>
        <p className=' max-sm:text-sm'>
          Listen to the hushed sounds of the dunes in the Dome camp  area, as
          you spend a day in nature’s calm embrace, and end your night under the
          desert’s star-studded skies.
        </p>
      </div>
      <div className="wrapper flex justify-center items-center my-12 max-sm:my-8">
        <div className="grid grid-cols-1  md:grid-cols-3  gap-6">
          <img src="/images/first.png" alt="" className=' w-full' />
          <img src="/images/second.png" alt="" className=' w-full' />
          <img src="/images/third.png" alt="" className=' w-full' />
        </div>
      </div>
    </section>
  );
}

export default Camping
