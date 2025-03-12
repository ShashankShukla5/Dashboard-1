import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import globalData from "@/globaldata/globalData";

Chart.register(ArcElement, Tooltip, Legend);

const MyAttenChart = () => {
  const onTime = globalData.onTime;
  const workFromHome = globalData.workFromHome
  const lateAtten = globalData.lateAtten
  const absent = globalData.absent

  const data = {
    datasets: [
      {
        data: [onTime, workFromHome, lateAtten, absent],
        backgroundColor: ["#57a379", "#f9d027", "#d9491a", "#edeef0"],
        borderWidth: 0,
        cutout: "68%",
      },
      {
        data: [100],
        backgroundColor: ["#f6f7f7"],
        cutout: "70%"
      }
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
    <div className="h-30 w-full sm:w-30 overflow-hidden relative">
      <Doughnut data={data} options={options} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"    >
        <div className="text-lg font-bold">{onTime+workFromHome+lateAtten}</div>
        <div className="text-sm text-gray-600">/1500</div>
      </div>
    </div>
  );
};

export default MyAttenChart;
