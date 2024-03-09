import { secondaryFont } from "@/utils/font";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <span>Hola Mundo</span>
      <span className={secondaryFont.className}>Hola Mundo</span>
      <span className={`${secondaryFont.className} font-bold`}>Hola Mundo</span>
    </main>
  );
}
