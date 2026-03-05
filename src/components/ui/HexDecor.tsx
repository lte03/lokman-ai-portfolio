export default function HexDecor() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 900"
    >
      <defs>
        <linearGradient id="hg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7A59" />
          <stop offset="55%" stopColor="#F4C95D" />
          <stop offset="100%" stopColor="#7CE0C3" />
        </linearGradient>
      </defs>

      <polygon
        points="1450,100 1350,273.2 1150,273.2 1050,100 1150,-73.2 1350,-73.2"
        fill="none" stroke="url(#hg)" strokeWidth="1.5" opacity="0.18"
      />
      <polygon
        points="380,800 290,955.9 110,955.9 20,800 110,644.1 290,644.1"
        fill="none" stroke="url(#hg)" strokeWidth="1.5" opacity="0.14"
      />
      <polygon
        points="1220,500 1160,603.9 1040,603.9 980,500 1040,396.1 1160,396.1"
        fill="none" stroke="url(#hg)" strokeWidth="1.2" opacity="0.22"
      />
      <polygon
        points="240,200 195,278 105,278 60,200 105,122 195,122"
        fill="none" stroke="url(#hg)" strokeWidth="1" opacity="0.2"
      />
      <polygon
        points="1395,750 1357.5,815 1282.5,815 1245,750 1282.5,685 1357.5,685"
        fill="none" stroke="url(#hg)" strokeWidth="1" opacity="0.18"
      />
      <polygon
        points="1020,450 870,709.8 570,709.8 420,450 570,190.2 870,190.2"
        fill="none" stroke="url(#hg)" strokeWidth="1" opacity="0.05"
      />
    </svg>
  )
}
