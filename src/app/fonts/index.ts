import { Doto } from "next/font/google";

export const doto = Doto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});
