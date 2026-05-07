interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = "", iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="8" fill="#0B57D0" />
        <path
          d="M8 12C8 9.79086 9.79086 8 12 8H20C22.2091 8 24 9.79086 24 12V17C24 19.2091 22.2091 21 20 21H14L10 24V21H12C9.79086 21 8 19.2091 8 17V12Z"
          fill="white"
        />
        <circle cx="12.5" cy="14.5" r="1.5" fill="#0B57D0" />
        <circle cx="16" cy="14.5" r="1.5" fill="#0B57D0" />
        <circle cx="19.5" cy="14.5" r="1.5" fill="#0B57D0" />
        <path
          d="M22 7L24.5 4.5"
          stroke="#FFD54F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M25 9L27.5 8"
          stroke="#FFD54F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24 12L26.5 12.5"
          stroke="#FFD54F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      {!iconOnly && (
        <span className="text-xl font-bold tracking-tight text-[#101010]">
          Supportly
        </span>
      )}
    </div>
  );
}
