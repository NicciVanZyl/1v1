import { useEffect, useRef } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

// Every color is set by hand.
// highlight = dark saturated, midtone = brightest, lowlight = medium, base = near black
const TYPE_COLORS = {
  normal: {
    highlightColor: 0x5f5f5f,
    midtoneColor: 0x464646,
    lowlightColor: 0x2d2d2d,
    baseColor: 0x20009,
  },
  fire: {
    highlightColor: 0xc30a0a,
    midtoneColor: 0xe1cb00,
    lowlightColor: 0x934f06,
    baseColor: 0x0,
  },
  water: {
    highlightColor: 0x0a2ac3,
    midtoneColor: 0x0c0c20,
    lowlightColor: 0x525775,
    baseColor: 0x0,
  },
  electric: {
    highlightColor: 0xffc900,
    midtoneColor: 0x4a420c,
    lowlightColor: 0x615714,
    baseColor: 0x0,
  },
  grass: {
    highlightColor: 0x286610,
    midtoneColor: 0x21391b,
    lowlightColor: 0x165c16,
    baseColor: 0x0,
  },
  ice: {
    highlightColor: 0x409191,
    midtoneColor: 0x000000,
    lowlightColor: 0x6ec8ba,
    baseColor: 0x0,
  },
  fighting: {
    highlightColor: 0xe17f3a,
    midtoneColor: 0x703a03,
    lowlightColor: 0x140d04,
    baseColor: 0x0,
  },
  poison: {
    highlightColor: 0x9141cb,
    midtoneColor: 0x180b2f,
    lowlightColor: 0x28152f,
    baseColor: 0x0,
  },
  ground: {
    highlightColor: 0x341e0d,
    midtoneColor: 0x915121,
    lowlightColor: 0x160b02,
    baseColor: 0x0,
  },
  flying: {
    highlightColor: 0x395587,
    midtoneColor: 0x81b9ef,
    lowlightColor: 0x000000,
    baseColor: 0x0,
  },
  psychic: {
    highlightColor: 0x9b2a4f,
    midtoneColor: 0x220e14,
    lowlightColor: 0xe84279,
    baseColor: 0x0,
  },
  bug: {
    highlightColor: 0x616e20,
    midtoneColor: 0x2f3408,
    lowlightColor: 0x161809,
    baseColor: 0x0,
  },
  rock: {
    highlightColor: 0x726e54,
    midtoneColor: 0x48473d,
    lowlightColor: 0x000000,
    baseColor: 0x0,
  },
  ghost: {
    highlightColor: 0x704170,
    midtoneColor: 0x2f202f,
    lowlightColor: 0x000000,
    baseColor: 0x0,
  },
  dragon: {
    highlightColor: 0x5060e1,
    midtoneColor: 0x3e4684,
    lowlightColor: 0x000000,
    baseColor: 0x0,
  },
  dark: {
    highlightColor: 0x594646,
    midtoneColor: 0x4e3e84,
    lowlightColor: 0x000000,
    baseColor: 0x0,
  },
  steel: {
    highlightColor: 0x5f9fb6,
    midtoneColor: 0x2b373c,
    lowlightColor: 0x000000,
    baseColor: 0x0,
  },
  fairy: {
    highlightColor: 0xe86ee8,
    midtoneColor: 0x5c325c,
    lowlightColor: 0x964796,
    baseColor: 0x0,
  },
};

// your original purple, used when there's no type yet
const DEFAULT_COLORS = {
  highlightColor: 0xff0529,
  midtoneColor: 0x4545cf,
  lowlightColor: 0x2f1faf,
  baseColor: 0x20009,
};

const getColors = (type) => TYPE_COLORS[type?.toLowerCase()] || DEFAULT_COLORS;

function VantaBackground({ type }) {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  // create the effect once
  useEffect(() => {
    effectRef.current = FOG({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      blurFactor: 0.7,
      speed: 1.5,
      zoom: 1.2,
      ...getColors(type),
    });
    return () => {
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, []);

  // swap colors when the type changes
  useEffect(() => {
    effectRef.current?.setOptions(getColors(type));
  }, [type]);

  return <div className="background" ref={vantaRef}></div>;
}

export default VantaBackground;
