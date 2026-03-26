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

const LineChart = () => {

  const IVHp = Math.floor(Math.random() * 31);
  const IVAtk = Math.floor(Math.random() * 31);
  const IVDef = Math.floor(Math.random() * 31);
  const IVSpd = Math.floor(Math.random() * 31);
  const IVSpecial = Math.floor(Math.random() * 31);
  const EVHP = Math.floor(Math.random() * 252);
  const EVAtk = Math.floor(Math.random() * 252);
  const EVDef = Math.floor(Math.random() * 252);
  const EVSpd = Math.floor(Math.random() * 252);
  const EVSpecial = Math.floor(Math.random() * 252);

  const [spatkDataLvl, setSpatkDataLvl] = useState([]);
  const [hpDataLvl, setHpDataLvl] = useState([]);
  const [atkDataLvl, setAtkDataLvl] = useState([]);
  const [defDataLvl, setDefDataLvl] = useState([]);
  const [spdDataLvl, setSpdDataLvl] = useState([]);

  const [statList, setStatList] = useState([]);

  const getStatList = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/clefairy")
      .then(response => response.json())
      .then(data => {
        const info = [
          { name: "hp", value: data.stats[0].base_stat },
          { name: "atk", value: data.stats[1].base_stat },
          { name: "def", value: data.stats[2].base_stat },
          { name: "s_atk", value: data.stats[3].base_stat },
          { name: "s_def", value: data.stats[4].base_stat },
          { name: "speed", value: data.stats[5].base_stat }
        ];
        setStatList(info);
      })
      .catch(console.error);
  };

  useEffect(() => {
    getStatList();
  }, [])

  useEffect(() => {
    if (statList == null) return;

    for (let s = 0; s < statList.length; s++) {
      var tempArray = [];
      const statVal = statList[s].value;
      if (statList[s].name == "hp") {
        tempArray.push(Math.floor(((((2 * (statVal + IVHp)) + (EVHP / 4)) * 1) / 100) + 1 + 10))


        for (let i = 10; i < 110; i = i + 10) {
          tempArray.push(Math.floor(((((2 * (statVal + IVHp)) + (EVHP / 4)) * i) / 100) + i + 10));
          setHpDataLvl(tempArray);
        }
      } else {
        switch (s) {
          case 1:

            tempArray.push(Math.floor((((2 * (statVal + IVAtk) + (EVAtk / 4)) * 1) / 100) + 5));
            for (let i = 10; i < 110; i = i + 10) {
              tempArray.push(Math.floor((((2 * (statVal + IVAtk) + (EVAtk / 4)) * i) / 100) + 5));
            }
            setAtkDataLvl(tempArray);
            break;
          case 2:
            tempArray.push(Math.floor(((((2 * (statVal + IVDef)) + (EVDef / 4)) * 1) / 100) + 5));
            for (let i = 10; i < 110; i = i + 10) {
              tempArray.push(Math.floor(((((2 * (statVal + IVDef)) + (EVDef / 4)) * i) / 100) + 5));
            }
            setDefDataLvl(tempArray);
            break;
          case 3:
            tempArray.push(Math.floor((((2 * (statVal + IVSpecial) + (EVSpecial / 4)) * 1) / 100) + 5));
            for (let i = 10; i < 110; i = i + 10) {
              tempArray.push(Math.floor((((2 * (statVal + IVSpecial) + (EVSpecial / 4)) * i) / 100) + 5));
            }
            setSpatkDataLvl(tempArray);
            break;
          case 5:
            tempArray.push(Math.floor((((2 * (statVal + IVSpd) + (EVSpd / 4)) * 1) / 100) + 5));
            for (let i = 10; i < 110; i = i + 10) {
              tempArray.push(Math.floor((((2 * (statVal + IVSpd) + (EVSpd / 4)) * i) / 100) + 5));
            }
            setSpdDataLvl(tempArray);
            break;
          default:
            break;
        }
      }

    }

  }, [statList])

  const data = {
    labels: ["1", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"],
    datasets: [
      {
        label: "HP",
        data: hpDataLvl,
        borderWidth: 2
      },
      {
        label: "Atk",
        data: atkDataLvl,
        borderWidth: 2
      },
      {
        label: "Def",
        data: defDataLvl,
        borderWidth: 2
      },
      {
        label: "Speed",
        data: spdDataLvl,
        borderWidth: 2
      },
      {
        label: "Special-atk",
        data: spatkDataLvl,
        borderWidth: 2
      },
    ]
  };

  const options = {
    responsive: true, // Chart resizes automatically
    scales: {
      y: {
        beginAtZero: true,
        border: { color: "#fff" },
        grid: {
          color: 'grey',
          borderColor: 'grey',
          tickColor: 'grey'
        },
        ticks: {
          color: "#fff",
        }
      },
      x: {
        border: { color: "#fff" },
        grid: {
          color: 'grey',
          borderColor: 'grey',
          tickColor: 'grey'
        },
        ticks: {
          color: "#fff",
        }
      }

    },
    plugins: {
      legend: {
        labels: {
          color: "#fff"
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
