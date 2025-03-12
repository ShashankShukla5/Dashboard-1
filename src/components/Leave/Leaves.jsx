import React from "react";
import { WeeklyLeaves, MonthlyLeaves, ConsumedLeaves } from "..";

function Leaves() {
  return (
    <div className="flex flex-col sm:flex-col lg:flex-row  px-7 w-full gap-4 mb-7">
        <WeeklyLeaves/>
        <MonthlyLeaves/>
        <ConsumedLeaves/>
    </div>
  );
}

export default Leaves;
