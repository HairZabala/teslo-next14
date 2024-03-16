import { cn } from "@/utils/cn";
import { secondaryFont } from "@/utils/font";
import React from "react";

export interface TitleProps {
  className?: string;
  children: React.ReactNode;
}

const Title = ({ children, className }: TitleProps) => {
  return (
    <h1
      className={cn(
        `${secondaryFont.className} antialiased text-4xl font-semibold`,
        className
      )}
    >
      {children}
    </h1>
  );
};

export default Title;
