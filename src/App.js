import React, { useState } from "react";
import { MyChart } from "./components/MyChart";
import { ChartConfig } from "./resources/ChartConfig.ts";
import "./styles.css";

export default function App() {
  const [chartConfig, setChartConfig] = useState(ChartConfig);

  return (
    <div className="App">
      <MyChart chartConfig={chartConfig} />
    </div>
  );
}
