import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Msg = {
  id: string;
  display_name: string;
  content: string;
  created_at: string;
};

const NAME_KEY = "cz_display_name";
const palette = ["from-violet-500 to-indigo-600", "from-rose-500 to-amber-500", "from-emerald-500 to-teal-600", "from-sky-500 to-indigo-500", "from-fuchsia-500 to-rose-500", "from-amber-500 to-orange-600"];
function hue(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return palette[h % palette.length];
}
function timeAgo(iso: string) {
  const s = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (s < 60) return "just now";
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
}

export function CommunityChat() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem(NAME_KEY) : null;
    if (saved) setName(saved);
  }, []);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data, error } = await supabase
        .from("community_messages")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(100);
      if (!mounted) return;
      if (error) setError(error.message);
      else setMessages(data ?? []);
      setLoading(false);
    })();

    const channel = supabase
      .channel("community_messages_feed")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "community_messages" },
        (payload) => {
          setMessages((prev) => [payload.new as Msg, ...prev].slice(0, 100));
        }
      )
      .subscribe();

    return () => {
      mounted = false;
      supabase.removeChannel(channel);
    };
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const n = name.trim();
    const c = content.trim();
    if (!n || !c) return;
    setSending(true);
    setError(null);
    localStorage.setItem(NAME_KEY, n);
    const { error } = await supabase
      .from("community_messages")
      .insert({ display_name: n.slice(0, 40), content: c.slice(0, 500) });
    setSending(false);
    if (error) setError(error.message);
    else setContent("");
  };

  return (
    <div className="rounded-3xl bg-white shadow-xl border border-slate-200 overflow-hidden">
      <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-700 px-6 py-5 text-white">
        <div className="flex items-center gap-2 text-violet-100 text-xs font-bold uppercase tracking-widest">
          <Sparkles size={14}/> Live · Anonymous-friendly
        </div>
        <h3 className="mt-1 font-display text-3xl font-bold flex items-center gap-2">
          <MessageCircle size={26}/> Community Wall
        </h3>
        <p className="mt-1 text-violet-100/90 text-sm">Drop a thought. Share a win. Ask the void a question. Be kind — these are real humans.</p>
      </div>

      <form onSubmit={submit} className="p-6 border-b border-slate-200 bg-slate-50">
        <div className="grid sm:grid-cols-[180px_1fr_auto] gap-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={40}
            placeholder="Display name"
            className="rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-medium focus:border-violet-500 outline-none"
            required
          />
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={500}
            placeholder="What's on your mind?"
            className="rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-sm focus:border-violet-500 outline-none"
            required
          />
          <button
            disabled={sending}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-700 px-5 py-3 text-white font-semibold shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send size={16}/> {sending ? "Posting…" : "Post"}
          </button>
        </div>
        <div className="mt-2 flex justify-between text-xs text-slate-500">
          <span>Be kind. No personal info. Mods may remove abusive content.</span>
          <span className={content.length > 450 ? "text-rose-600 font-semibold" : ""}>{content.length}/500</span>
        </div>
        {error && <p className="mt-2 text-sm text-rose-600">{error}</p>}
      </form>

      <div ref={scrollRef} className="max-h-[520px] overflow-y-auto divide-y divide-slate-100">
        {loading ? (
          <div className="p-10 text-center text-slate-500">Loading the wall…</div>
        ) : messages.length === 0 ? (
          <div className="p-10 text-center">
            <p className="font-display text-xl font-bold text-slate-900">It's quiet in here.</p>
            <p className="mt-1 text-slate-500">Be the first to break the silence.</p>
          </div>
        ) : (
          messages.map((m) => (
            <div key={m.id} className="p-5 flex gap-4 hover:bg-slate-50 transition-colors animate-fade-up">
              <div className={`shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${hue(m.display_name)} text-white font-bold shadow-md`}>
                {m.display_name.slice(0, 1).toUpperCase()}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="font-display font-bold text-slate-900">{m.display_name}</span>
                  <span className="text-xs text-slate-400">{timeAgo(m.created_at)}</span>
                </div>
                <p className="mt-1 text-slate-700 leading-relaxed whitespace-pre-wrap break-words">{m.content}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}