import React from "react";

const DeleteIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        width="41"
        height="41"
        rx="7.6875"
        fill="#EA4335"
        fillOpacity="0.1"
      />
      <path
        d="M27.1495 14.7373L26.6001 23.6257C26.4597 25.8966 26.3895 27.0321 25.8203 27.8485C25.5388 28.252 25.1766 28.5927 24.7563 28.8486C23.9064 29.3664 22.7688 29.3664 20.4935 29.3664C18.2152 29.3664 17.0761 29.3664 16.2256 28.8477C15.8051 28.5913 15.4427 28.25 15.1614 27.8457C14.5923 27.0281 14.5237 25.891 14.3864 23.6169L13.8503 14.7373"
        stroke="#EA4335"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17.8402 20.2656H23.1599"
        stroke="#EA4335"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M19.17 23.7402H21.8299"
        stroke="#EA4335"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.5205 14.7369H28.4795M24.0957 14.7369L23.4905 13.4883C23.0884 12.6589 22.8873 12.2442 22.5406 11.9856C22.4637 11.9282 22.3822 11.8772 22.297 11.833C21.913 11.6338 21.4522 11.6338 20.5304 11.6338C19.5856 11.6338 19.1132 11.6338 18.7228 11.8414C18.6363 11.8874 18.5537 11.9405 18.476 12.0001C18.1252 12.2692 17.9292 12.6991 17.5373 13.5589L17.0003 14.7369"
        stroke="#EA4335"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DeleteIcon;

