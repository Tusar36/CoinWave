import React from "react";
import loading from "./loading.gif";
export default function Loading() {
  return (
    <div className="w-[100%] h-screen flex justify-center items-center">
      <div className="w-[100%] h-[100px]">
      <img src={loading} alt="" className="h-[100%] m-auto" />
      </div>
      
    </div>
  );
}
