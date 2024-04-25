import React from 'react'

const Checkmark: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_834_7339)">
        <path d="M6.71516 16.0002C7.10497 16.0002 7.41319 15.8279 7.63075 15.4925L16.1973 2.00356C16.3605 1.74067 16.4239 1.54124 16.4239 1.33274C16.4239 0.834154 16.0976 0.507812 15.599 0.507812C15.2364 0.507812 15.037 0.62566 14.8194 0.970138L6.67891 13.9423L2.45454 8.41263C2.22791 8.09531 2.00129 7.96845 1.67494 7.96845C1.15823 7.96845 0.804688 8.32196 0.804688 8.82052C0.804688 9.02908 0.895339 9.26478 1.06758 9.4823L5.7724 15.4744C6.04435 15.8279 6.32537 16.0002 6.71516 16.0002Z" fill="#FF2600" />
      </g>
      <defs>
        <clipPath id="clip0_834_7339">
          <rect width="15.8912" height="16" fill="white" transform="translate(0.804688)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Checkmark