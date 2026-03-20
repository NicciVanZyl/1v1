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
import { color } from "motion";

import { Radar } from "react-chartjs-2";

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

const RadarChart = ({ stats }) => {
  if (stats == null) {
    stats = [
      { hp: 0 },
      { atk: 0 },
      { def: 0 },
      { s_atk: 0 },
      { s_def: 0 },
      { speed: 0 }
    ];
  }

  const data = {
    labels: ["HP", "Atk", "Def", "Spd", "Sp-atk", "Sp-def"],
    datasets: [
      {
        label: "Base Stats",
        data: [stats[0].hp, stats[1].atk, stats[2].def, stats[5].speed, stats[3].s_atk, stats[4].s_def],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',

      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        beginAtZero: true,
        pointLabels: {
          color: 'white',
          font: {
            size: 16,
          }
        },
        grid:{
          color: "#fff"
        },
        angleLines: {
          color: "white"
        },
        ticks:{
          color: "white",
          backdropColor: "#000", 
          padding: 10,
        }
      },
    },
    plugins: {
      tooltip: { enables: true,  },
      legend: { position: "top", labels: { color: "#fff" }  },
    },
  };
  return (
    <div>
      <h2 className="chartHeading">Stats Overview</h2>
      <Radar data={data} options={options} />
      <p className="chartDesc">
        Each of these number values represents the pokemon's starting stat values and will increase with level.
      </p>
    </div>
  );
};

export default RadarChart;
