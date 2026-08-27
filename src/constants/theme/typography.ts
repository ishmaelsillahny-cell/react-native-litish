// Atkinson Hyperlegible — distinct letterforms support adults learning to recognize English print.
export const fontFamily = {
  regular: "AtkinsonHyperlegible-Regular",
  bold: "AtkinsonHyperlegible-Bold",
  italic: "AtkinsonHyperlegible-Italic",
  boldItalic: "AtkinsonHyperlegible-BoldItalic",
} as const;

// Matches the text-h1 / text-h2 / text-h3 / text-body utilities in src/global.css.
export const typeScale = {
  h1: { fontSize: 32, lineHeight: 40, fontFamily: fontFamily.bold }, // screen title
  h2: { fontSize: 24, lineHeight: 32, fontFamily: fontFamily.bold }, // section title
  h3: { fontSize: 20, lineHeight: 28, fontFamily: fontFamily.bold }, // card title
  body: { fontSize: 18, lineHeight: 26, fontFamily: fontFamily.regular }, // instructions
} as const;

export type TypeScaleToken = keyof typeof typeScale;
