import {
    Chart as ChartJS,
  Colors,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  Colors,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend
);

const data = {
    labels: ["1", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"],
    datasets: [
        {
            label: "Pokemon 1",
            data: [20, 100, 500, 1000, 10000, 100000],
        },
        {
            label: "Pokemon 2",
            data: [20, 101, 520, 1300, 10400, 104500],
        }
    ]
};

const BarChart = () => {
    return (
        <div>
            <h2 className="chartHeading">Experience required for level up</h2>
            <Bar data={data} />
            <p className="chartDesc">This data represents the total amount of experience points the pokemon will need to level up dot the next level</p>
        </div>
    );
};

export default BarChart;