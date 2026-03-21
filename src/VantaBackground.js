import react, { useEffect } from 'react';
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
      highlightColor: 0x490084,
      midtoneColor: 0xb664ff,
      lowlightColor: 0x811fac,
      baseColor: 0xf001e,
      blurFactor: 0.90,
      speed: 1.50,
      zoom: 1.20
    })

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    }
  }, [])


  return (
    <div className='background' id='backgroundEffect'></div>
  )
}

export default VantaBackground;