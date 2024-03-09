import { Inter, Montserrat_Alternates } from "next/font/google";

export const primaryFont = Inter({ subsets: ["latin"] });

export const secondaryFont = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["500", "700"],
});
