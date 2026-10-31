export const TYPE_PALETTES = {
  normal:   { bg: "#0c0c0e", mid: "#4a4a56", glow: "#a8a8b8" },
  fire:     { bg: "#0f0402", mid: "#6b1d0a", glow: "#e0502b" },
  water:    { bg: "#020a0f", mid: "#0a3b6b", glow: "#1fa2d6" },
  electric: { bg: "#0d0b02", mid: "#6b5a0a", glow: "#e0c42b" },
  grass:    { bg: "#030d06", mid: "#0f4a24", glow: "#2bc062" },
  ice:      { bg: "#030d0f", mid: "#1f6b78", glow: "#7fe0e8" },
  fighting: { bg: "#0f0303", mid: "#6b1414", glow: "#c42b2b" },
  poison:   { bg: "#09020f", mid: "#4a0a6b", glow: "#a82bc4" },
  ground:   { bg: "#0d0902", mid: "#6b4a14", glow: "#c49a45" },
  flying:   { bg: "#04070f", mid: "#2a3b8a", glow: "#8aa2f0" },
  psychic:  { bg: "#0f0208", mid: "#6b0a3b", glow: "#e0458a" },
  bug:      { bg: "#080d02", mid: "#3b5a0a", glow: "#a2c42b" },
  rock:     { bg: "#0b0a06", mid: "#5a5030", glow: "#b8a86a" },
  ghost:    { bg: "#05020c", mid: "#2a1a5a", glow: "#7a5ac4" },
  dragon:   { bg: "#02030f", mid: "#1a2a8a", glow: "#5a45e0" },
  dark:     { bg: "#030303", mid: "#2a2220", glow: "#6a5a52" },
  steel:    { bg: "#070809", mid: "#3a4650", glow: "#9ab0c0" },
  fairy:    { bg: "#0f0209", mid: "#8a2a6b", glow: "#f08ad0" },
};

export const DEFAULT_PALETTE = { bg: "#05020f", mid: "#2a0a6b", glow: "#6a2be0" };

export const getPalette = (type) =>
  TYPE_PALETTES[type?.toLowerCase()] || DEFAULT_PALETTE;