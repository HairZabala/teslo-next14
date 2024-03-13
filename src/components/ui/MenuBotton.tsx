"use client";

import { useUIStore } from "@/store/ui/ui-store";
import React from "react";

const MenuBotton = () => {
  const openSidebar = useUIStore((state) => state.openSidebar);

  return (
    <button
      className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
      onClick={openSidebar}
    >
      Menu
    </button>
  );
};

export default MenuBotton;
