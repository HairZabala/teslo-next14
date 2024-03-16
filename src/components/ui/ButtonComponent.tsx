import { cn } from "@/utils/cn";
import React from "react";

export interface ButtonComponentColorProps {
  accentColor?: string;
  hoverColor?: string;
  fontColor?: string;
  selectedFontColor?: string;

  light?: boolean;
  outline?: boolean;
}

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

  accentColor?: string;
  hoverColor?: string;
  fontColor?: string;
  selectedFontColor?: string;

  light?: boolean;
  outline?: boolean;
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
  light = false,
  outline = false,
  onClick,
  //
  accentColor = "primary-90",
  hoverColor = "primary-100",
  fontColor = "text-white",
  selectedFontColor = "text-white",
}: ButtonComponentSharedProps & ButtonComponentColorProps) => {
  const disabledColor = "gray-200";

  const borderColor = `border-2 ${
    disabled ? `border-${disabledColor}` : `border-${accentColor}`
  }`;

  const color = disabled
    ? "text-white"
    : light || outline
    ? `text-${accentColor}`
    : fontColor;

  const backgroundColor = disabled
    ? `bg-${disabledColor}`
    : light
    ? `bg-white`
    : outline
    ? `bg-transparent`
    : `bg-${accentColor}`;

  // hover colors
  const hoverBorderColor = `${
    disabled ? `hover:border-${disabledColor}` : `hover:border-${hoverColor}`
  }`;

  const hoverFontColor = disabled ? "text-white" : `hover:${selectedFontColor}`;

  const hoverBackgroundColor = disabled
    ? `hover:bg-${disabledColor}`
    : light || outline
    ? `hover:bg-white`
    : `hover:bg-${hoverColor}`;

  const cursor = disabled || loading ? "cursor-not-allowed" : "cursor-pointer";

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
        backgroundColor,
        borderColor,
        color,
        hoverBorderColor,
        hoverFontColor,
        hoverBackgroundColor,
        "transition-all duration-300 ease-in-out",
        "hover:scale-102"
        // "bg-transparent"
      )}
    >
      {loading ? (
        <div className="w-full flex justify-center">
          <div
            className={`w-4 h-4 border-2 border-${color} border-t-2 border-t-transparent animate-spin h-5 w-5 rounded-full`}
          />
        </div>
      ) : (
        text
      )}
    </button>
  );
};

export default DefaultButton;

export function PrimaryButton(props: ButtonComponentSharedProps) {
  const styleProps = {
    accentColor: "primary-90",
    hoverColor: "primary-100",
    fontColor: "text-white",
    selectedFontColor: "text-white",
  };

  return (
    <DefaultButton
      {...{
        ...props,
        accentColor: styleProps.accentColor,
        hoverColor: styleProps.hoverColor,
        fontColor: styleProps.fontColor,
        selectedFontColor: styleProps.selectedFontColor,
      }}
    />
  );
}
