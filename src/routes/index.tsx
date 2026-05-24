import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Brain, Menu, X, Home, BookOpen, HeartPulse, Users, ShieldCheck, FileText,
  Sparkles, Target, Compass, Timer, Layers, Wind, Activity, Heart, ClipboardList,
  HandHeart, AlertTriangle, Cigarette, GraduationCap, Handshake, LifeBuoy, MessageCircle
} from "lucide-react";
import { PomodoroTimer } from "@/components/PomodoroTimer";
import { StressMeter } from "@/components/StressMeter";
import { SpotlightSimulator } from "@/components/SpotlightSimulator";
import { ReflectionBuilder } from "@/components/ReflectionBuilder";
import { YerkesChart } from "@/components/YerkesChart";
import { CommunityChat } from "@/components/CommunityChat";
import heroBrain from "@/assets/hero-brain.jpg";
import procrastinationImg from "@/assets/procrastination.jpg";
import studyNotesImg from "@/assets/study-notes.jpg";
import mindfulnessImg from "@/assets/mindfulness.jpg";
import spotlightImg from "@/assets/spotlight.jpg";
import friendsImg from "@/assets/friends.jpg";
import shieldImg from "@/assets/shield.jpg";

export const Route = createFileRoute("/")({ component: Page });

type TabId = "home" | "study" | "stress" | "social" | "resist" | "community" | "portfolio";

const TABS: { id: TabId; label: string; icon: typeof Home }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "study", label: "Study Hacks", icon: BookOpen },
  { id: "stress", label: "Stress & Mood", icon: HeartPulse },
  { id: "social", label: "Social & Squads", icon: Users },
  { id: "resist", label: "Resistance", icon: ShieldCheck },
  { id: "community", label: "Community", icon: MessageCircle },
  { id: "portfolio", label: "Portfolio", icon: FileText },
];

function Page() {
  const [tab, setTab] = useState<TabId>("home");
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }, [tab]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans-body">
      <Header tab={tab} setTab={setTab} open={open} setOpen={setOpen} />
      <main key={tab} className="animate-fade-up">
        {tab === "home" && <HomeTab setTab={setTab} />}
        {tab === "study" && <StudyTab />}
        {tab === "stress" && <StressTab />}
        {tab === "social" && <SocialTab />}
        {tab === "resist" && <ResistTab />}
        {tab === "community" && <CommunityTab />}
        {tab === "portfolio" && <PortfolioTab />}
      </main>
      <Footer />
    </div>
  );
}

function Header({ tab, setTab, open, setOpen }: { tab: TabId; setTab: (t: TabId) => void; open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <button onClick={() => setTab("home")} className="flex items-center gap-2.5 group">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 text-white shadow-lg shadow-violet-500/30">
              <Brain size={18} />
            </span>
            <span className="font-display font-bold text-lg text-slate-900 group-hover:text-violet-700 transition-colors">Construction Zone</span>
          </button>
          <nav className="hidden lg:flex items-center gap-1">
            {TABS.map((t) => {
              const active = tab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold transition-all ${
                    active
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/30"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <t.icon size={15} /> {t.label}
                </button>
              );
            })}
          </nav>
          <button onClick={() => setOpen(!open)} className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-slate-200 text-slate-700">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <div className={`lg:hidden grid transition-all overflow-hidden ${open ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"}`}>
          <div className="min-h-0">
            <div className="flex flex-col gap-1 pt-2">
              {TABS.map((t) => {
                const active = tab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    className={`inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-left transition-all ${
                      active ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white" : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <t.icon size={16} /> {t.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ----------- HOME ----------- */
function HomeTab({ setTab }: { setTab: (t: TabId) => void }) {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-slate-900 to-violet-950 text-white">
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-violet-500/30 blur-3xl animate-glow" />
        <div className="absolute -bottom-40 -right-20 h-[32rem] w-[32rem] rounded-full bg-indigo-500/30 blur-3xl animate-glow" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-violet-200">
              <Sparkles size={14} /> The teen brain · evidence-based
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02]">
              Your brain is a <span className="bg-gradient-to-r from-amber-300 via-rose-300 to-violet-300 bg-clip-text text-transparent">Construction Zone</span>.
              <br className="hidden sm:block" /> Here is the missing operator's manual.
            </h1>
            <p className="mt-6 text-lg text-indigo-100/90 max-w-xl">
              Welcome to high school: where your prefrontal cortex is half-built, your limbic system runs the show, and one bad
              Tuesday can feel like the apocalypse. Here we translate abstract psychological concepts into a practical,
              evidence-based roadmap.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => setTab("study")} className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3 font-semibold shadow-xl hover:-translate-y-0.5 transition-all">
                Start with Study Hacks <BookOpen size={18}/>
              </button>
              <button onClick={() => setTab("stress")} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-all">
                I'm stressed RIGHT now <HeartPulse size={18}/>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -m-6 rounded-[2rem] bg-gradient-to-br from-violet-500/30 to-indigo-500/20 blur-2xl" />
            <img src={heroBrain} alt="Neon brain under construction" width={1024} height={1024}
              className="relative rounded-[2rem] border border-white/10 shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader eyebrow="The Overview" title="Three reasons this site exists" />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <OverviewCard icon={Target} accent="from-amber-400 to-rose-500"
            title="Target Audience"
            body="Built for stressed high schoolers — plus a diagnostic cheat-sheet for the parents and teachers trying to decode them." />
          <OverviewCard icon={Compass} accent="from-emerald-400 to-sky-500"
            title="Our Goal & Purpose"
            body="Applying cognition, developmental, and mental-health theories to actual real-life Tuesday-at-2pm situations." />
          <OverviewCard icon={Brain} accent="from-violet-500 to-indigo-600"
            title="Why Psychology Matters"
            body="A perspective check: adolescence is a temporary software update, not your final operating system." />
        </div>
      </section>
    </>
  );
}

