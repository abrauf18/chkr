import exp from "constants";
import React from "react";

const WalletAdd: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 20C20 21.1045 20.8955 22 22 22C23.1045 22 24 21.1045 24 20C24 18.8955 23.1045 18 22 18C20.8955 18 20 18.8955 20 20Z"
        stroke="#F24324"
        strokeWidth="1.5"
      />
      <path
        d="M4 16V8C6.80627 8.82844 12.7683 9.90228 20.0051 10.4037C23.9003 10.6737 25.8479 10.8086 26.9239 11.9692C28 13.1297 28 14.9996 28 18.7395V21.4244C28 25.2755 28 27.2011 26.6884 28.3997C25.3767 29.5983 23.5892 29.4236 20.0141 29.0744C19.1429 28.9892 18.2461 28.888 17.3333 28.7683"
        stroke="#F24324"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.5011 10.667C24.0047 8.7693 24.4604 5.31795 23.1027 3.60422C22.2421 2.51802 20.9631 2.62238 19.7091 2.73267C13.1172 3.3124 8.46059 4.49007 5.85735 5.29015C4.73797 5.63419 4 6.72728 4 7.94758"
        stroke="#F24324"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 24.0003H9.33333M9.33333 24.0003H4M9.33333 24.0003V29.3337M9.33333 24.0003V18.667"
        stroke="#F24324"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default WalletAdd;

