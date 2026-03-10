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
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0xf2bd00,
      midtoneColor: 0xff1c00,
      lowlightColor: 0x2c00ff,
      baseColor: 0xffdbdb,
      blurFactor: 0.90,
      speed: 1.80,
      zoom: 1.2
    })
  }, [])
    
    return(
      <div className='background' id='backgroundEffect'></div>
    )
}

export default VantaBackground;