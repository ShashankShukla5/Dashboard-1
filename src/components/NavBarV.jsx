import React from "react";
import { PiSpeedometerThin } from "react-icons/pi";
import { BiBuildings } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { FaCarSide } from "react-icons/fa";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { TiMessages } from "react-icons/ti";
import { TfiHelpAlt } from "react-icons/tfi";
import { LuSettings2 } from "react-icons/lu";

function NavBarV() {
  return (
    <div className="hidden sm:block sm:h-full sm:overflow-y-auto no-scrollbar fixed flex flex-col absolute h-full w-18  border-r items-center gap-14 z-10">
      <div className="flex flex-col items-center">
        <img className="mt-1.5 max-w-[70%] h-auto" src="src/assets/logo.png" alt="Logo" />
        <div className="flex flex-col items-center hover:cursor-pointer px-3 py-3 rounded-md hover:bg-[#d8e9f7] hover:text-[#5f7fb6]">
          <PiSpeedometerThin className="text-2xl text-[#707377] hover:text-[#5f7fb6]" />
          <p className="text-[0.625rem] text-[#707377] hover:text-[#5f7fb6]">
            Dashboard
          </p>
        </div>
        <div className="flex flex-col items-center hover:cursor-pointer px-5 py-3 rounded-md hover:bg-[#d8e9f7] hover:text-[#5f7fb6]">
          <BiBuildings className="text-2xl text-[#707377] hover:text-[#5f7fb6] " />
          <p className="text-[0.625rem] hover:text-[#5f7fb6] text-[#707377]">
            Org.
          </p>
        </div>
        <div className="flex flex-col items-center hover:cursor-pointer px-3 py-3 rounded-md hover:bg-[#d8e9f7] hover:text-[#5f7fb6]">
          <SlCalender className="text-2xl text-[#707377] hover:text-[#5f7fb6]" />
          <p className="text-[0.625rem] text-[#707377] hover:text-[#5f7fb6]">
            Calender
          </p>
        </div>
        <div className="flex flex-col items-center hover:cursor-pointer px-3 py-3 rounded-md hover:bg-[#d8e9f7] hover:text-[#5f7fb6]">
          <FaCarSide className="text-2xl text-[#707377] hover:text-[#5f7fb6]" />
          <p className="text-[0.625rem] text-[#707377] hover:text-[#5f7fb6]">
            Parkings
          </p>
        </div>
        <div className="flex flex-col items-center hover:cursor-pointer px-3 py-3 rounded-md hover:bg-[#d8e9f7] hover:text-[#5f7fb6]">
          <LuBriefcaseBusiness className="text-2xl text-[#707377] hover:text-[#5f7fb6]" />
          <p className="text-[0.625rem] text-[#707377] hover:text-[#5f7fb6]">
            Recruit
          </p>
        </div>
        <div className="flex flex-col items-center hover:cursor-pointer px-3 py-3 rounded-md hover:bg-[#d8e9f7] hover:text-[#5f7fb6]">
          <TiMessages className="text-2xl text-[#707377] hover:text-[#5f7fb6]" />
          <p className="text-[0.625rem] text-[#707377] hover:text-[#5f7fb6]">
            Messages
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center hover:cursor-pointer px-3 py-3 rounded-md hover:bg-[#d8e9f7] hover:text-[#5f7fb6]">
          <TfiHelpAlt className="text-2xl text-[#707377] hover:text-[#5f7fb6]" />
          <p className="text-[0.625rem] text-[#707377] hover:text-[#5f7fb6]">
            Help
          </p>
        </div>
        <div className="flex flex-col items-center hover:cursor-pointer px-3 py-3 rounded-md hover:bg-[#d8e9f7] hover:text-[#5f7fb6]">
          <LuSettings2 className="text-2xl text-[#707377] hover:text-[#5f7fb6]" />
          <p className="text-[0.625rem] text-[#707377] hover:text-[#5f7fb6]">
            Settings
          </p>
        </div>
      </div>
    </div>
  );
}

export default NavBarV;
