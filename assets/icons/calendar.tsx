import React from "react";

const Calendar: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.16669 11.333H13.3334M6.66669 11.333H6.67417M10.8334 14.6663H6.66669M13.3334 14.6663H13.3259"
        stroke="#232324"
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 2.16699V3.83366M5 2.16699V3.83366"
        stroke="#232324"
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.08331 10.7027C2.08331 7.07162 2.08331 5.25607 3.12675 4.12803C4.17018 3 5.84955 3 9.20831 3H10.7916C14.1504 3 15.8298 3 16.8732 4.12803C17.9166 5.25607 17.9166 7.07162 17.9166 10.7027V11.1307C17.9166 14.7617 17.9166 16.5773 16.8732 17.7053C15.8298 18.8333 14.1504 18.8333 10.7916 18.8333H9.20831C5.84955 18.8333 4.17018 18.8333 3.12675 17.7053C2.08331 16.5773 2.08331 14.7617 2.08331 11.1307V10.7027Z"
        stroke="#232324"
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.5 7.16699H17.5"
        stroke="#232324"
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Calendar;

