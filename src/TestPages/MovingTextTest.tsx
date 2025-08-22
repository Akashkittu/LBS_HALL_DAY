import { TextGenerateEffect } from "../components/ui/Text-generate.tsx";

const words = `
You are invited to join us
at LBS hall day
D-block
30.03.2025
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
