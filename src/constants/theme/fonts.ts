import AtkinsonHyperlegibleBold from "@/assets/fonts/Atkinson-Hyperlegible-Bold.ttf";
import AtkinsonHyperlegibleBoldItalic from "@/assets/fonts/Atkinson-Hyperlegible-BoldItalic.ttf";
import AtkinsonHyperlegibleItalic from "@/assets/fonts/Atkinson-Hyperlegible-Italic.ttf";
import AtkinsonHyperlegibleRegular from "@/assets/fonts/Atkinson-Hyperlegible-Regular.ttf";

import { fontFamily } from "./typography";

// Passed directly to useFonts() in app/_layout.tsx.
export const fontAssets = {
  [fontFamily.regular]: AtkinsonHyperlegibleRegular,
  [fontFamily.bold]: AtkinsonHyperlegibleBold,
  [fontFamily.italic]: AtkinsonHyperlegibleItalic,
  [fontFamily.boldItalic]: AtkinsonHyperlegibleBoldItalic,
};
