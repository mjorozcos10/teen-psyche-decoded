import { useEffect, useRef, useState } from "react";
import { Play, Pause, RotateCcw, Flame } from "lucide-react";

const WORK = 20 * 60;
const BREAK = 5 * 60;

export function PomodoroTimer() {
  const [seconds, setSeconds] = useState(WORK);
  const [running, setRunning] = useState(false);
  const [mode, setMode] = useState<"work" | "break">("work");
  const ref = useRef<number | null>(null);

  useEffect(() => {
    if (!running) return;
    ref.current = window.setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          if (mode === "work") {
            setMode("break");
            return BREAK;
          }
          setMode("work");
          setRunning(false);
          return WORK;
        }
        return s - 1;
      });
    }, 1000);
    return () => {
      if (ref.current) window.clearInterval(ref.current);
    };
  }, [running, mode]);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  const total = mode === "work" ? WORK : BREAK;
  const pct = ((total - seconds) / total) * 100;

  const status = !running && seconds === WORK && mode === "work"
    ? "Ready to work? Your limbic system isn't."
    : mode === "break"
      ? "Take a 5-min break! Stretch. Hydrate. No TikTok loop."
      : running
        ? "🔥 Hacking your Present Bias right now..."
        : "Paused. The closet can wait.";

  const reset = () => {
    setRunning(false);
    setMode("work");
    setSeconds(WORK);
  };

  return (
    <div className="rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 p-1 shadow-xl">
      <div className="rounded-[1.4rem] bg-slate-950 p-8 text-white">
        <div className="flex items-center gap-2 text-violet-300 text-sm font-semibold uppercase tracking-widest">
          <Flame size={16} /> Pomodoro Block Timer
        </div>
        <div className="mt-4 flex items-end gap-3 font-display">
          <span className="text-7xl sm:text-8xl font-bold tabular-nums">{mm}:{ss}</span>
          <span className="mb-3 text-violet-300 uppercase text-xs tracking-widest">{mode}</span>
        </div>
        <div className="mt-5 h-2 w-full rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400 transition-all duration-700"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="mt-5 text-violet-100/90">{status}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => setRunning((r) => !r)}
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-slate-900 font-semibold shadow-lg hover:-translate-y-0.5 transition-all"
          >
            {running ? <Pause size={18} /> : <Play size={18} />}
            {running ? "Pause" : "Start 20-Min Block"}
          </button>
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-white hover:bg-white/10 transition-all"
          >
            <RotateCcw size={18} /> Reset
          </button>
        </div>
      </div>
    </div>
  );
}