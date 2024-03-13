import React from "react";

export interface SubtitleProps {
  className?: string;
  children: React.ReactNode;
}

const Subtitle = ({ children }: SubtitleProps) => {
  return <h3 className="text-xl mb-5">{children}</h3>;
};

export default Subtitle;
