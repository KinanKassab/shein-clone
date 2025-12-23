import React from 'react';

const SheinIcon = ({ width = 80, height = 24, color = 'currentColor', ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 80 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <text
      x="40"
      y="18"
      fontFamily="Arial, sans-serif"
      fontSize="16"
      fontWeight="900"
      fill={color}
      textAnchor="middle"
      letterSpacing="-0.5"
    >
      SHEIN
    </text>
  </svg>
);

export default SheinIcon;

