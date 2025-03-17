import React from "react";
import { MyTeamTable } from "..";

function MyTeam() {
  return (
    <div className="flex flex-col items-start gap-3">
      <p className="font-bold">My Team</p>
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:flex gap-0 xs:gap-3">
        <div className="min-w-21 w-fit flex items-center gap-2">
          <div className="min-h-2 min-w-2 h-2 w-2 rounded-full bg-blue-600"></div>
          <p>
            <span className="text-[#707377] text-[0.5625rem] sm:text-xs">in office</span>
          </p>
        </div>
        <div className="min-w-21 w-fit flex items-center gap-2">
          <div className="min-h-2 min-w-2 h-2 w-2 rounded-full bg-yellow-600"></div>
          <p>
            <span className="text-[#707377] text-[0.5625rem] sm:text-xs">work from home</span>
          </p>
        </div>
        <div className="min-w-21 w-fit flex items-center gap-2">
          <div className="min-h-2 min-w-2 h-2 w-2 rounded-full bg-red-600"></div>
          <p>
            <span className="text-[#707377] text-[0.5625rem] sm:text-xs">on leave</span>
          </p>
        </div>
        <div className="min-w-21 w-fit flex items-center gap-2">
          <div className="min-h-2 min-w-2 h-2 w-2 rounded-full bg-gray-600"></div>
          <p>
            <span className="text-[#707377] text-[0.5625rem] sm:text-xs">absent</span>
          </p>
        </div>
        <div className="min-w-21 w-fit flex items-center gap-2">
          <div className="min-h-2 min-w-2 h-2 w-2 rounded-full bg-gray-300"></div>
          <p>
            <span className="text-[#707377] text-[0.5625rem] sm:text-xs">holiday</span>
          </p>
        </div>
      </div>
      {/*  */}
      <MyTeamTable/>
    </div>
  );
}

export default MyTeam;
