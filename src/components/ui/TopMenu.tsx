import { secondaryFont } from "@/utils/font";
import Link from "next/link";
import React from "react";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import MenuBotton from "./MenuBotton";

export default function TopMenu() {
  return (
    <nav className="sticky bg-white top-0 flex px-5 justify-between items-center w-full z-10">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${secondaryFont.className} antialiased font-bold`}>
            Teslo
          </span>
          <span> | Shop</span>
        </Link>
      </div>

      {/* Center menu */}
      <div className="hidden md:block">
        <Link
          href="/gender/men"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-200"
        >
          Men
        </Link>
        <Link
          href="/gender/women"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-200"
        >
          Women
        </Link>
        <Link
          href="/gender/kid"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-200"
        >
          Kids
        </Link>
      </div>

      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5 " />
        </Link>
        <Link href="/cart" className="mx-2">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
              3
            </span>
            <IoCartOutline className="w-5 h-5 " />
          </div>
        </Link>

        <MenuBotton />
      </div>
    </nav>
  );
}
