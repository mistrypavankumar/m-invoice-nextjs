import React from "react";

type ButtonProps = {
  label: string;
  btnType?: string;
  onClick: () => void;
  btnWidth?: number;
  customeStyle?: string;
};

const Button = ({
  label,
  btnType = "fill",
  onClick,
  btnWidth,
  customeStyle,
}: ButtonProps) => {
  return (
    <button
      className={`${
        btnType === "fill"
          ? `scaleHoverEffect bg-primaryDarkBlue font-semibold text-white px-2 md:px-6 md:py-1.5 rounded-md w-[${btnWidth}%] ${customeStyle}`
          : btnType === "outline"
          ? `scaleHoverEffect border-2 bg-transparent text-primaryDarkBlue font-semibold border-primaryDarkBlue px-2 md:px-6 py-1.5 rounded-md w-[${btnWidth}%] ${customeStyle}`
          : ""
      } `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
