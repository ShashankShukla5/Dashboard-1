import React from "react";
import { MyTeam, WorkingHistory } from ".";

function AttendanceData() {
  return (
    <div className="flex flex-col sm:flex-col lg:flex-row gap-4 mt-7 mx-7 pb-5">
      <div className="bg-white w-full sm:w-full lg:w-1/2 rounded-md px-5 py-5 border">
        <MyTeam />
      </div>
      <div className="bg-white w-full sm:w-full lg:w-1/2 rounded-md px-5 py-5 border">
        <WorkingHistory />
      </div>
    </div>
  );
}

export default AttendanceData;
