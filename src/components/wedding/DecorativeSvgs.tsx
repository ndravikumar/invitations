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

export const TempleBell = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 10V42" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <path d="M60 42C32 42 18 67 18 98V110H102V98C102 67 88 42 60 42Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="6" />
    <path d="M12 110H108C108 126 95 140 79 140H41C25 140 12 126 12 110Z" fill="currentColor" fillOpacity="0.25" />
    <circle cx="60" cy="118" r="9" fill="currentColor" />
  </svg>
);

export const MandalaBurst = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="14" fill="currentColor" />
    {Array.from({ length: 12 }).map((_, index) => {
      const angle = (index * Math.PI) / 6;
      const x1 = 100 + Math.cos(angle) * 24;
      const y1 = 100 + Math.sin(angle) * 24;
      const x2 = 100 + Math.cos(angle) * 76;
      const y2 = 100 + Math.sin(angle) * 76;
      return <path key={index} d={`M${x1} ${y1}L${x2} ${y2}`} stroke="currentColor" strokeWidth="6" strokeLinecap="round" />;
    })}
    <circle cx="100" cy="100" r="62" stroke="currentColor" strokeWidth="4" strokeDasharray="10 8" />
  </svg>
);

export const FlowerCorner = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="42" cy="42" r="18" fill="currentColor" fillOpacity="0.25" />
    <circle cx="78" cy="42" r="14" fill="currentColor" fillOpacity="0.2" />
    <circle cx="42" cy="78" r="14" fill="currentColor" fillOpacity="0.2" />
    <path d="M16 144C16 78 78 16 144 16" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
  </svg>
);
