import { secondaryFont } from "@/utils/font";
import React from "react";

export interface TitleProps {
  className?: string;
  children: React.ReactNode;
}

const Title = ({ children, className }: TitleProps) => {
  return (
    <h1
      className={`${secondaryFont.className} antialiased text-4xl font-semibold my-10 ${className}`}
    >
      {children}
    </h1>
  );
};

export default Title;
