import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import leaveGlobalData from "@/globaldata/leaveGlobalData";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const WeeklyLeavesChart = () => {
  const values = leaveGlobalData.weekValues
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], 
    datasets: [
      {
        label: "Activity",
        data: values,
        backgroundColor: values.map((value)=>(value>30 ? '#2f76ec' : '#79abfe')), 
        borderRadius: 5, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        grid: {
          display: false, 
        },
      },
    },
    plugins: {
      legend: { display: false }, 
    },
  };

  return (
    <div className="my-7">
      <Bar data={data} options={options} />
    </div>
  );
};

export default WeeklyLeavesChart;
