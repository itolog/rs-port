import { Doto } from "next/font/google";

export const doto = Doto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});