function OverviewCard({ icon: Icon, title, body, accent }: { icon: typeof Home; title: string; body: string; accent: string }) {
  return (
    <div className="group rounded-3xl bg-white p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all">
      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg`}>
        <Icon size={22} />
      </div>
      <h3 className="mt-5 font-display text-2xl font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600 leading-relaxed">{body}</p>
    </div>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-3xl">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">{eyebrow}</span>
      <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">{title}</h2>
      {sub && <p className="mt-4 text-lg text-slate-600">{sub}</p>}
    </div>
  );
}

function PageHero({ kicker, title, sub, accent }: { kicker: string; title: string; sub: string; accent: string }) {
  return (
    <section className={`bg-gradient-to-r ${accent} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">{kicker}</span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">{title}</h1>
        <p className="mt-5 text-lg text-white/90 max-w-3xl">{sub}</p>
      </div>
    </section>
  );
}

/* ----------- STUDY ----------- */
function StudyTab() {
  return (
    <>
      <PageHero kicker="Tab 02 · Cognition" accent="from-violet-600 via-indigo-600 to-purple-700"
        title="Cognition & Study Hacks: the science of hacking your attention span."
        sub="Why your brain wants you to scroll TikTok at 11pm — and the tactical, non-cringe ways to override it." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <Block badge="Section A" title="Present Bias & Procrastination" tone="amber">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Concept text="Your limbic system (the emotional dramatic teen of your brain) demands instant relief from task-stress — usually via TikTok, snacks, or a sudden urge to reorganize your sock drawer." />
              <DramaCard text="It's 11:00 PM Sunday. Essay due 8 AM. You are deep-cleaning your closet." />
              <h4 className="font-display font-bold mt-6 text-xl text-slate-900">Tactical Hacks</h4>
              <ul className="mt-3 space-y-2 text-slate-700">
                <Tick>The <b>20-Minute Trick</b>: commit to 20 minutes only. Momentum does the rest.</Tick>
                <Tick><b>Digital Enforcers</b>: Finish, StayFocusd, or SelfControl block the dopamine drip.</Tick>
                <Tick>Phone in another room. Friction is your friend.</Tick>
              </ul>
            </div>
            <img src={procrastinationImg} loading="lazy" width={1280} height={800} alt="Frustrated student vs scrolling student"
              className="rounded-3xl shadow-xl border border-slate-200" />
          </div>
        </Block>

        <PomodoroTimer />

        <Block badge="Section B" title="Memory Encoding — your brain is NOT a camera" tone="emerald">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <img src={studyNotesImg} loading="lazy" width={1280} height={800} alt="Aesthetic color-coded study notes"
              className="rounded-3xl shadow-xl border border-slate-200 order-2 lg:order-1" />
            <div className="order-1 lg:order-2">
              <Concept text="Maintenance rehearsal (reading the same page 12 times) feels productive but barely sticks. Elaborative rehearsal — connecting new info to what you already know — is why your brain actually files it." />
              <h4 className="font-display font-bold mt-6 text-xl text-slate-900">Tactical Hacks</h4>
              <ul className="mt-3 space-y-2 text-slate-700">
                <Tick>Color-coded binders + visual mind-maps recruit spatial memory.</Tick>
                <Tick>Study Centers and Homework Clubs add accountability + retrieval practice.</Tick>
                <Tick>Teach the concept to a friend. If you can't, you don't actually know it.</Tick>
              </ul>
            </div>
          </div>
        </Block>
      </div>
    </>
  );
}

