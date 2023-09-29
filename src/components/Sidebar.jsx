import React from "react";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <>
      <nav className="sticky top-0 h-screen w-64 bg-blue-950">
        <div className="w-[100%] h-[138px] flex items-center justify-center text-white text-3xl font-mono">
          CoinWave
        </div>
        <NavLink
          className="text-white text-center h-14 hover:bg-blue-600 
          hover:cursor-pointer flex justify-center items-center"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="text-white text-center h-14 hover:bg-blue-600 
          hover:cursor-pointer flex justify-center items-center"
          to="/crypto"
        >
          Cryptos
        </NavLink>
        <NavLink
          className="text-white text-center h-14 hover:bg-blue-600 
          hover:cursor-pointer flex justify-center items-center"
          to="/news"
        >
          News
        </NavLink>

        <NavLink
          className="text-white text-center h-14 hover:bg-blue-600 
          hover:cursor-pointer flex justify-center items-center"
          to="/about"
        >
          About
        </NavLink>
      </nav>
    </>
  );
}
