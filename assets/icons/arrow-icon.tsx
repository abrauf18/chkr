import React from 'react';

const ArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="45"
      height="44"
      viewBox="0 0 45 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="22.5" cy="22" r="22" fill="#FF5121" />
      <path
        d="M32.5595 15.5799C32.6594 15.0367 32.3 14.5154 31.7568 14.4156L22.9051 12.7885C22.3619 12.6886 21.8406 13.048 21.7408 13.5912C21.641 14.1344 22.0004 14.6557 22.5435 14.7555L30.4117 16.2018L28.9654 24.07C28.8656 24.6132 29.225 25.1345 29.7681 25.2343C30.3113 25.3341 30.8326 24.9747 30.9325 24.4316L32.5595 15.5799ZM12.9944 29.4249L32.1436 16.2224L31.0084 14.5758L11.8591 27.7783L12.9944 29.4249Z"
        fill="white"
      />
    </svg>
  );
};

export default ArrowIcon;
