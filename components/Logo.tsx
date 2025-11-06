import clsx from "clsx";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <div className={clsx("logo", className)}>
      <svg
        viewBox="0 0 260 140"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="logoTitle logoDesc"
      >
        <title id="logoTitle">Fuji Tour Guide Logo</title>
        <desc id="logoDesc">
          Stylized Mt. Fuji with sunrise and luxury vehicle silhouette for day
          trips.
        </desc>
        <defs>
          <linearGradient
            id="sunriseGradient"
            gradientUnits="userSpaceOnUse"
            x1="40"
            y1="20"
            x2="185"
            y2="115"
          >
            <stop offset="0" stopColor="#F2594B" />
            <stop offset="1" stopColor="#F5A25F" />
          </linearGradient>
          <linearGradient
            id="mountainGradient"
            gradientUnits="userSpaceOnUse"
            x1="70"
            y1="30"
            x2="180"
            y2="120"
          >
            <stop offset="0" stopColor="#223052" />
            <stop offset="1" stopColor="#1D1F2A" />
          </linearGradient>
        </defs>
        <circle
          cx="85"
          cy="60"
          r="38"
          fill="url(#sunriseGradient)"
          opacity="0.95"
        />
        <path
          d="M35 110 L105 32 L150 110 Z"
          fill="url(#mountainGradient)"
          stroke="#F5E5D3"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M70 105 L107 65 L130 105 Z"
          fill="#F5F0E7"
          opacity="0.92"
        />
        <path
          d="M150 92 Q175 80 210 86 Q230 90 240 108 Q215 108 180 108 Q158 108 150 101 Z"
          fill="#1D1F2A"
        />
        <path
          d="M150 96 Q170 84 202 88 Q218 90 228 105 Q206 102 186 102 Q162 102 150 98 Z"
          fill="#2F3C73"
        />
        <path
          d="M175 85 Q180 80 186 80 Q192 80 197 85"
          stroke="#F5E5D3"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <text
          x="30"
          y="132"
          fontFamily="Inter, 'Segoe UI', sans-serif"
          fontWeight="600"
          fontSize="28"
          letterSpacing="3"
          fill="#1D1F2A"
        >
          FUJI TOUR GUIDE
        </text>
        <text
          x="134"
          y="132"
          fontFamily="Inter, 'Segoe UI', sans-serif"
          fontWeight="400"
          fontSize="12"
          letterSpacing="5"
          fill="#2F3C73"
        >
          .COM
        </text>
      </svg>
    </div>
  );
}
