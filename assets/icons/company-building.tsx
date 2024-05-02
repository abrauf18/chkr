import React from 'react';

interface CompanyBuildingProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const CompanyBuilding: React.FC<CompanyBuildingProps> = ({ color = '#FF2600', ...props }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Original red icon */}
      <path
        d="M16.5 10L18.6494 10.6448C20.0226 11.0568 20.7092 11.2628 21.1046 11.7942C21.5 12.3256 21.5 13.0425 21.5 14.4761V22"
        stroke={color} // Set stroke color dynamically
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 9H11.5M8.5 13H11.5"
        stroke={color} // Set stroke color dynamically
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 22V19C12.5 18.0572 12.5 17.5858 12.2071 17.2929C11.9142 17 11.4428 17 10.5 17H9.5C8.55719 17 8.08579 17 7.79289 17.2929C7.5 17.5858 7.5 18.0572 7.5 19V22"
        stroke={color} // Set stroke color dynamically
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 22H22.5"
        stroke={color} // Set stroke color dynamically
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3.5 22V6.71724C3.5 4.20649 3.5 2.95111 4.29118 2.32824C5.08237 1.70537 6.24742 2.04355 8.57752 2.7199L13.5775 4.17122C14.9836 4.57937 15.6867 4.78344 16.0933 5.33965C16.5 5.89587 16.5 6.65344 16.5 8.16857V22"
        stroke={color} // Set stroke color dynamically
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CompanyBuilding;
