import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-14 h-14 bg-[#212121] opacity-95 sticky z-50">
      <div className="flex gap-8 items-center text-2xl">
        <div>
          <GiHamburgerMenu />
        </div>
        <Link to="/">
          <div className="flex gap-1 items-center justify-start">
            <BsYoutube className="text-3xl text-red-600" />
            <span className="text-xl font-medium">YouTube</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <form action="">
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0">
            <div className="flex gap-4 items-center pr-5">
              <div>
                <AiOutlineSearch className="text-xl" />
              </div>
              <input
                title="x"
                type="text"
                className="w-96 bg-zinc-900 focus:outline-none border-none"
              />
              <AiOutlineClose className="text-xl cursor-pointer" />
            </div>
            <button
              title="btn"
              className="h-10 w-16 flex items-center justify-center bg-zinc-800"
            >
              <AiOutlineSearch className="text-xl" />
            </button>
          </div>
        </form>
        <div className="text-xl p-3 bg-zinc-900 rounded-full">
          <TiMicrophone />
        </div>
      </div>
      <div className="relative flex items-center justify-end text-xl gap-5 left-8">
        <BsCameraVideo />
        <IoAppsSharp />
        <BsBell />
        <span className="relative bottom-[6px] right-[30px] text-xs bg-red-600 rounded-full px-1">
          +7
        </span>
        <img
          src="..\public\vite.svg"
          alt="img"
          className="w-9 h-9 rounded-full -ml-10"
        />
      </div>
    </div>
  );
}

export default Navbar;
