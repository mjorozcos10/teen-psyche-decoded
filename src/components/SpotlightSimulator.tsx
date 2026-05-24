import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const events = [
  { id: "wave", label: "Waving back at a stranger who wasn't waving at you", reassure: "Everyone has done it. Everyone forgot. By third period nobody remembered your hand." },
  { id: "voice", label: "Voice cracking during a presentation", reassure: "Two people noticed. One thought it was endearing. The rest were checking their phones." },
  { id: "hydro", label: "Dropping a Hydroflask in a silent library", reassure: "Yes it was loud. Yes you wanted to evaporate. Eight minutes later: forgotten." },
  { id: "fall", label: "Tripping going up the stairs", reassure: "Your nervous system rang the panic bell. Their nervous systems literally did not log it." },
  { id: "answer", label: "Saying the wrong answer in class", reassure: "Teachers love wrong answers. Peers respect risk. Long-term reputation impact: zero." },
];

export function SpotlightSimulator() {
  const [id, setId] = useState(events[0].id);
  const ev = events.find((e) => e.id === id)!;
  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl border border-slate-200">
      <div className="flex items-center gap-2 text-rose-600 text-sm font-semibold uppercase tracking-widest">
        <Eye size={16} /> Spotlight Simulator
      </div>
      <h3 className="mt-3 font-display text-3xl font-bold text-slate-900">Pick your most-replayed cringe moment.</h3>
      <select
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="mt-5 w-full rounded-2xl border-2 border-slate-200 bg-slate-50 px-4 py-3 font-medium text-slate-800 focus:border-violet-500 outline-none"
      >
        {events.map((e) => (
          <option key={e.id} value={e.id}>{e.label}</option>
        ))}
      </select>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-200 p-5">
          <div className="flex items-center gap-2 text-rose-600 text-xs font-bold uppercase tracking-widest"><Eye size={14}/> Your Perception</div>
          <p className="mt-3 font-display text-5xl font-bold text-rose-600">98%</p>
          <p className="mt-1 text-sm text-slate-700">of the room is silently judging you forever.</p>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-sky-50 border border-emerald-200 p-5">
          <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-widest"><EyeOff size={14}/> Actual Reality</div>
          <p className="mt-3 font-display text-5xl font-bold text-emerald-600">2%</p>
          <p className="mt-1 text-sm text-slate-700">noticed. The other 98% are starring in their own movie.</p>
        </div>
      </div>
      <p className="mt-5 rounded-2xl bg-slate-50 border border-slate-200 p-5 text-slate-700 italic">"{ev.reassure}"</p>
    </div>
  );
}