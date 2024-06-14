import React from "react";

const Upload: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.4375 10C6.74657 10.0051 6.33081 10.0263 5.99965 10.114C4.49243 10.5131 3.46053 11.8639 3.50116 13.3847C3.51293 13.8252 3.68062 14.3696 4.016 15.4585C4.82314 18.079 6.17963 20.3539 9.21845 20.8997C9.77704 21 10.4056 21 11.6627 21H13.3373C14.5944 21 15.223 21 15.7816 20.8997C18.8204 20.3539 20.1769 18.079 20.984 15.4585C21.3194 14.3696 21.4871 13.8252 21.4988 13.3847C21.5395 11.8639 20.5076 10.5131 19.0004 10.114C18.6692 10.0263 18.2534 10.0051 17.5625 10"
        stroke="#FF2600"
        strokeWidth="1.5"
        stroke-linecap="round"
      />
      <path
        d="M12.5 3V14M12.5 3C12.9684 3 13.3244 3.4381 14.0364 4.3143L15 5.5M12.5 3C12.0316 3 11.6756 3.4381 10.9636 4.3143L10 5.5"
        stroke="#FF2600"
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Upload;

