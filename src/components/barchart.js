import {
    Chart as ChartJS,
    Colors,
    BarController,
    CategoryScale,
    LinearScale,
    BarElement,
    Legend,
    Ticks,
    plugins
} from "chart.js";
import { color } from "motion";
import { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";
import { label } from "three/src/nodes/core/ContextNode.js";
import { min, step } from "three/src/nodes/math/MathNode.js";

ChartJS.register(
    Colors,
    BarController,
    CategoryScale,
    LinearScale,
    BarElement,
    Legend
);
const BarChart = ({ poke1LevelData, poke2LevelData }) => {

    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        if (poke1LevelData == null) return;
        if (poke1LevelData.levels == null) return;
        if (poke2LevelData == null) return;
        if (poke2LevelData.levels == null) return;
        const labels = poke1LevelData.levels.map((l) => parseInt(l.level));
        const data1 = poke1LevelData.levels.map((l) => l.experience);
        const data2 = poke2LevelData.levels.map((l) => l.experience);


        setData1(data1);
        setData2(data2);
        setLabels(labels);
    }, [poke1LevelData, poke2LevelData])

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Pokemon 1",
                data: data1,
                minBarLength: 5,

                backgroundColor:"rgb(101, 41, 175)"
            },
            {
                label: "Pokemon 2",
                data: data2,
                minBarLength: 5,

                backgroundColor:"rgb(37, 0, 82)",
            }
        ]
    };
    const options = {
        responsive: true, // Chart resizes automatically
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: "rgb(231, 212, 255)",
                },
                border:{
                    color:"rgb(231, 212, 255)",
                },
                grid:{
                    color:"rgba(211, 175, 255, 0.38)"
                }
            },
            x: {
                ticks: {
                    min: 0,
                    max: 25,
                    maxTicksLimit: 34,
                    color: "rgb(231, 212, 255)",
                },
                border:{
                    color:"rgb(231, 212, 255)",
                },
                grid:{
                    color:"rgba(211, 175, 255, 0.38)"
                }

            }

        },
        plugins: {
            legend: {
                labels: {
                    color: "rgb(14, 6, 24)"
                }
            },
        },
    }

    return (
        <div className="chartBG">
            <h2 className="chartHeading">Experience required for level up</h2>
            <Bar data={data} options={options} />
            <p className="chartDesc">This data represents the total amount of experience points the pokemon will need to level up dot the next level</p>
        </div>
    );
};

export default BarChart;