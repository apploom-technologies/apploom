export default function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 520 420" role="presentation">
        <defs>
          <linearGradient id="ha-accent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2f6bff" />
            <stop offset="1" stopColor="#7b5cff" />
          </linearGradient>
          <linearGradient id="ha-soft" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#eef3ff" />
            <stop offset="1" stopColor="#f4f0ff" />
          </linearGradient>
        </defs>

        {/* backdrop panel */}
        <rect x="30" y="20" width="460" height="380" rx="28" fill="url(#ha-soft)" />

        {/* soft gradient blobs */}
        <circle className="hero-float-a" cx="410" cy="90" r="120" fill="url(#ha-accent)" opacity="0.16" />
        <circle className="hero-float-b" cx="110" cy="330" r="90" fill="url(#ha-accent)" opacity="0.12" />

        {/* orbit rings */}
        <circle cx="260" cy="210" r="150" fill="none" stroke="#2f6bff" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 7" />
        <circle cx="260" cy="210" r="105" fill="none" stroke="#7b5cff" strokeOpacity="0.3" strokeWidth="1.5" />

        {/* network lines */}
        <g stroke="#2f6bff" strokeOpacity="0.45" strokeWidth="1.5">
          <path d="M260 210 L150 130" />
          <path d="M260 210 L370 140" />
          <path d="M260 210 L350 300" />
          <path d="M260 210 L165 295" />
          <path d="M150 130 L370 140" />
          <path d="M165 295 L350 300" />
        </g>

        {/* center node */}
        <circle cx="260" cy="210" r="34" fill="url(#ha-accent)" />
        <path d="M260 190 L275 230 H268.5 L265.4 222 H254.5 L251.4 230 H245 Z M260 202.5 L256.4 216 H263.6 Z" fill="#ffffff" />

        {/* satellite nodes */}
        <g fill="#ffffff" stroke="#2f6bff" strokeWidth="2">
          <circle cx="150" cy="130" r="13" />
          <circle cx="370" cy="140" r="13" />
          <circle cx="350" cy="300" r="13" />
          <circle cx="165" cy="295" r="13" />
        </g>
        <g fill="#7b5cff">
          <circle cx="150" cy="130" r="4.5" stroke="none" />
          <circle cx="370" cy="140" r="4.5" stroke="none" />
          <circle cx="350" cy="300" r="4.5" stroke="none" />
          <circle cx="165" cy="295" r="4.5" stroke="none" />
        </g>

        {/* accent ticks */}
        <rect x="96" y="86" width="34" height="5" rx="2.5" fill="#2f6bff" opacity="0.5" />
        <rect x="96" y="98" width="20" height="5" rx="2.5" fill="#7b5cff" opacity="0.5" />
        <rect x="392" y="318" width="34" height="5" rx="2.5" fill="#7b5cff" opacity="0.5" />
        <rect x="406" y="330" width="20" height="5" rx="2.5" fill="#2f6bff" opacity="0.5" />
      </svg>
    </div>
  );
}
