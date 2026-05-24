export function YerkesChart() {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-slate-50 to-violet-50 p-6 border border-slate-200 shadow-sm">
      <svg viewBox="0 0 400 240" className="w-full h-auto">
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
        </defs>
        <line x1="40" y1="200" x2="380" y2="200" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="40" y1="20" x2="40" y2="200" stroke="#cbd5e1" strokeWidth="2" />
        <path d="M 40 195 Q 210 -40 380 195" fill="none" stroke="url(#g)" strokeWidth="4" strokeLinecap="round" />
        <circle cx="210" cy="55" r="7" fill="#10b981" />
        <text x="210" y="42" textAnchor="middle" fontSize="12" fontWeight="700" fill="#065f46">SWEET SPOT</text>
        <text x="60" y="220" fontSize="11" fill="#64748b">Bored</text>
        <text x="340" y="220" fontSize="11" fill="#64748b">Meltdown</text>
        <text x="210" y="225" textAnchor="middle" fontSize="11" fontWeight="600" fill="#475569">Arousal →</text>
        <text x="20" y="110" fontSize="11" fontWeight="600" fill="#475569" transform="rotate(-90 20 110)">Performance →</text>
      </svg>
    </div>
  );
}