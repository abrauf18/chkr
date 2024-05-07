import React from 'react'

const CircleArrowRight: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"  {...props}>
      <path d="M9 17C13.1421 17 16.5 13.6421 16.5 9.5C16.5 5.35786 13.1421 2 9 2C4.85786 2 1.5 5.35786 1.5 9.5C1.5 13.6421 4.85786 17 9 17Z" stroke="#232324" />
      <path d="M7.875 6.5C7.875 6.5 10.125 8.7095 10.125 9.5C10.125 10.2906 7.875 12.5 7.875 12.5" stroke="#232324" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export default CircleArrowRight