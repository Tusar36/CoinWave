import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, PointElement);

export default function Chart(props) {
  let price = [];
  let time = [];
  props.data.history.forEach((element) => {
    price.push(element.price);
    time.push(new Date(element.timestamp * 1000).toLocaleDateString());
  });
  const chartData = {
    labels: time,
    datasets: [
      {
        label: "Price in USD",
        data: price,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
        normalized: true,
      },
    ],
  };
  const chartOptions = {
    animation: false,
  };

  return (
    <div className="ml-3">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}
