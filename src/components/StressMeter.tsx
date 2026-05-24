import { useState } from "react";
import { Activity } from "lucide-react";

function read(level: number) {
  if (level < 15) return { grade: "F", color: "from-sky-400 to-sky-600", label: "Drooling on the desk", desc: "Zero arousal. Brain in screensaver mode. You could not care less if the building was on fire." };
  if (level < 30) return { grade: "D", color: "from-sky-500 to-indigo-500", label: "Mildly sentient", desc: "You showed up. Your prefrontal cortex did not." };
  if (level < 45) return { grade: "C+", color: "from-emerald-500 to-teal-500", label: "Warming up", desc: "Caffeine is online. Attention budget: limited but functional." };
  if (level < 60) return { grade: "A+", color: "from-emerald-400 to-emerald-600", label: "The Sweet Spot", desc: "Yerkes-Dodson nirvana. You are locked in, present, and lethal at flashcards." };
  if (level < 75) return { grade: "B", color: "from-amber-400 to-amber-600", label: "Buzzing", desc: "Productive but slightly twitchy. Re-reading the same paragraph twice." };
  if (level < 90) return { grade: "D-", color: "from-rose-500 to-rose-600", label: "Spiraling", desc: "Heart rate elevated. You just rewrote the intro for the 6th time." };
  return { grade: "F", color: "from-rose-600 to-red-700", label: "Total Meltdown", desc: "Sympathetic nervous system has the wheel. Crying in a Target parking lot is a real option." };
}

export function StressMeter() {
  const [level, setLevel] = useState(50);
  const r = read(level);
  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl border border-slate-200">
      <div className="flex items-center gap-2 text-indigo-600 text-sm font-semibold uppercase tracking-widest">
        <Activity size={16} /> Stress-Meter Simulator
      </div>
      <h3 className="mt-3 font-display text-3xl font-bold text-slate-900">Slide the arousal. Watch the grade.</h3>
      <div className="mt-6 flex items-baseline gap-4">
        <span className={`font-display text-6xl font-bold bg-gradient-to-br ${r.color} bg-clip-text text-transparent`}>{r.grade}</span>
        <span className="text-slate-500 font-semibold">{r.label}</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={level}
        onChange={(e) => setLevel(Number(e.target.value))}
        className="mt-6 w-full accent-violet-600"
      />
      <div className="mt-2 flex justify-between text-xs font-semibold uppercase tracking-widest text-slate-400">
        <span>Bored</span>
        <span className="text-emerald-600">Sweet spot</span>
        <span>Meltdown</span>
      </div>
      <div className="mt-5 rounded-2xl bg-slate-50 border border-slate-200 p-5 text-slate-700">
        <p className="text-sm uppercase tracking-widest font-semibold text-slate-500 mb-1">Arousal level: {level}%</p>
        <p>{r.desc}</p>
      </div>
    </div>
  );
}