import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  let [style, setStyle] = useState("hidden");
  let [show, setShow] = useState(false);
  let toggle = () => {
    if (!show) {
      setStyle("block");
      setShow(true);
    } else {
      setShow(false);
      setStyle("hidden");
    }
  };
  return (
    <div className=" sticky top-20 z-10">
      <nav className="w-screen h-12 bg-blue-950 flex ">
        <button className="w-[50px] bg-white m-1" onClick={toggle}>
          &#9776;
        </button>
        <div className="w-[100%] h-[100%] flex items-center justify-center text-white text-2xl font-mono">
          CoinWave
        </div>
      </nav>

      <div className={` absolute z-999 ${style}`}>
        <div className="w-[150px] h-[160px] bg-blue-950 sticky top-0">
          <NavLink
            className="text-white text-center  h-10 hover:bg-blue-600 
          hover:cursor-pointer flex justify-center items-center"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="text-white text-center  h-10 hover:bg-blue-600 
          hover:cursor-pointer flex justify-center items-center"
            to="/crypto"
          >
            Cryptos
          </NavLink>
          <NavLink
            className="text-white text-center  h-10 hover:bg-blue-600 
          hover:cursor-pointer flex justify-center items-center"
            to="/news"
          >
            News
          </NavLink>
          
          <NavLink
            className="text-white text-center  h-10 hover:bg-blue-600 
          hover:cursor-pointer flex justify-center items-center"
            to="/about"
          >
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
}
