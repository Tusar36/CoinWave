import React from "react";

export default function NewsCard(props) {
  return (
    <>
    <div className="m-3 w-[300px]  p-4 px-4  rounded-md border-opacity-100 border-1 shadow-lg shadow-black opacity-100">
      <img src={props.image} alt="" />
      <div className="text-[18px] font-bold my-3">{props.title}</div>
      <div className="text-[15px] my-3">{props.description.slice(0,200)}</div>
      <a href={props.url} target="_blank"><button type="button" class="btn bg-blue-700 text-white hover:bg-blue-900 text-[18px]">View More</button></a>
    </div>
    </>
  );
}
