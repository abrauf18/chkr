import React from "react";

const microsoft: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_488_2744)">
        <path d="M10.2552 10.0052H0.75V0.5H10.2552V10.0052Z" fill="#F1511B" />
        <path d="M20.75 10.0052H11.2449V0.5H20.75V10.0052Z" fill="#80CC28" />
        <path
          d="M10.2549 20.5003H0.75V10.9951H10.2549V20.5003Z"
          fill="#00ADEF"
        />
        <path
          d="M20.75 20.5003H11.2449V10.9951H20.75V20.5003Z"
          fill="#FBBC09"
        />
      </g>
      <defs>
        <clipPath id="clip0_488_2744">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.75 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default microsoft;
