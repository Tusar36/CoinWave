import React from "react";
import millify from "millify";
export default function Stats(props) {
  return (
    <>
      <div className="m-3">
        <h1 className=" text-3xl font-bold">Global Stats</h1>
        <div className="grid w-[100%] h-[20.5rem] grid-cols-2 gap-4">
          <div className="w-[100%] h-15 flex justify-center flex-col  ">
            <h1 className="text-xl text-gray-500">Total Coins</h1>
            <p className=" text-3xl  ">{millify(props.coins)}</p>
          </div>

          <div className="w-[100%] h-15 flex justify-center flex-col  ">
            <h1 className="text-xl text-gray-500 ">Total Markets</h1>
            <p className=" text-3xl ">{millify(props.market)}</p>
          </div>

          <div className="w-[100%] h-15  flex justify-center flex-col  ">
            <h1 className="text-xl text-gray-500 ">Total Exchanges</h1>
            <p className=" text-3xl ">{millify(props.exchange)}</p>
          </div>

          <div className="w-[100%] h-15 flex justify-center flex-col  ">
            <h1 className="text-xl text-gray-500 ">Total Market Cap</h1>
            <p className=" text-3xl ">${millify(props.cap)}</p>
          </div>
        </div>
      </div>
    </>
  );
}
