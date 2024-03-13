import { secondaryFont } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5">
        <h2 className={`${secondaryFont.className} antialiased text-8xl`}>
          404
        </h2>
        <p className="font-semibold text-xl">Whooop! Page not found</p>
        <p className="font-light">
          <span>Go back to </span>
          <Link href="/" className="font-normal hover:underline transition-all">
            home
          </Link>
        </p>
      </div>

      <div className="px-5 mx-5">
        <Image
          src="/images/starman_750x750.png"
          width={550}
          height={550}
          alt="Starman"
          className="p-5 sm:p-0"
        />
      </div>
    </div>
  );
};
