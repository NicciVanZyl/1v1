import react, {useEffect} from 'react';
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

function VantaBackground() {

    useEffect(() => {
    const vantaEffect = FOG({
      el: "#backgroundEffect",
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
  highlightColor: 0x8d5a27,
  midtoneColor: 0xcc574d,
  lowlightColor: 0xb02020,
  baseColor: 0x292121,
  blurFactor: 0.90,
  zoom: 0.90
    })
  }, [])
    
    return(
      <div className='background' id='backgroundEffect'></div>
    )
}

export default VantaBackground;