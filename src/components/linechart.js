import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { color } from "motion";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
);

const LineChart = ({ currentStat, currentStatVal }) => {
  const [stat, setStat] = useState('hp');
  const [statVal, setStatVal] = useState();

  useEffect(() => {
    if (currentStat == null) return;
    if (currentStatVal == null) return;

    setStat(currentStat);
    setStatVal(currentStatVal);



  }, [currentStat, currentStatVal]);

  const [statListRand, setStatListRand] = useState([]);
  const [statListMin, setStatListMin] = useState([]);
  const [statListMax, setStatListMax] = useState([]);

  useEffect(() => {
    if (stat == null || statVal == null) return;

    const IVRand = (Math.floor(Math.random() * 31));
    const EVRand = (Math.floor(Math.random() * 252));


    if (stat == 'hp') {

      var tempArray = [];
      tempArray.push(Math.floor(((((2 * (statVal + IVRand)) + (EVRand / 4)) * 1) / 100) + 1 + 10))


      for (let i = 10; i < 110; i = i + 10) {
        tempArray.push(Math.floor(((((2 * (statVal + IVRand)) + (EVRand / 4)) * i) / 100) + i + 10));

      }
      setStatListRand(tempArray);

      tempArray = [];
      tempArray.push(Math.floor(((((2 * (statVal + 31)) + (252 / 4)) * 1) / 100) + 1 + 10))
      for (let i = 10; i < 110; i = i + 10) {
        tempArray.push(Math.floor(((((2 * (statVal + 31)) + (252 / 4)) * i) / 100) + i + 10));

      }
      setStatListMax(tempArray);

      tempArray = [];
      tempArray.push(Math.floor(((((2 * (statVal + 0)) + (0 / 4)) * 1) / 100) + 1 + 10))
      for (let i = 10; i < 110; i = i + 10) {
        tempArray.push(Math.floor(((((2 * (statVal + 0)) + (0 / 4)) * i) / 100) + i + 10));

      }
      setStatListMin(tempArray);

    }
    else {
      var tempArray = [];
      tempArray.push(Math.floor((((2 * (statVal + IVRand) + (EVRand / 4)) * 1) / 100) + 5));
      for (let i = 10; i < 110; i = i + 10) {
        tempArray.push(Math.floor((((2 * (statVal + IVRand) + (EVRand / 4)) * i) / 100) + 5));

      }
      setStatListRand(tempArray);

      tempArray = [];
      tempArray.push(Math.floor((((2 * (statVal + 31) + (252 / 4)) * 1) / 100) + 5));
      for (let i = 10; i < 110; i = i + 10) {
        tempArray.push(Math.floor((((2 * (statVal + 31) + (252 / 4)) * i) / 100) + 5));

      }
      setStatListMax(tempArray);

      tempArray = [];
      tempArray.push(Math.floor((((2 * (statVal + 0) + (0 / 4)) * 1) / 100) + 5));
      for (let i = 10; i < 110; i = i + 10) {
        tempArray.push(Math.floor((((2 * (statVal + 0) + (0 / 4)) * i) / 100) + 5));

      }
      setStatListMin(tempArray);

    }


  }, [stat, statVal])

  const data = {
    labels: ["1", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"],
    datasets: [
      {
        label: "Maximum Value",
        data: statListMax,
        borderWidth: 2,

        borderColor: 'rgb(115, 10, 243)',
        pointBackgroundColor: 'rgb(133, 56, 228)',
        pointBorderColor: 'rgb(231, 212, 255)',
        pointHoverBackgroundColor: 'rgb(231, 212, 255)',
        pointHoverBorderColor: 'rgb(135, 60, 226)',
      },
      {
        label: "Possible in game value",
        data: statListRand,
        borderWidth: 2,

        borderColor: 'rgb(61, 7, 128)',
        pointBackgroundColor: 'rgb(105, 16, 212)',
        pointBorderColor: 'rgb(231, 212, 255)',
        pointHoverBackgroundColor: 'rgb(231, 212, 255)',
        pointHoverBorderColor: 'rgb(105, 16, 212)',
      },
      {
        label: "Minimum value",
        data: statListMin,
        borderWidth: 2,
        borderColor: 'rgb(30, 2, 65)',
        pointBackgroundColor: 'rgb(59, 9, 121)',
        pointBorderColor: 'rgb(231, 212, 255)',
        pointHoverBackgroundColor: 'rgb(231, 212, 255)',
        pointHoverBorderColor: 'rgb(59, 9, 121)',
      },
    ]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        border: { color: "rgb(231, 212, 255)" },
        grid: {
          color: 'rgba(231, 212, 255, 0.49)',
          borderColor: 'grey',
          tickColor: 'rgb(231, 212, 255)'
        },
        ticks: {
          color: "rgb(231, 212, 255)",
        }
      },
      x: {
        border: { color: "rgb(231, 212, 255)" },
        grid: {
          color: 'rgba(231, 212, 255, 0.49)',
          borderColor: 'grey',
          tickColor: 'rgb(231, 212, 255)'
        },
        ticks: {
          color: "rgb(231, 212, 255)",
        }
      }

    },
    plugins: {
      legend: {
        labels: {
          color: "rgb(239, 226, 255)"
        }
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
