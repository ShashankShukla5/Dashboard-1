import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { LeaveRequestsTable } from "..";

function LeaveRequests() {
  return (
    <div className="bg-white px-5 flex flex-col lg:w-1/2 w-full rounded-2xl pb-5">
      <div className="flex justify-between items-center border-b py-7 mb-5">
        <p>Leave Requests</p>
        <p className="flex items-center gap-2 text-sm text-[#337bce] font-bold hover:cursor-pointer">
          View All
          <MdOutlineKeyboardArrowRight className="text-xl" />
        </p>
      </div>
      <LeaveRequestsTable />
    </div>
  );
}

export default LeaveRequests;
