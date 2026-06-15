export const GridBg = () => {
  const CELL = 36 // grid cell size in px
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        {/* Single cell: thin horizontal + vertical lines forming a grid */}
        <pattern
          id="grid-cell"
          width={CELL}
          height={CELL}
          patternUnits="userSpaceOnUse"
        >
          {/* vertical line */}
          <line
            x1={CELL}
            y1="0"
            x2={CELL}
            y2={CELL}
            stroke="rgba(255,255,255,0.28)"
            strokeWidth="0.75"
          />
          {/* horizontal line */}
          <line
            x1="0"
            y1={CELL}
            x2={CELL}
            y2={CELL}
            stroke="rgba(255,255,255,0.28)"
            strokeWidth="0.75"
          />
          {/* intersection dot */}
          <circle
            cx={CELL}
            cy={CELL}
            r="1.6"
            fill="rgba(255,255,255,0.5)"
          />
        </pattern>

      </defs>

      {/* Grid layer — full coverage, no mask */}
      <rect
        width="100%"
        height="100%"
        fill="url(#grid-cell)"
      />
    </svg>
  )
}
