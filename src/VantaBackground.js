import react, { useEffect, useRef } from 'react';
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

function VantaBackground() {
  const vantaRef = useRef(null); //does not rerender page when value changes

  useEffect(() => {

    const vantaEffect = FOG({
      el: vantaRef.current,
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
    <div className='background' ref={vantaRef}></div>
  )
}

export default VantaBackground;