import React from "react";

const CompanyInfoWhite: React.FC<React.SVGProps<SVGSVGElement>> = ({
  ...props
}) => {
  return (
    <svg
      width="62"
      height="60"
      viewBox="0 0 62 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_491_2081)">
        <rect
          x="6"
          y="2"
          width="50"
          height="48"
          rx="24"
          fill="white"
          shape-rendering="crispEdges"
        />
        <path
          d="M35 24L37.1494 24.6448C38.5226 25.0568 39.2092 25.2628 39.6046 25.7942C40 26.3256 40 27.0425 40 28.4761V36"
          stroke="#FF2600"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M27 23H30M27 27H30"
          stroke="#FF2600"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31 36V33C31 32.0572 31 31.5858 30.7071 31.2929C30.4142 31 29.9428 31 29 31H28C27.0572 31 26.5858 31 26.2929 31.2929C26 31.5858 26 32.0572 26 33V36"
          stroke="#FF2600"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M21 36H41"
          stroke="#FF2600"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M22 36V20.7172C22 18.2065 22 16.9511 22.7912 16.3282C23.5824 15.7054 24.7474 16.0436 27.0775 16.7199L32.0775 18.1712C33.4836 18.5794 34.1867 18.7834 34.5933 19.3397C35 19.8959 35 20.6534 35 22.1686V36"
          stroke="#FF2600"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_491_2081"
          x="0"
          y="0"
          width="62"
          height="60"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_491_2081"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_491_2081"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CompanyInfoWhite;

