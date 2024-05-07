"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  TimeScale,
  Title,
  Tooltip,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import faker from "faker";
import { BarChartProp } from "./interface";
import { previous30Days } from "@/lib";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  TimeScale,
  Title,
  Tooltip
);
const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Daily Commits",
    },
  },
  scales: {
    x: {
      grid: { drawOnChartArea: false },
      type: "time",
      time: {
        unit: "day",
        displayFormats: {
          day: "d",
        },
      },
    },
    x2: {
      type: "time",
      time: {
        unit: "month",
      },
    },
    y: {
      grid: {
        color: "#3f3f45aa",
      },
    },
  },
  maintainAspectRatio: false,
};
export const DailyCommits: React.FC<BarChartProp> = ({ width, height }) => {
  const labels = previous30Days();

  const data: ChartData<"bar"> = {
    labels,
    datasets: [
      {
        label: "Commits",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#71717A",
        barPercentage: 0.7,
      },
    ],
  };

  return (
    <div
      className="bg-[#27272A] p-[20px] rounded-md border-[1px] border-[#3F3F45]"
      style={{
        width,
        height,
      }}
    >
      <Bar options={options} data={data} />
    </div>
  );
};
