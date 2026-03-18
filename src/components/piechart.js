import {
 Chart as ChartJS,
 CategoryScale, 
 LinearScale,   
 PointElement,  
 PieController,
 ArcElement
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
 CategoryScale,
 LinearScale,
 PointElement,
 PieController,
 ArcElement
);

const data = {
 labels: ["Base","Max Level", "Lucky Egg", "Trainer Battle", "Traded Pokemon"],
 datasets: [
   {  
    label: "Pokemon 1", 
     data: [20, 25, 22, 28, 30],            
   },
   {   
    label: "Pokemon 2",
     data: [20, 25, 22, 28, 30],            
   }
 ]
};

const PieChart = () => {
 return (
   <div>
     <h2>Experience rewarded after battle</h2>
     <Pie data={data} />
   </div>
 );
};

export default PieChart;