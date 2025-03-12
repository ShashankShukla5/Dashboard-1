import React from "react";
import { WeeklyLeavesChart } from "..";

function WeeklyLeaves() {
  return (
    <div className="w-full sm:w-full lg:w-1/3 bg-white rounded-xl px-5 border ">
      <div className="flex flex-col gap-3">
        <p className="w-full mt-5">Weekly Leave Pattern</p>
        <WeeklyLeavesChart />
      </div>
    </div>
  );
}

export default WeeklyLeaves;
