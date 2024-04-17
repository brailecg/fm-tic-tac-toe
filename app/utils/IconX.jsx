import React from "react";

const IconX = ({ fillColor = "#31C3BD", width = "32", height = "32" }) => {
  const iconFillColor = {
    iconGreen: "var(--primary-green)",
    iconGrey: "var(--icon-grey)",
    iconBg: "var(--background-color)",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 64 64`}>
      <path
        fill={iconFillColor[fillColor]}
        fillRule="evenodd"
        d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
      />
    </svg>
  );
};

export default IconX;