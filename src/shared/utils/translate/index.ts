import { translateWords } from "@/shared/config/translate";

export const translate = <
  Lang extends keyof typeof translateWords,
  TextTranslate extends keyof (typeof translateWords)[Lang]
>(
  lang: Lang,
  text: TextTranslate
) => {
  return translateWords[lang][text];
};