/* ----------- STRESS ----------- */
function StressTab() {
  const tier3 = [
    { icon: Brain, title: "CBT Hacks", body: "Acknowledge & test negative thoughts. Reduces depression risk by 63% (Weisz et al.).", accent: "from-violet-500 to-indigo-600" },
    { icon: Wind, title: "Somatic Regulation", body: "Mindfulness + yoga reset the sympathetic fight-or-flight trigger.", accent: "from-emerald-500 to-teal-600" },
    { icon: Heart, title: "ACT", body: "Welcome emotional states without wrestling them. Feelings are weather, not verdicts.", accent: "from-rose-500 to-amber-500" },
    { icon: ClipboardList, title: "Screening Metrics", body: "PHQ-9, GAD-7 — what your counselor actually uses (Screening & Evaluation Compendium).", accent: "from-sky-500 to-indigo-500" },
  ];
  return (
    <>
      <PageHero kicker="Tab 03 · Mental Health" accent="from-indigo-700 via-violet-700 to-rose-600"
        title="Stress Management & Mental Health: clinical workloads & panic spirals."
        sub="Stress isn't the villain. Too much (or too little) of it is. Here's how to find — and stay near — the peak." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <Block badge="Section A" title="Yerkes-Dodson Law — the stress curve" tone="violet">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <Concept text="Perform too relaxed and you flatline (F, drooling). Perform too cranked and you melt down (F, crying). The Sweet Spot in the middle is where your A+ lives." />
            <YerkesChart />
          </div>
        </Block>

        <StressMeter />

        <Block badge="Section B" title="Science-backed heavy-duty tools (Tier-3)" tone="emerald">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {tier3.map((t) => (
              <div key={t.title} className="rounded-3xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${t.accent} text-white shadow-md`}>
                  <t.icon size={20} />
                </div>
                <h4 className="mt-4 font-display text-xl font-bold text-slate-900">{t.title}</h4>
                <p className="mt-1.5 text-slate-600 text-sm leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
          <img src={mindfulnessImg} loading="lazy" width={1280} height={800} alt="Teen breathing calmly outdoors"
            className="mt-8 rounded-3xl shadow-xl border border-slate-200 w-full object-cover max-h-[420px]" />
        </Block>
      </div>
    </>
  );
}

/* ----------- SOCIAL ----------- */
function SocialTab() {
  const programs = [
    { icon: HandHeart, title: "Sources of Strength", body: "Peer leaders connect friends to trusted adults and resources before crisis hits.", accent: "from-amber-500 to-rose-500" },
    { icon: LifeBuoy, title: "Signs of Suicide (SOS)", body: "ACT: Acknowledge the signs, Care openly, Tell a trusted adult. No solo heroes.", accent: "from-rose-500 to-violet-600" },
    { icon: Handshake, title: "Safe Dates", body: "Evidence-based program preventing dating violence and drama escalation (Foshee et al.).", accent: "from-sky-500 to-indigo-600" },
  ];
  return (
    <>
      <PageHero kicker="Tab 04 · Social" accent="from-rose-600 via-fuchsia-600 to-violet-700"
        title="Social Relationships & Spotlight Effect: you are not center stage."
        sub="The bad news: nobody is paying as much attention to you as you think. The good news: nobody is paying as much attention to you as you think." />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          <Block badge="Section A" title="Spotlight Effect & Asch Conformity" tone="rose">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Concept text="Spotlight Effect: you wildly overestimate how much others notice your flaws. Asch Conformity: you'll second-guess obviously-correct answers to avoid social isolation. Both are normal. Both are escapable." />
                <DramaCard text="You drop a Hydroflask in a silent library. Your soul leaves your body. Everyone else? Forgot in 14 seconds." />
              </div>
              <img src={spotlightImg} loading="lazy" width={1280} height={800} alt="Self-conscious student in a classroom"
                className="rounded-3xl shadow-xl border border-slate-200" />
            </div>
          </Block>

          <SpotlightSimulator />

          <Block badge="Section B" title="Squad-based peer safety support" tone="violet">
            <div className="grid md:grid-cols-3 gap-5">
              {programs.map((p) => (
                <div key={p.title} className="rounded-3xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${p.accent} text-white shadow-md`}>
                    <p.icon size={20} />
                  </div>
                  <h4 className="mt-4 font-display text-xl font-bold text-slate-900">{p.title}</h4>
                  <p className="mt-1.5 text-slate-600 text-sm leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
            <img src={friendsImg} loading="lazy" width={1280} height={800} alt="Group of friends high-fiving"
              className="mt-8 rounded-3xl shadow-xl border border-slate-200 w-full object-cover max-h-[420px]" />
          </Block>
        </div>
    </>
  );
}

/* ----------- RESIST ----------- */
function ResistTab() {
  const programs = [
    { icon: GraduationCap, title: "Life Skills Training (LST)", body: "Builds refusal skills, self-management, and social competence — gold-standard prevention curriculum.", accent: "from-emerald-500 to-teal-600" },
    { icon: Cigarette, title: "Project TND", body: "27% cigarette use drop. 22% cannabis use drop (Sussman et al.). Real numbers, real classrooms.", accent: "from-amber-500 to-rose-500" },
    { icon: HandHeart, title: "Big Brothers Big Sisters", body: "Mentorship cuts initiation rates by giving the prefrontal cortex an outside ally.", accent: "from-sky-500 to-indigo-600" },
  ];
  return (
    <>
      <PageHero kicker="Tab 05 · Resistance" accent="from-emerald-700 via-teal-700 to-indigo-800"
        title="Substance Use Prevention: the neurological reality."
        sub="Vapes and alcohol aren't 'escape.' They chemically hand your future self a worse version of today's problem." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <Block badge="Section A" title="Maladaptive Coping — the fake escape" tone="emerald">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Concept text="Using substances to dodge academic stress short-circuits your dopamine baseline. Tomorrow's mood floor is lower than today's. The 'escape' is a loan with brutal interest." />
              <DramaCard text="The hit feels like relief. The next 48 hours feel like sandpaper. Repeat. That's the trap." />
            </div>
            <img src={shieldImg} loading="lazy" width={1280} height={800} alt="Neon shield vs cracked barrier"
              className="rounded-3xl shadow-xl border border-slate-200 bg-slate-950" />
          </div>
        </Block>

        <Block badge="Section B" title="Built-in resistance & programs" tone="indigo">
          <div className="grid md:grid-cols-3 gap-5">
            {programs.map((p) => (
              <div key={p.title} className="rounded-3xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${p.accent} text-white shadow-md`}>
                  <p.icon size={20} />
                </div>
                <h4 className="mt-4 font-display text-xl font-bold text-slate-900">{p.title}</h4>
                <p className="mt-1.5 text-slate-600 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </Block>

        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-violet-950 text-white p-8 lg:p-10 shadow-xl">
          <div className="flex items-center gap-2 text-amber-300 text-sm font-bold uppercase tracking-widest">
            <AlertTriangle size={16}/> Emergency Support — Physical Alternatives
          </div>
          <div className="mt-5 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h4 className="font-display text-2xl font-bold">5-4-3-2-1 Grounding</h4>
              <p className="mt-2 text-indigo-100/90">Name <b>5</b> things you see, <b>4</b> you can touch, <b>3</b> you hear, <b>2</b> you smell, <b>1</b> you taste. Yanks you out of the spiral, back into your body.</p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h4 className="font-display text-2xl font-bold">Box Breathing</h4>
              <p className="mt-2 text-indigo-100/90">Inhale <b>4</b>s · hold <b>4</b>s · exhale <b>4</b>s · hold <b>4</b>s. Repeat 4 cycles. Resets your vagal tone in under a minute.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ----------- PORTFOLIO ----------- */
function CommunityTab() {
  return (
    <>
      <PageHero kicker="Tab 06 · Community" accent="from-violet-700 via-fuchsia-600 to-rose-600"
        title="Community Wall: you are not the only one."
        sub="A live, open chat for anyone surviving high school. Share a tactic that worked, a meltdown you escaped, or just say hi." />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CommunityChat />
        <p className="mt-6 text-sm text-slate-500 text-center">
          In crisis? Don't post — call or text <span className="font-bold text-slate-700">988</span>. Real help, right now.
        </p>
      </div>
    </>
  );
}

function PortfolioTab() {
  const refs = [
    "Foshee, V. A., Bauman, K. E., Ennett, S. T., Linder, G. F., Benefield, T., & Suchindran, C. (2004). Assessing the long-term effects of the Safe Dates program and a booster in preventing and reducing adolescent dating violence victimization and perpetration. American Journal of Public Health, 94(4), 619–624.",
    "Sussman, S., Sun, P., Rohrbach, L. A., & Spruijt-Metz, D. (2012). One-year outcomes of a drug abuse prevention program for older teens and emerging adults: Evaluating a motivational interviewing booster component. Health Psychology, 31(4), 476–485.",
    "Weisz, J. R., McCarty, C. A., & Valeri, S. M. (2006). Effects of psychotherapy for depression in children and adolescents: A meta-analysis. Psychological Bulletin, 132(1), 132–149.",
    "Wyman, P. A., Brown, C. H., LoMurray, M., Schmeelk-Cone, K., Petrova, M., Yu, Q., Walsh, E., Tu, X., & Wang, W. (2010). An outcome evaluation of the Sources of Strength suicide prevention program delivered by adolescent peer leaders in high schools. American Journal of Public Health, 100(9), 1653–1661.",
  ];
  return (
    <>
      <PageHero kicker="Tab 07 · Portfolio" accent="from-violet-700 via-purple-700 to-fuchsia-700"
        title="Portfolio, Reflections & Citations."
        sub="Package what you learned. Cite what holds it up." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <ReflectionBuilder />
        <div className="rounded-3xl bg-white p-8 shadow-xl border border-slate-200">
          <div className="flex items-center gap-2 text-violet-600 text-sm font-semibold uppercase tracking-widest">
            <Layers size={16}/> Scientific Bibliography (APA)
          </div>
          <h3 className="mt-3 font-display text-3xl font-bold text-slate-900">References</h3>
          <ol className="mt-6 space-y-4 text-slate-700 list-decimal list-inside">
            {refs.map((r) => <li key={r} className="leading-relaxed pl-2">{r}</li>)}
          </ol>
        </div>
      </div>
    </>
  );
}

/* ----------- shared bits ----------- */
function Block({ badge, title, tone, children }: { badge: string; title: string; tone: "amber" | "emerald" | "violet" | "rose" | "indigo"; children: React.ReactNode }) {
  const tones: Record<string, string> = {
    amber: "text-amber-600",
    emerald: "text-emerald-600",
    violet: "text-violet-600",
    rose: "text-rose-600",
    indigo: "text-indigo-600",
  };
  return (
    <section>
      <div className="mb-7">
        <span className={`text-xs font-bold uppercase tracking-[0.2em] ${tones[tone]}`}>{badge}</span>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Concept({ text }: { text: string }) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
      <span className="text-xs font-bold uppercase tracking-widest text-violet-600">The Concept</span>
      <p className="mt-2 text-slate-700 leading-relaxed">{text}</p>
    </div>
  );
}

function DramaCard({ text }: { text: string }) {
  return (
    <div className="mt-4 rounded-2xl bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-200 p-5">
      <span className="text-xs font-bold uppercase tracking-widest text-rose-600">Real-Life Drama</span>
      <p className="mt-2 text-slate-800 italic">"{text}"</p>
    </div>
  );
}

function Tick({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2.5">
      <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 shrink-0" />
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 text-white">
            <Brain size={18}/>
          </span>
          <span className="font-display font-bold text-white">Construction Zone</span>
        </div>
        <p className="text-sm">Evidence-based. Not a substitute for clinical care. If you're in crisis, call or text <span className="text-white font-semibold">988</span>.</p>
      </div>
    </footer>
  );
}