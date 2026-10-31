import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  Filler,
  scales,
  Ticks,
  Colors,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJS.register(
  PointElement,
  LineElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  Filler,
  scales,
  Colors,
);

const RadarChart = ({ stats, name, side }) => {
  if (stats == null) {
    stats = [
      { hp: 0 },
      { atk: 0 },
      { def: 0 },
      { s_atk: 0 },
      { s_def: 0 },
      { speed: 0 },
    ];
  }

  const [chartColour, setChartColour] = useState({
    fill: true,
    backgroundColor: "rgba(255, 0, 0, 0.25)",
    borderColor: "rgb(115, 0, 255)",
    pointBackgroundColor: "rgb(211, 228, 56)",
    pointBorderColor: "#191bc0",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgb(99, 4, 216)",
  });

  useEffect(() => {
    if (side === "left") {
      setChartColour({
        fill: true,
        backgroundColor: "rgba(0, 102, 255, 0.44)",
        borderColor: "rgb(0, 89, 255)",
        pointBackgroundColor: "rgb(0, 204, 255)",
        pointBorderColor: "#191bc0",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(4, 121, 216)",
      });
    } else {
      setChartColour({
        fill: true,
        backgroundColor: "rgba(255, 85, 85, 0.36)",
        borderColor: "rgb(255, 114, 114)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderColor: "#c01919",
        pointHoverBackgroundColor: "#b91414",
        pointHoverBorderColor: "rgb(255, 255, 255)",
      });
    }
  }, [side]);

  const data = {
    labels: ["HP", "Atk", "Def", "Spd", "Sp-atk", "Sp-def"],
    datasets: [
      {
        label: "Base Stats",
        data: [
          stats[0].hp,
          stats[1].atk,
          stats[2].def,
          stats[5].speed,
          stats[3].s_atk,
          stats[4].s_def,
        ],
        fill: chartColour.fill,
        backgroundColor: chartColour.backgroundColor,
        borderColor: chartColour.borderColor,
        pointBackgroundColor: chartColour.pointBackgroundColor,
        pointBorderColor: chartColour.pointBorderColor,
        pointHoverBackgroundColor: chartColour.pointHoverBackgroundColor,
        pointHoverBorderColor: chartColour.pointHoverBorderColor,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        beginAtZero: true,
        pointLabels: {
          color: "#fff",
          font: {
            size: 18,
          },
        },
        grid: {
          color: "#fff",
        },
        angleLines: {
          color: "rgb(231, 212, 255)",
        },
        ticks: {
          color: "#fff",
          backdropColor: "rgba(24, 0, 46, 0.6)",
          padding: 15,
        },
      },
    },
    plugins: {
      tooltip: { enables: true },
      legend: { position: "top", labels: { color: "#fff" } },
    },
  };
  return (
    <div className="chartBG">
      <h2 className="chartHeading">{name} Stats Overview</h2>
      <Radar data={data} options={options} />
      <p className="chartDesc">
        Each of these number values represents the pokemon's starting stat
        values and will increase with level.
      </p>
    </div>
  );
};

export default RadarChart;
