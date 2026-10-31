import { useEffect } from "react";
import { getColors } from "./typeTheme";

export default function useTypeTheme(type) {
  useEffect(() => {
    const c = getColors(type);
    const root = document.documentElement.style;
    root.setProperty("--theme-rgb", c.accentText);
    root.setProperty("--theme-dark-rgb", c.accentText);
    root.setProperty("--theme-light", c.accentText);
    root.setProperty("--container-borders", c.containerBorders);
    root.setProperty("--box-shadow-1", c.cBoxShadow1);
    root.setProperty("--box-shadow-2", c.cBoxShadow2);
    root.setProperty("--box-shadow-3", c.cBoxShadow3);
    root.setProperty("--box-shadow-4", c.cBoxShadow4);
    root.setProperty("--box-shadow-5", c.cBoxShadow5);
    root.setProperty("--inset-shadow-1", c.cInsetShadow1);
    root.setProperty("--inset-shadow-2", c.cInsetShadow2);
    root.setProperty("--inset-shadow-3", c.cInsetShadow3);
    root.setProperty("--inset-shadow-4", c.cInsetShadow4);
    root.setProperty("--inset-shadow-5", c.cInsetShadow5);
  }, [type]);
}
