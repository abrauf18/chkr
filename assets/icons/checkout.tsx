import React from 'react';

const Checkout: React.FC<React.SVGProps<SVGSVGElement> & { color?: string }> = ({ color = '#7C7C7C', ...props }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7.99967 1.33366C4.31781 1.33366 1.33301 4.31846 1.33301 8.00033C1.33301 11.6822 4.31781 14.667 7.99967 14.667C10.9848 14.667 13.4835 12.7051 14.333 10.0003H12.6663" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8 10.667V8.00033L6.66667 6.66699" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M14.667 8C14.667 7.77513 14.6569 7.55273 14.637 7.33333M10.0003 1.33333C10.2281 1.40827 10.4505 1.49573 10.667 1.5948M13.8607 4.66667C13.9893 4.9144 14.104 5.17113 14.2037 5.43587M12.7795 3.129C12.5757 2.90947 12.3583 2.70393 12.1286 2.51387" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};

export default Checkout;
