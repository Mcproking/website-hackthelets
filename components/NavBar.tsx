"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


export const Navbar = () => {


  return (
    <div className="z-50 fixed flex justify-center w-full text-white font-bold">
      <div className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-[500px] mx-auto">
        <ul className="flex flex-row p-2 space-x-8">
          
          {/* map NavLink */}
        </ul>
      </div>

      {/* medium screen will show this */}
      <div
        className="md:hidden absolute top-5 right-14 border rounded z-50 text-white/70 border-white/70 p-2"
      >
        
      </div>
      <div
        className={`fixed left-0 top-0 w-full h-full bg-black/90 transform transition-transform duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"}`}
      >
        
        <ul className="flex flex-col items-center justify-center space-y-8 h-full">
          
        </ul>
      </div>
    </div>
  );
};
