"use client";

import { Line } from "react-chartjs-2";

import {
  Chart,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

Chart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const salesData = [
  { month: "مهر", sales: 1000000 },
  { month: "آبان", sales: 1500000 },
  { month: "آذر", sales: 2000000 },
  { month: "دی", sales: 1200000 },
  { month: "بهمن", sales: 1800000 },
  { month: "اسفند", sales: 2500000 },
];

export default function ChartComponent() {
  const data = {
    labels: salesData.map((data) => data.month),
    datasets: [
      {
        label: "فروش",
        data: salesData.map((data) => data.sales),
        borderColor: "#cb0c9f",
        borderWidth: 3,
        pointBorderColor: "#cb0c9f",
        pointBorderWidth: 3,
        tension: 0.5,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "#f797e1");
          gradient.addColorStop(1, "white");
          return gradient;
        },
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 15,
            family: 'vazir'
          },
        },
      },
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          font: {
            size: 12,
            weight: "bold",
            family: "vazir",
          },
        },
        title: {
          display: true,
          text: "قیمت",
          padding: {
            bottom: 10,
          },
          font: {
            size: 14,
            family: "vazir",
          },
        },
        min: 50,
      },
      x: {
        ticks: {
          font: {
            size: 12,
            weight: "bold",
            family: "vazir",
          },
        },
        title: {
          display: true,
          text: "شش ماه",
          padding: {
            top: 10,
          },
          font: {
            size: 14,
            family: "vazir",
          },
        },
      },
    },
  };
  const containerStyle = {
    width: "100%", // Set the width to 100%
    height: "100%",
    padding: "20px",
    cursor: "pointer",
  };

  return (
    <div className="w-full min-h-[500px] md:min-h-96  flex flex-col md:flex-row gap-5 items-center justify-between">
      <div className="w-full md:w-1/3">
        <h1 className="font-bold text-xl text-color2 text-center mt-10">
          نمودار نوسان قیمت شش ماهه
        </h1>
        <p className="text-center py-5 text-color2">
          نوسان قیمت شش ماه سال جاری که براساس بازار ایران طراحی شده و به روز می
          باشد.
        </p>
      </div>

      <div className="w-full md:w-2/3">
        <Line data={data} options={options} style={containerStyle}></Line>
      </div>
    </div>
  );
}
