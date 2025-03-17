import React from "react";

import { IoIosArrowDown } from "react-icons/io";
import WorkHistoryTable from "./WorkHistoryTable";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function WorkingHistory() {
  return (
    <div className="flex flex-col items-start gap-3">
      <div className="flex flex-col xs:flex-row gap-3 xs:gap-0 items-start xs:items-end sm:items-center w-full justify-between">
        <div className="flex flex-col items-start gap-3">
          <p className="font-bold">Working History</p>
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:flex gap-2 xs:gap-3">
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="min-h-2 min-w-2 h-2 w-2 rounded-full bg-green-600"></div>
              <p>
                <span className="text-[#707377] text-[0.5625rem] sm:text-xs">
                  meeting criteria
                </span>
              </p>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="min-h-2 min-w-2 h-2 w-2  rounded-full bg-yellow-600"></div>
              <p>
                <span className="text-[#707377] text-[0.5625rem] sm:text-xs">
                  criteria unmet
                </span>
              </p>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="min-h-2 min-w-2 h-2 w-2  rounded-full bg-red-600"></div>
              <p>
                <span className="text-[#707377] text-[0.5625rem] sm:text-xs">
                  action needed
                </span>
              </p>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="min-h-2 min-w-2 h-2 w-2 rounded-full bg-orange-400"></div>
              <p>
                <span className="text-[#707377] text-[0.5625rem] sm:text-xs">
                  absent
                </span>
              </p>
            </div>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center justify-between px-3 border rounded-md px-2 gap-7 h-fit py-3 text-[#525554] text-sm">
            Show All
            <IoIosArrowDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/*  */}
      {/* <MyTeamTable/> */}
      <WorkHistoryTable />
    </div>
  );
}

export default WorkingHistory;
