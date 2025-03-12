import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardCommandKey } from "react-icons/md";
import { TbMail } from "react-icons/tb";
import { FiBell } from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoIosArrowDown } from "react-icons/io";
import globalData from "@/globaldata/globalData";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

function NavBar() {
  const [toggle, setToggle] = useState(false);
  const searchRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "f") {
        event.preventDefault();
        searchRef.current?.focus(); 
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    [];
  });

  function toggleMenu() { 
    setToggle(!toggle);
  }

  return (
    <div
      className={`flex px-3 py-2 items-center justify-between h-14 w-full sm:w-[calc(100vw-5.5rem)] border-b z-0 sm:ml-18 ${toggle ? "h-fit" : ""} ${toggle ? "items-start" : ""}`}
    >
      <img
        className={`block sm:hidden mt-0 sm:mt-1.5 w-auto max-h-[100%] ${toggle ? "hidden" : ""}`}
        src="src/assets/logo.png"
        alt="Logo"
      />
      <div className="hidden sm:flex items-center w-fit h-14 sm:gap-0 md:gap-7">
        <Button onClick={()=>navigate("/")} className="bg-white shadow-none text-black h-11 sm:px-2 md:px-5 cursor-pointer hover:bg-[#f5f9fc] hover:text-[#5f7fb6]">
          Dashboard
        </Button>
        <Button onClick={()=>navigate("/leave")} className="bg-white shadow-none text-black h-11 px-5 cursor-pointer hover:bg-[#f5f9fc] hover:text-[#5f7fb6]">
          Leave
        </Button>
        <Button className="bg-white shadow-none text-black h-11 px-5 cursor-pointer hover:bg-[#f5f9fc] hover:text-[#5f7fb6]">
          Attendence
        </Button>
        <Button className="bg-white shadow-none text-black h-11 px-5 cursor-pointer hover:bg-[#f5f9fc] hover:text-[#5f7fb6]">
          Performance
        </Button>
      </div>
      <div
        className={`flex items-center w-fit gap-5 ${toggle ? "w-full" : ""}`}
      >
        {/* Search box---------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div
          className={`flex mx-5 items-center justify-between bg-[#f8f8f8] rounded-xl px-2 ${toggle ? "hidden" : ""}`}
        >
          <CiSearch className="text-[#bac2c7] text-4xl" />
          <Input
            ref={searchRef}
            placeholder="Search anything..."
            className="w-44 sm:w-24 lg:w-44 shadow-none bg-[#f8f8f8] h-11 border-none text-[#585858] placeholder:text-[1.0625rem] placeholder:text-[#c6c7c7]"
          />
          <div className={`hidden sm:flex gap-2 items-center mr-4 `}>
            <MdKeyboardCommandKey className="text-[#bac2c7]" />
            <p className="text-[#bac2c7]">F</p>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="hidden lg:block relative">
          <div
            className={`absolute h-3 w-3 right-0 border-2 border-white rounded-full bg-red-600 ${
              globalData.mail ? "" : "hidden"
            }`}
          ></div>
          <TbMail className="text-2xl text-[#1c222c] hover:cursor-pointer" />
        </div>
        <div className="hidden lg:block relative">
          <div
            className={`absolute h-3 w-3 right-0 border-2 border-white rounded-full bg-red-600 ${
              globalData.notofication ? "" : "hidden"
            }`}
          ></div>
          <FiBell className="text-2xl text-[#1c222c] hover:cursor-pointer" />
        </div>
        <AiOutlineMenu
          onClick={toggleMenu}
          className={`block sm:hidden hover:cursor-pointer ${toggle ? "hidden" : ""}`}
        />
        {/* ---------------------------------- toggle box --------------------- */}
        <div
          className={`flex flex-col justify-between w-full ${toggle ? "" : "hidden"}`}
        >
          <div className="flex justify-between w-full">
            <img
              className={`block sm:hidden mt-0 sm:mt-1.5 w-auto max-h-[100%]`}
              src="src/assets/logo.png"
              alt="Logo"
            />
            <RxCross2
              onClick={toggleMenu}
              className={`text-xl mt-4 hover:cursor-pointer ${toggle ? "" : "hidden"}`}
            />
          </div>
          <div className="w-full mb-4 flex flex-col items-end gap-3 mt-4">
            <div onClick={()=>navigate("/")} className="text-[#111f31] hover:cursor-pointer">Dashboard</div>
            <div onClick={()=>navigate("/leave")} className="text-[#111f31] hover:cursor-pointer">Leave</div>
            <div className="text-[#111f31] hover:cursor-pointer">
              Attendance
            </div>
            <div className="text-[#111f31] hover:cursor-pointer">
              Performance
            </div>
          </div>
        </div>
        {/* -------------------------------------------------------------------- */}
        <div className="hidden lg:flex items-center gap-1 text-[#787c81] hover:cursor-pointer">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
