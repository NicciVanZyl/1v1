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
        backgroundColor: 'rgba(167, 102, 247, 0.25)',
        borderColor: 'rgb(135, 60, 226)',
        pointBackgroundColor: 'rgb(133, 56, 228)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(167, 102, 247)',

      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        beginAtZero: true,
        pointLabels: {
          color: 'rgb(14, 6, 24)',
          font: {
            size: 18,
          }
        },
        grid:{
          color: "rgb(231, 212, 255)"
        },
        angleLines: {
          color: "rgb(231, 212, 255)"
        },
        ticks:{
          color: "white",
          backdropColor: "rgba(134, 82, 182, 0.6)", 
          padding: 10,
        }
      },
    },
    plugins: {
      tooltip: { enables: true,  },
      legend: { position: "top", labels: { color: "rgb(14, 6, 24)"} },
    },
  };
  return (
    <div className="chartBG">
      <h2 className="chartHeading">Stats Overview</h2>
      <Radar data={data} options={options} />
      <p className="chartDesc"> 
        Each of these number values represents the pokemon's starting stat values and will increase with level.
      </p>
    </div>
  );
};

export default RadarChart;
