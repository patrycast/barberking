import { Pole } from "../styles";

const bands = Array.from({ length: 9 }, (_, i) => i * 40 - 40);

export default function BarberPole({ className }) {
  return (
    <Pole className={className} viewBox="0 0 60 220" role="img" aria-label="Poste de barbero">
      <defs>
        <clipPath id="tube">
          <rect x="14" y="30" width="32" height="160" rx="5" />
        </clipPath>
        <linearGradient id="shine" x1="0" x2="1">
          <stop offset="0" stopColor="#000" stopOpacity=".45" />
          <stop offset=".3" stopColor="#fff" stopOpacity=".35" />
          <stop offset=".55" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".5" />
        </linearGradient>
        <linearGradient id="metal" x1="0" x2="1">
          <stop offset="0" stopColor="#6b6b6b" />
          <stop offset=".5" stopColor="#f2f2f2" />
          <stop offset="1" stopColor="#5a5a5a" />
        </linearGradient>
      </defs>

      <circle cx="30" cy="12" r="9" fill="url(#metal)" />
      <rect x="20" y="18" width="20" height="14" rx="3" fill="url(#metal)" />

      <g clipPath="url(#tube)">
        <rect x="14" y="30" width="32" height="160" fill="#f5f5f5" />
        <g className="stripes">
          {bands.map((y) => (
            <g key={y}>
              <polygon points={`10,${y + 20} 50,${y} 50,${y + 12} 10,${y + 32}`} fill="#ff2d3d" />
              <polygon points={`10,${y + 40} 50,${y + 20} 50,${y + 32} 10,${y + 52}`} fill="#2d6bff" />
            </g>
          ))}
        </g>
        <rect x="14" y="30" width="32" height="160" fill="url(#shine)" />
      </g>

      <rect x="20" y="188" width="20" height="14" rx="3" fill="url(#metal)" />
      <rect x="14" y="200" width="32" height="12" rx="4" fill="url(#metal)" />
    </Pole>
  );
}
