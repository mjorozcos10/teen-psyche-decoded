import { useState } from "react";
import { Package, Copy, Check } from "lucide-react";

export function ReflectionBuilder() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [out, setOut] = useState("");
  const [copied, setCopied] = useState(false);

  const build = () => {
    const text = `PERSONAL REFLECTION — CONSTRUCTION ZONE\n\n1. What this taught me about my own high school experience:\n${a || "—"}\n\n2. Most immediately useful psychological concept:\n${b || "—"}\n\n3. How I will adjust my study habits moving forward:\n${c || "—"}\n\nCompiled ${new Date().toLocaleDateString()}.`;
    setOut(text);
    setCopied(false);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(out);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const fields = [
    { label: "1. What did this teach you about your own high school experience?", v: a, set: setA, ph: "Be honest. Specific beats poetic." },
    { label: "2. Which psychological concept is most immediately useful to you?", v: b, set: setB, ph: "Spotlight effect? Yerkes-Dodson? Present bias?" },
    { label: "3. How will you adjust your personal study habits moving forward?", v: c, set: setC, ph: "Name 1-2 hacks you'll try this week." },
  ];

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl border border-slate-200">
      <h3 className="font-display text-3xl font-bold text-slate-900">Personal Reflection Builder</h3>
      <p className="mt-2 text-slate-600">Write three honest answers. We'll package them into something copyable.</p>
      <div className="mt-6 space-y-5">
        {fields.map((f) => (
          <label key={f.label} className="block">
            <span className="text-sm font-semibold text-slate-700">{f.label}</span>
            <textarea
              value={f.v}
              onChange={(e) => f.set(e.target.value)}
              placeholder={f.ph}
              rows={3}
              className="mt-2 w-full rounded-2xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 focus:border-violet-500 outline-none resize-none"
            />
          </label>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={build}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-700 px-6 py-3 text-white font-semibold shadow-lg hover:-translate-y-0.5 transition-all"
        >
          <Package size={18}/> Package My Reflection
        </button>
        {out && (
          <button
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 px-6 py-3 text-slate-800 font-semibold hover:bg-slate-100 transition-all"
          >
            {copied ? <Check size={18}/> : <Copy size={18}/>}
            {copied ? "Copied!" : "Copy Text"}
          </button>
        )}
      </div>
      {out && (
        <pre className="mt-6 whitespace-pre-wrap rounded-2xl bg-slate-950 text-slate-100 p-5 text-sm leading-relaxed overflow-auto max-h-96">{out}</pre>
      )}
    </div>
  );
}