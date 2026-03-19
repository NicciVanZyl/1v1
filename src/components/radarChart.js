import {
 Chart as ChartJS,
 CategoryScale, 
 LinearScale,   
 PointElement,  
 LineElement,    
 RadialLinearScale
} from "chart.js";

import { Radar } from "react-chartjs-2";

ChartJS.register(
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement,
 RadialLinearScale
);

const data = {
 labels: ["HP", "Atk", "Def", "Spd", "Sp-atk", "Sp-def"],
 datasets: [
   {   
     data: [20, 25, 22, 28, 30, 45],            
   }
 ]
};

const RadarChart = () => {
 return (
   <div>
     <h2 className="chartHeading">Stats Overview</h2>
     <Radar data={data} />
     <p className="chartDesc"> 
        Each of these number values represents the pokemon's starting stat values and will increase with level.
     </p>
   </div>
 );
};

export default RadarChart;
