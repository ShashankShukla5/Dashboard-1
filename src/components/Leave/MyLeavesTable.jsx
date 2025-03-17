import React from "react";
import MyLeavesData from "@/globaldata/MyLeavesData";
import { FaRegCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

function MyLeavesTable() {
  return (
    <div className="w-full overflow-auto no-scrollbar h-[25rem]">
      {MyLeavesData.map((data, i) => (
        <div key={i} className="flex gap-2 min-w-full w-70 mb-1">
          <div className="flex w-[80%] gap-2">
            <div className="flex flex-col items-center">
              <div className="mb-1 mt-1">
                {data.status === "Pending" ? (
                  <FaRegCircle className="text-[#dfe0e0] text-xl"/>
                ) : data.status === "Approved" ? (
                  <FaRegCheckCircle className="text-[#8bb5aa] text-xl"/>
                ) : (
                  <RxCrossCircled className="text-[#bc8b7d] text-xl"/>
                )}
              </div>
              <div className="min-h-11 w-[0.125rem] bg-[#e6e6e6] rounded-md"></div>
            </div>
            <div className="flex flex-col">
              <div className="text-[#5b5e5f] font-medium text-sm">
                {data.from}
                {data.to}
              </div>
              <div className="text-[#7f8384] text-[0.75rem]">{data.reason}</div>
            </div>
          </div>
          <div
            className={`flex w-[20%] justify-end items-center text-sm font-semibold ${
              data.status === "Pending"
                ? "text-[#dacf00]"
                : data.status === "Approved"
                ? "text-[#8bb5aa]"
                : "text-[#bc8b7d]"
            }`}
          >
            {data.status}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyLeavesTable;

