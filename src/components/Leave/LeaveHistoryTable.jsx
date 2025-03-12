import React from "react";
import PendingLeavesData from "@/globaldata/PendingLeavesData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function LeaveHistoryTable() {
  const leaves = PendingLeavesData.filter((each)=>each.status !== "Pending")
  return (
    <div className="h-full min-w-full w-110">
      {leaves.map((member, i) => (
        <div key={i} className=" flex items-center justify-between gap-2 h-1/2">
          <div className="flex items-center w-[35%] gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-left text-sm text-[#5b5e6c] font-medium ">
                {member.name}
              </p>
              <span className="text-[0.625rem] text-[#7e8284] text-left">
                {member.role}
              </span>
            </div>
          </div>
          <div className="flex flex-col w-[30%]">
            <div className="text-sm text-[#5b5e6c] font-medium">
              {member.from}
              {member.to}
            </div>
            <div className="text-xs text-[#7e8284]">{member.reason}</div>
          </div>
          <div className="w-[20%] text-[#5b5e6c] font-medium">
            {member.noOfDays} day
          </div>
          <div
            className={`w-[15%] text-sm text-right ${
              member.status === "Pending"
                ? "text-[#dacf00]"
                : member.status === "Approved"
                ? "text-[#8bb5aa]"
                : "text-[#bc8b7d]"
            } font-semibold hover:cursor-pointer`}
          >
            {member.status}
          </div>
        </div>
      ))}
    </div>
  );
}

export default LeaveHistoryTable;
