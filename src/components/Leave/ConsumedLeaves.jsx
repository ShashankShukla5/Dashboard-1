import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import leaveGlobalData from "@/globaldata/leaveGlobalData";
import { LeaveBalance } from "..";

Chart.register(ArcElement, Tooltip, Legend);

function ConsumedLeaves() {
  const data = {
    datasets: [
      {
        data: [leaveGlobalData.totalLeaves, 36 - leaveGlobalData.totalLeaves],
        backgroundColor: ["#3077ed", "#e8eff9"],
        borderWidth: 0,
        cutout: "78%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="flex gap-10  w-full flex-col sm:w-full lg:w-1/3 bg-white rounded-xl px-5 pb-5 border ">
      <div className="flex flex-col xs:flex-row gap-2 xs:gap-base w-full">
        <div className="flex flex-col gap-3 w-[70%]">
          <div className="w-full mt-5">Consumed Leave types</div>
          <div className="mt-3 flex w-full">
            <div className="flex flex-col w-full">
              <div className="flex">
                <div className="text-xs font-semibold w-1/2">
                  PL{" "}
                  <span className="font-normal text-[#afb1b3]">
                    Privilege Leave
                  </span>
                </div>
                <div className="text-xs font-semibold w-1/2 ">
                  CL{" "}
                  <span className="font-normal text-[#afb1b3]">
                    Casual Leave
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="text-xs font-semibold w-1/2 ">
                  SL{" "}
                  <span className="font-normal text-[#afb1b3]">Sick Leave</span>
                </div>
                <div className="text-xs font-semibold w-1/2 ">
                  ML{" "}
                  <span className="font-normal text-[#afb1b3]">
                    Maternity Leave
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-center w-[30%]">
          <div className="relative w-20 h-20">
            <Doughnut data={data} options={options} />
            <div className="flex flex-col absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-xs font-bold ">{leaveGlobalData.totalLeaves}</div>
              <div className="text-xs text-[#afb1b3]">/36</div>
            </div>
          </div>
        </div>
      </div>
      <LeaveBalance />
    </div>
  );
}

// break-words whitespace-normal

export default ConsumedLeaves;
