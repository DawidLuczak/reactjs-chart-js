import {
  ChartConfiguration,
  ChartDataset,
  ChartOptions as ChartJsOptions,
  Plugin
} from "chart.js";

const ChartLabels = [
  "Transmission",
  "Stuffines",
  "Discomfort",
  "Humidity",
  "Pollution",
  "Temperature",
  "CO2",
  "Density"
];

const FrontFirstChartData = {
  backgroundColor: "rgba(155, 155, 255, 0.8)",
  data: [45, 10, 35, 37, 20, 36, 32, 24],
  pointBorderWidth: 0,
  pointBackgroundColor: "rgba(0, 0, 0, 0)",
  showLine: false
};

const FrontSecondChartData: ChartDataset<"radar"> = {
  backgroundColor: "rgba(155,155,255, 0.8)",
  data: [30, 5, 10, 30, 10, 18, 26, 34],
  pointBorderWidth: 0,
  pointBackgroundColor: "rgba(0, 0, 0, 0)",
  showLine: false
};

const FrontThirdChartData: ChartDataset<"radar"> = {
  backgroundColor: "rgba(255, 155, 155, 1)",
  data: ChartLabels.map((label) => 20),
  pointBorderWidth: 0,
  pointBackgroundColor: "rgba(0, 0, 0, 0)",
  showLine: false
};

const BackFirstChartData: ChartDataset<"radar"> = {
  backgroundColor: "rgba(255,0,0,0.1)",
  data: ChartLabels.map((label) => 30),
  pointBorderWidth: 0,
  pointBackgroundColor: "rgba(0, 0, 0, 0)",
  borderColor: "rgba(0, 0, 0, 0.4)",
  borderWidth: 1
};

const BackSecondChartData = {
  backgroundColor: "rgba(255,0,0,0.1)",
  data: ChartLabels.map((label) => 40),
  pointBorderWidth: 0,
  pointBackgroundColor: "rgba(0, 0, 0, 0)",
  borderColor: "rgba(0, 0, 0, 0.3)",
  borderWidth: 1
};

const BackThirdChartData = {
  backgroundColor: "rgba(0,0,0,0.05)",
  data: ChartLabels.map((label) => 50),
  pointBorderWidth: 0,
  pointBackgroundColor: "rgba(0, 0, 0, 0)",
  borderColor: "rgba(0, 0, 0, 0.2)",
  borderWidth: 1
};

const BackFourthChartData = {
  backgroundColor: "rgba(0,0,0,0)",
  data: ChartLabels.map((label) => 60),
  pointBackgroundColor: "rgba(0, 0, 0, 0.2)",
  pointBorderColor: "rgba(0,0,0,0.5)",
  borderColor: "rgba(0, 0, 0, 0.1)",
  borderWidth: 1
};

const ShadowPlugin: Plugin<"radar"> = {
  id: "shadow",
  beforeDraw: (chart) => {
    chart.ctx.shadowBlur = 200;
    chart.ctx.shadowColor = "rgba(0,0,0,1)";
  }
};

const ChartOptions: ChartJsOptions<"radar"> = {
  clip: false,
  responsive: true,
  scales: {
    r: {
      angleLines: {
        color: "rgba(0,0,0,0.25)",
        lineWidth: 2
      },
      ticks: {
        display: false,
        stepSize: 10
      },
      min: 0,
      max: 60,
      startAngle: 0,
      beginAtZero: true
    }
  },
  plugins: {}
};

export const ChartConfig: ChartConfiguration<"radar"> = {
  type: "radar",
  data: {
    labels: ChartLabels,
    datasets: [
      FrontFirstChartData,
      FrontSecondChartData,
      FrontThirdChartData,
      BackThirdChartData,
      BackSecondChartData,
      BackFirstChartData,
      BackFourthChartData
    ]
  },
  options: ChartOptions,
  plugins: [ShadowPlugin]
};
