"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ChartOptions,
  TimeScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import "chartjs-adapter-date-fns";
import { previous30Days } from "@/lib";
import { BarChartProp } from "./interface";

ChartJS.register(
  CategoryScale,
  TimeScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
);

export const options: ChartOptions<"bar"> = {
  plugins: {
    title: {
      display: true,
      text: "currently open issues",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
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
      stacked: true,
      grid: {
        color: "#3f3f45aa",
      },
    },
  },
  maintainAspectRatio: false,
};

const labels = previous30Days();

export const data = {
  labels,
  datasets: [
    {
      label: "closed",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "#4BDE80",
      barPercentage: 0.5,
    },
    {
      label: "open",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "#F97171",
      barPercentage: 0.5,
    },
  ],
};

export const StackedChart: React.FC<BarChartProp> = ({ width, height }) => {
  return (
    <div className="h-[300px] bg-[#27272A] p-[20px] rounded-md border-[1px] border-[#3F3F45]">
      <Bar options={options} data={data} />
    </div>
  );
};
