import React from "react";
import Title from "../typography/Title";
import Subtitle from "../typography/Subtitle";

export interface HeaderPageProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const HeaderPage = ({ title, subtitle, className }: HeaderPageProps) => {
  return (
    <div className={`mt-3 ${className}`}>
      <Title className="mb-6">{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </div>
  );
};

export default HeaderPage;
