import React from "react"

const BoltPattern = () => {
  return (
    <div className={`image-mask-b-20`}>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-full text-secondary h-[500px]">
        <defs>
          <pattern id="p" width="200" height="200" patternUnits="userSpaceOnUse">
            <circle fill="blue" cx="100" cy="100" r="45" style={{ filter: "url(#displacementFilter2)" }} />
            <circle r="20" style={{ filter: "url(#displacementFilter2)" }} />
            <circle cx="200" r="20" style={{ filter: "url(#displacementFilter2)" }} />
            <circle cy="200" r="20" style={{ filter: "url(#displacementFilter2)" }} />
            <circle cx="200" cy="200" r="20" style={{ filter: "url(#displacementFilter2)" }} />
          </pattern>
          <filter id="displacementFilter2" x="-25%" y="-25%" width="150%" height="150%">
            <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="21" result="turbulence" />
            <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="50" />
          </filter>
        </defs>

        <rect fill="url(#p)" width="100%" height="100%" />
      </svg>
    </div>
  )
}

export default BoltPattern
