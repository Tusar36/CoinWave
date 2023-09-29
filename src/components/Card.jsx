import millify from "millify";
import React from "react";

export default function Card(props) {
  let name = "";
  if (props.name.length <= 10) {
    name = props.name;
  } else {
    name = props.uid;
  }
  return (
    <>
      <div className="m-3 w-[290px]  p-4 px-4  rounded-md border-opacity-100 border-1 shadow-lg shadow-black opacity-100">
        <div className="flex w-[100%] h-[50px]">
          <p className=" min-w-[80%] h-[100%] flex items-center text-[25px]">
            {props.rank}. {name}
          </p>
          <img src={props.url} alt="image" className="h-[50px] w-[15%]" />
        </div>
        <div className="w-[100%]">
          <p className="flex w-[100%] my-3">
            Market cap <p className=" ml-10 text-gray-600">{millify(props.cap)}</p>
          </p>
          <p className="flex w-[100%] my-3">
            Change <p className=" ml-10 text-gray-600">{millify(props.change)}%</p>
          </p>
          <p className="flex w-[100% my-3">
            Price{" "}
            <p className=" ml-10 text-gray-600">
              ${millify(props.price)}
            </p>
          </p>
          <p className="flex w-[100%] my-3">
            BTC Price{" "}
            <p className=" ml-10 text-gray-600">
              {props.btc.slice(0, props.btc.indexOf(".") + 7)}
            </p>
          </p>
        </div>
      </div>
    </>
  );
}
