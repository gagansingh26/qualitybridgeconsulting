// Inline SVG flag components — cross-browser, no font dependency

export const FlagGB = ({ className = "h-4 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <clipPath id="a"><path d="M0 0v30h60V0z"/></clipPath>
    <clipPath id="b"><path d="M30 15h30v15zv15H0zH0V0zV0h30z"/></clipPath>
    <g clipPath="url(#a)">
      <path d="M0 0v30h60V0z" fill="#012169"/>
      <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/>
      <path d="M0 0l60 30m0-30L0 30" clipPath="url(#b)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
);

export const FlagDE = ({ className = "h-4 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 5 3" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="5" height="3" y="0" fill="#000"/>
    <rect width="5" height="2" y="1" fill="#D00"/>
    <rect width="5" height="1" y="2" fill="#FFCE00"/>
  </svg>
);

export const FlagFR = ({ className = "h-4 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="3" height="2" fill="#ED2939"/>
    <rect width="2" height="2" fill="#fff"/>
    <rect width="1" height="2" fill="#002395"/>
  </svg>
);
