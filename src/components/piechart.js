import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  PieController,
  ArcElement,
  Legend,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  PieController,
  ArcElement,
  Legend,
  Tooltip,
);
const PieChart = ({ poke1, poke2 }) => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    if (poke1 == null) return;
    if (poke2 == null) return;
    if (poke1.baseExp == null) return;
    if (poke2.baseExp == null) return;

    const base1 = poke1.baseExp;
    const max1 = base1 * 2;
    const lucky1 = base1 * 1.5;
    const trainer1 = base1 * 1.5;
    const traded1 = base1 * 1.5;
    setData1([base1, max1, lucky1, trainer1, traded1]);

    const base2 = poke2.baseExp;
    const max2 = base2 * 2;
    const lucky2 = base2 * 1.5;
    const trainer2 = base2 * 1.5;
    const traded2 = base2 * 1.5;
    setData2([base2, max2, lucky2, trainer2, traded2]);


  }, [poke1, poke2])

  const data = {
    labels: ["Pokemon1: Base", "Pokemon1: Max Level", "Pokemon1: Lucky Egg", "Pokemon1: Trainer Battle", "Pokemon1: Traded Pokemon","Pokemon2: Base", "Pokemon2: Max Level", "Pokemon2: Lucky Egg", "Pokemon2: Trainer Battle", "Pokemon2: Traded Pokemon"],
    datasets: [
      {
        label: "Pokemon 1",
        data: data1,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(86, 255, 123)',
          'rgb(255, 162, 86)',
        ],
      },
      {
        label: "Pokemon 2",
        data: data2,
        backgroundColor: [
          'rgb(193, 99, 255)',
          'rgb(220, 54, 235)',
          'rgb(207, 86, 255)',
          'rgb(165, 86, 255)',
          'rgb(75, 5, 107)',
        ],
      }
    ]
  };

  const options = {
//custom label code adapted from multi level pie chart code from chart.js docs 
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color:"#fff",
            size:16,
            generateLabels: function (chart) {
              // Get the default label list
              const original = ChartJS.overrides.pie.plugins.legend.labels.generateLabels;
              const labelsOriginal = original.call(this, chart);

              // Build an array of colors used in the datasets of the chart
              let datasetColors = chart.data.datasets.map(function (e) {
                return e.backgroundColor;
              });
              datasetColors = datasetColors.flat();

              // Modify the color and hide state of each label
              labelsOriginal.forEach(label => {
                // 2 datasets 10 labels thus use 5 
                label.datasetIndex = (label.index - label.index % 5) / 5;

                // The hidden state must match the dataset's hidden state
                label.hidden = !chart.isDatasetVisible(label.datasetIndex);

                // Change the color to match the dataset
                label.fillStyle = datasetColors[label.index];
              });

              return labelsOriginal;
            }
          },
          onClick: function (mouseEvent, legendItem, legend) {
            // toggle the visibility of the dataset from what it currently is
            legend.chart.getDatasetMeta(
              legendItem.datasetIndex
            ).hidden = legend.chart.isDatasetVisible(legendItem.datasetIndex);
            legend.chart.update();
          }
        },
        tooltip: {
          callbacks: {
            title: function (context) {
              //*5 to make sure tool tip lables line up with the correct dataset 
              const labelIndex = (context[0].datasetIndex * 5) + context[0].dataIndex;
              return context[0].chart.data.labels[labelIndex] + ': ' + context[0].formattedValue;
            }
          }
        }
      },

  };


return (
  <div>
    <h2 className="chartHeading">Experience rewarded after battle</h2>
    <Pie data={data} options={options} />
  </div>
);
};

export default PieChart;