import React from "react";
import { PendingLeavesTable } from "..";

function PendingLeaves() {
  return (
    <div className="overflow-auto no-scrollbar flex flex-col gap-3 w-full h-1/2 px-3">
      <div className="text-xs font-medium text-[#c3c9cf]">PENDING LEAVES</div>
      <div className="overflow-auto no-scrollbar">
        <PendingLeavesTable />
      </div>
    </div>
  );
}

export default PendingLeaves;
