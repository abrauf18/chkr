import React from 'react'

const Eclipse: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 150 71" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="36" cy="35.5" r="35.5" fill="#FFE4DF" />
      <circle cx="62" cy="35.5" r="35.5" fill="#FFC7BD" />
      <circle cx="88" cy="35.5" r="35.5" fill="#FE9785" />
      <circle cx="114" cy="35.5" r="35.5" fill="#FF2600" />
    </svg>
  )
}

export default Eclipse