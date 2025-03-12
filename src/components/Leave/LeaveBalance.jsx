import React from "react";
import leaveGlobalData from "@/globaldata/leaveGlobalData";

const LeaveBalance = () => {
  const leaves = leaveGlobalData.leaves;

  return (
    <div className="w-full px-2 space-y-1">
      {leaves.map((leave, index) => {
        const percentage = leave.total ? (leave.used / leave.total) * 100 : 0;
        const isDisabled = leave.used === null;

        return (
          <div key={index} className="flex items-center space-x-3">
            <span
              className={`w-8 text-sm font-bold ${
                isDisabled ? "text-gray-400" : "text-[#6f7172]"
              }`}
            >
              {leave.type}
            </span>

            <div className="flex-1 bg-gray-200 h-2 rounded-full relative overflow-hidden">
              {!isDisabled && (
                <div
                  className="h-full bg-[#75cae6] rounded-full transition-all"
                  style={{ width: `${percentage}%` }}
                ></div>
              )}
            </div>

            <span
              className={`w-10 text-sm text-right ${
                isDisabled ? "text-gray-400" : "text-[#6f7172]"
              }`}
            >
              {/* {leave.used !== null ? `${leave.used}/${leave.total}` : "N/A"} */}
              {leave.used !== null ? (
                <>
                  <span className="font-bold">{leave.used}</span>/{leave.total}
                </>
              ) : (
                "N/A"
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default LeaveBalance;
