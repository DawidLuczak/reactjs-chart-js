import React, { useRef, useEffect } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler);

export const MyChart = ({ chartConfig }) => {
  const ref = useRef<ChartJS>(null);

  useEffect(() => {}, []);

  return (
    <Chart
      ref={ref}
      type={chartConfig.type}
      data={chartConfig.data}
      options={chartConfig.options}
      plugins={chartConfig.plugins}
    />
  );
};
