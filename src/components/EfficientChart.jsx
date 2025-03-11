import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

function EfficientChart({ effiTime }) {
  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState("#f9d326");
  const [remaining, setRemaing] = useState(540);
  const [secondRemaining, setSecondRemaining] = useState(0);

  useEffect(() => {
    if (!effiTime) return;

    const [hours, minutes] = effiTime.split(":").map(Number);
    setProgress(hours * 60 + minutes);
    if (progress <= 270) {
      setColor("#ff5722");
    } else if (progress >= 540) {
      setColor("#83bdb1");
    } else {
      setColor("#f9d326");
    }

    if (progress <= 540) {
      setRemaing(540 - progress);
    } else if (progress > 540) {
      setRemaing(0);
      setSecondRemaining(progress - 540);
    }
  });

  const data = {
    datasets: [
      {
        data: [progress, remaining],
        backgroundColor: [color, "#e8eff9"],
        borderWidth: 0,
        cutout: "68%",
      },
      {
        data: [secondRemaining, 60 - secondRemaining],
        backgroundColor: ["#cd9e87", "#f6f7f7"],
        cutout: "45%",
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
    <div className="w-10 h-10 flex items-center align-top max-w-full overflow-hidden">
      <Doughnut data={data} options={options} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"></div>
    </div>
  );
}

export default EfficientChart;
