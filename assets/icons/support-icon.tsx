import React from 'react'

const SupportIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg"  {...props}>
      <g filter="url(#filter0_d_1506_5502)">
        <rect x="15" y="7" width="48" height="48" rx="24" fill="#FF2600" shape-rendering="crispEdges" />
        <path d="M36.2656 27.8778C36.4859 27.2517 36.9206 26.7238 37.4928 26.3875C38.065 26.0512 38.7377 25.9283 39.3919 26.0405C40.046 26.1527 40.6394 26.4928 41.0668 27.0005C41.4942 27.5083 41.7282 28.1509 41.7272 28.8146C41.7272 30.6882 38.9168 31.625 38.9168 31.625M38.9512 35.375H38.9637M50.25 31C50.25 37.2132 45.2132 42.25 39 42.25C32.7868 42.25 27.75 37.2132 27.75 31C27.75 24.7868 32.7868 19.75 39 19.75C45.2132 19.75 50.25 24.7868 50.25 31Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <defs>
        <filter id="filter0_d_1506_5502" x="0" y="0" width="78" height="78" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.074748 0 0 0 0 0.0590625 0 0 0 0 0.225 0 0 0 0.12 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1506_5502" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1506_5502" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default SupportIcon