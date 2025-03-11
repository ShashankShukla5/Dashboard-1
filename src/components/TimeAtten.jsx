import React from "react";
import { BsClockHistory } from "react-icons/bs";
import { TbClockHour5 } from "react-icons/tb";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";


function TimeAtten() {
  return (
    <div className="w-full sm:w-full lg:w-[40%] grid grid-cols-2 sm:grid-cols-2 rounded-2xl gap-4">
      <div className="bg-white rounded-2xl border">
        <div className=" flex flex-col items-start justify-center h-fit sm:h-max gap-3 px-7 py-5">
          <BsClockHistory className="text-2xl bg-blue-200 rounded-[100%] text-blue-500" />
          <p className="text-[#707377] text-sm sm:text-base text-left">Average hours</p>
          <p className=" text-[#393c45] text-[0.6875rem] sm:text-3xl font-bold">7h 17mins</p>
        </div>
      </div>
      <div className="bg-white rounded-2xl border">
        <div className="flex flex-col items-start justify-center h-fit sm:h-max gap-3 px-7 py-5">
          <CiLogin className="text-3xl bg-blue-200 rounded-[100%] p-1 text-blue-500" />
          <p className="text-[#707377] text-sm sm:text-base text-left">Average check-in</p>
          <p className="text-[#393c45] text-[0.6875rem] sm:text-3xl font-bold">10:33 AM</p>
        </div>
      </div>
      <div className="bg-white rounded-2xl border">
        <div className="flex flex-col items-start justify-center h-fit sm:h-max gap-3 px-7 py-5">
          <TbClockHour5 className="text-2xl bg-green-200 rounded-[100%] text-green-500" />
          <p className="text-[#707377] text-sm sm:text-base text-left">On-time arrival</p>
          <p className="text-[0.6875rem] sm:text-3xl font-bold text-[#62ad94]">98.56%</p>
        </div>
      </div>
      <div className="bg-white rounded-2xl border">
        <div className="flex flex-col items-start justify-center h-fit sm:h-max gap-3 px-7 py-5">
          <CiLogout className="text-3xl bg-[#fae9eb] rounded-[100%] p-1 text-[#985e4e] " />
          <p className="text-[#707377] text-sm sm:text-base text-left">Average check-in</p>
          <p className="text-[#393c45] text-[0.6875rem] sm:text-3xl font-bold">10:33 AM</p>
        </div>
      </div>
    </div>
  );
}

export default TimeAtten;
