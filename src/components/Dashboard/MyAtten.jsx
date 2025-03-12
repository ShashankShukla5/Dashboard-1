import React from "react";
import globalData from "@/globaldata/globalData";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MyAttenChart } from "..";

function MyAtten() {
  return (
    <div className="w-full sm:w-full lg:w-[30%] bg-white rounded-2xl border">
      <div className="flex flex-col gap-3 px-5">
        <div className="flex justify-between items-center border-b py-7 mb-5">
          <p>My Attendance</p>
          <p className="text-sm text-[#337bce] font-bold hover:cursor-pointer">
            View Stats
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-base justify-between">
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-green-600"></div>
              <p>
                {globalData.onTime}{" "}
                <span className="text-[#707377] text-sm">on time</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-600"></div>
              <p>
                {globalData.workFromHome}{" "}
                <span className="text-[#707377] text-sm">work from home</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-red-600"></div>
              <p>
                {globalData.lateAtten}{" "}
                <span className="text-[#707377] text-sm">late attendance</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-gray-600"></div>
              <p>
                {globalData.absent}{" "}
                <span className="text-[#707377] text-sm">absent</span>
              </p>
            </div>
          </div>
          <div>
            <MyAttenChart />
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <IoMdCheckboxOutline className="text-2xl bg-green-200 rounded text-green-600" />
          <p className="text-[0.75rem] sm:text-base mb-7 sm:mb-base">Better than 91.3% employee</p>
        </div>
      </div>
    </div>
  );
}

export default MyAtten;
