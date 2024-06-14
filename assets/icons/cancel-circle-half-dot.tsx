import React from "react";

const CancelCircle: React.FC<React.SVGProps<SVGSVGElement>> = ({
  ...props
}) => {
  return (
    <svg
      width="106"
      height="104"
      viewBox="0 0 106 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.6602 51.9994C11.6602 75.9316 30.6433 95.3328 54.0602 95.3328C77.4768 95.3328 96.4602 75.9316 96.4602 51.9994C96.4602 28.067 77.4768 8.66602 54.0602 8.66602"
        stroke="#FF2600"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M22.8892 22.0086C23.4758 21.3732 24.0803 20.7552 24.702 20.1555M36.876 11.8281C37.6456 11.4745 38.427 11.1429 39.2193 10.834M14.7618 34.4157C14.4121 35.2098 14.0844 36.0162 13.7793 36.834"
        stroke="#FF2600"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M66.7798 39L54.0598 52M54.0598 52L41.3398 65M54.0598 52L66.7798 65M54.0598 52L41.3398 39"
        stroke="#FF2600"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CancelCircle;

