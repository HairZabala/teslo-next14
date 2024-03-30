import { cn } from "@/utils/cn";
import React from "react";

export interface ButtonComponentSharedProps {
  text: React.ReactNode;
  fontSize?: string;

  width?: string;
  height?: string;
  padding?: string;

  contentGap?: string;
  borderRadius?: string;

  applyColorToSVG?: boolean;
  type?: "button" | "submit" | "reset";

  loading?: boolean;
  disabled?: boolean;

  onClick?: () => void;
  icon?: React.ReactNode;

  loadingSpinnerColor?: string;
  variant?: "primary" | "disabled" | "light" | "outline" | "custom";
  className?: string;
}

const DefaultButton = ({
  text,
  icon,
  width = "w-full",
  height = "h-auto",
  fontSize = "text-base",
  borderRadius = "rounded-md",
  contentGap = "gap-2",
  padding = "p-2.5",
  type = undefined,
  disabled = false,
  loading = false,
  onClick,
  variant = "primary",
  loadingSpinnerColor = "border-white",
  className = "",
}: ButtonComponentSharedProps) => {
  const cursor = disabled || loading ? "cursor-not-allowed" : "cursor-pointer";

  const colorVariants: Record<string, string> = {
    primary:
      "bg-primary-90 hover:bg-primary-100 border-primary-90 hover:border-primary-100 text-white",
    disabled:
      "bg-gray-200 border-gray-200 hover:bg-gray-200 hover:border-gray-200 text-white",
    light:
      "bg-white border-primary-90 hover:bg-primary-100 hover:border-primary-100 text-primary-90",
    outline:
      "bg-transparent border-primary-90 hover:bg-primary-100 hover:border-primary-100 text-primary-90",
    custom: "",
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={cn(
        width,
        height,
        "min-h-12",
        fontSize,
        borderRadius,
        contentGap,
        padding,
        cursor,
        "border-2",
        "transition-all duration-300 ease-in-out",
        "hover:scale-102",
        colorVariants[variant],
        className
      )}
    >
      {loading ? (
        <div className="w-full flex justify-center">
          <div
            className={`w-4 h-4 border-2 ${loadingSpinnerColor} border-t-2 border-t-transparent animate-spin h-5 w-5 rounded-full`}
          />
        </div>
      ) : (
        text
      )}
    </button>
  );
};

export default DefaultButton;
