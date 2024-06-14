import React from "react";

const Cardcheck: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="11.5" fill="white" stroke="#E4E7EC" />
      <path
        d="M17.3332 8.66699L9.99991 16.0003L6.6665 12.667"
        stroke="#E4E7EC"
        strokeWidth="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Cardcheck;

