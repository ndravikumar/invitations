export const MangoLeafBorder = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 1200 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {Array.from({ length: 18 }).map((_, index) => {
      const x = 50 + index * 62;
      return (
        <g key={x} transform={`translate(${x} 10)`}>
          <path
            d="M12 0C4 7 0 16 0 27C0 43 9 56 22 60C34 52 42 40 42 25C42 13 37 4 28 0C24 4 18 4 12 0Z"
            fill="#2F7D4A"
          />
          <circle cx="21" cy="63" r="5" fill="#C9972B" />
        </g>
      );
    })}
    <path d="M10 10H1190" stroke="#C9972B" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export const KolamPattern = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M100 20C118 52 148 82 180 100C148 118 118 148 100 180C82 148 52 118 20 100C52 82 82 52 100 20Z"
      stroke="currentColor"
      strokeWidth="8"
    />
    <path
      d="M100 48C109 70 130 91 152 100C130 109 109 130 100 152C91 130 70 109 48 100C70 91 91 70 100 48Z"
      stroke="currentColor"
      strokeWidth="6"
    />
    <circle cx="100" cy="100" r="10" fill="currentColor" />
  </svg>
);

export const FloralDivider = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 400 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 30H140" stroke="currentColor" strokeWidth="2" />
    <path d="M260 30H400" stroke="currentColor" strokeWidth="2" />
    <circle cx="200" cy="30" r="10" fill="currentColor" />
    <path d="M170 30C185 26 192 14 200 0C208 14 215 26 230 30C215 34 208 46 200 60C192 46 185 34 170 30Z" fill="currentColor" />
  </svg>
);
