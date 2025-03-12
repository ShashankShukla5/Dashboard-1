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

const MonthlyLeavesChart = () => {
  const values = leaveGlobalData.monthValues
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const data = {
    labels: months, 
    datasets: [
      {
        label: "Activity",
        data: values,
        backgroundColor: months.map((value)=>(value==="Sep" ? '#2f76ec' : '#79abfe')), 
        borderRadius: 3, 
        barThickness: 10,   
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 40
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

export default MonthlyLeavesChart;
