import React from 'react';

const Checkin: React.FC<React.SVGProps<SVGSVGElement> & { color?: string }> = ({ color = '#7C7C7C', ...props }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8.00033 14.6663C11.6822 14.6663 14.667 11.6815 14.667 7.99967C14.667 4.31777 11.6822 1.33301 8.00033 1.33301C5.01521 1.33301 2.5165 3.29493 1.66699 5.99967H3.33366" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8 5.33301V7.99967L9.33333 9.33301" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M1.33301 8C1.33301 8.22487 1.34314 8.44727 1.36297 8.66667M5.99967 14.6667C5.77194 14.5917 5.54948 14.5043 5.33301 14.4052M2.13927 11.3333C2.01071 11.0856 1.89603 10.8289 1.79632 10.5641M3.22049 12.871C3.42427 13.0905 3.64171 13.2961 3.87137 13.4861" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};

export default Checkin;
