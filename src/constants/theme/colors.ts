// LitIsh brand colors. Keep in sync with the @theme block in src/global.css.
export const colors = {
  indigo: "#5B3BF6", // Path Indigo — primary brand, active states
  blue: "#4E8BFE", // Voice Blue — secondary accent
  gold: "#F4B943", // Hope Gold — highlights, warm accents
  green: "#21C16B", // Progress Green — success, progress
  ink: "#0D132B", // primary text
  secondary: "#657084", // secondary/muted text
  border: "#E6E7EB", // card borders, dividers
  surface: "#F6F7FB", // screen background
  white: "#FFFFFF", // card background
} as const;

export type ColorToken = keyof typeof colors;
