import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import globalData from "@/globaldata/globalData";

Chart.register(ArcElement, Tooltip, Legend);

const TodayAttenChart = () => {
  const [color, setColor] = useState("#f9d326");
  const progress = globalData.inOffice;

  useEffect(() => {
    if (globalData.inOffice > 75) {
      setColor("#57a376");
    } else if (globalData.inOffice > 50 && globalData.inOffice < 75) {
      setColor("#f9d326");
    } else {
      setColor("#dd4b1a");
    }
  }, [globalData.inOffice]);

  const data = {
    datasets: [
      {
        data: [progress, 100 - progress],
        backgroundColor: [color, "#e8eff9"],
        borderWidth: 0,
        cutout: "68%",
      },
      {
        data: [100],
        backgroundColor: ["#f6f7f7"],
        cutout: "70%",
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

  function captureRating(data) {
    if (data >= 75) {
      return "GOOD";
    } else if (data > 50 && data < 75) {
      return "POOR";
    } else {
      return "BAD";
    }
  }

  return (
    <div className="w-full sm:w-36 h-36 max-w-full overflow-hidden relative">
      <Doughnut data={data} options={options} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="text-lg font-bold">{globalData.inOffice}%</div>
        <div className="text-sm text-gray-600">in office</div>
        <div className="text-xs font-bold text-[#FFD700]">
          {captureRating(globalData.inOffice)}
        </div>
      </div>
    </div>
  );
};

export default TodayAttenChart;
