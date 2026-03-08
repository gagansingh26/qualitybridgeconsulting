// Inline SVG flag components — cross-browser, rounded corners, no font dependency

export const FlagGB = ({ className = "h-4 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <clipPath id="gb-clip"><rect width="60" height="30" rx="5" ry="5" /></clipPath>
    </defs>
    <g clipPath="url(#gb-clip)">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
      <path d="M0 0l60 30m0-30L0 30" stroke="#C8102E" strokeWidth="4" />
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

export const FlagDE = ({ className = "h-4 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <clipPath id="de-clip"><rect width="60" height="36" rx="5" ry="5" /></clipPath>
    </defs>
    <g clipPath="url(#de-clip)">
      <rect width="60" height="12" y="0" fill="#000" />
      <rect width="60" height="12" y="12" fill="#D00" />
      <rect width="60" height="12" y="24" fill="#FFCE00" />
    </g>
  </svg>
);

export const FlagFR = ({ className = "h-4 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <clipPath id="fr-clip"><rect width="60" height="36" rx="5" ry="5" /></clipPath>
    </defs>
    <g clipPath="url(#fr-clip)">
      <rect width="60" height="36" fill="#ED2939" />
      <rect width="40" height="36" fill="#fff" />
      <rect width="20" height="36" fill="#002395" />
    </g>
  </svg>
);
