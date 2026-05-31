import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Brain, Menu, X, Home, BookOpen, HeartPulse, Users, ShieldCheck, FileText,
  Sparkles, Target, Compass, Timer, Layers, Wind, Activity, Heart, ClipboardList,
  HandHeart, AlertTriangle, Cigarette, GraduationCap, Handshake, LifeBuoy, Lightbulb,
  GraduationCap as Cap, School
} from "lucide-react";
import { PomodoroTimer } from "@/components/PomodoroTimer";
import { StressMeter } from "@/components/StressMeter";
import { SpotlightSimulator } from "@/components/SpotlightSimulator";
import { YerkesChart } from "@/components/YerkesChart";
import heroBrain from "@/assets/hero-brain.jpg";
import procrastinationImg from "@/assets/procrastination.jpg";
import studyNotesImg from "@/assets/study-notes.jpg";
import mindfulnessImg from "@/assets/mindfulness.jpg";
import spotlightImg from "@/assets/spotlight.jpg";
import friendsImg from "@/assets/friends.jpg";
import shieldImg from "@/assets/shield.jpg";

export const Route = createFileRoute("/")({ component: Page });

type TabId = "home" | "study" | "stress" | "social" | "resist" | "portfolio";

const TABS: { id: TabId; label: string; icon: typeof Home }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "study", label: "Study Hacks", icon: BookOpen },
  { id: "stress", label: "Stress & Mood", icon: HeartPulse },
  { id: "social", label: "Social & Squads", icon: Users },
  { id: "resist", label: "Resistance", icon: ShieldCheck },
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
              <Sparkles size={14} /> 🚧 A Psychological Hack · Evidence-based
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02]">
              The High School Survival Manual: your brain is a <span className="bg-gradient-to-r from-amber-300 via-rose-300 to-violet-300 bg-clip-text text-transparent">Construction Zone</span>.
            </h1>
            <p className="mt-6 text-lg text-indigo-100/90 max-w-xl">
              Attention, student: your prefrontal cortex is literally half-built, your limbic system is making every
              executive decision, and one rough Tuesday feels like the actual apocalypse. This is the missing operator's
              manual — abstract psychology translated into a practical, evidence-based roadmap.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => setTab("study")} className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3 font-semibold shadow-xl hover:-translate-y-0.5 transition-all">
                Start with Study Hacks <BookOpen size={18}/>
              </button>
              <button onClick={() => setTab("stress")} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-all">
                I'm stressed RIGHT now <HeartPulse size={18}/>
              </button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-xs">
              <MetaChip icon={Cap} label="Psychology Final Project · Second Semester" />
              <MetaChip icon={Users} label="10th Grade (Age 16)" />
              <MetaChip icon={School} label="Nibras International School · American Curriculum" />
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
        <SectionHeader eyebrow="Tab 01 · Home" title="Welcome to the construction zone"
          sub="Let's be completely honest about what high school actually is — and why your brain keeps glitching." />
        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white p-7 border border-slate-200 shadow-sm">
            <p className="text-slate-700 leading-relaxed">
              High school is a systematically designed nightmare. We're expected to balance an absurd academic workload,
              build a flawless social identity, maintain a stable friend group, and somehow keep the local panic attacks
              under control — all without total neurological burnout.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Well-meaning adults usually just dictate what we should do ("Stop procrastinating! Stay calm!"). But they
              completely fail to explain <i>why</i> our brains are failing. This survival manual changes the rules. Using
              real, proven psychological frameworks, we're going to systematically hack our cognitive biology — to stop
              just surviving and start running the game.
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-violet-50 to-indigo-50 p-7 border border-violet-200 shadow-sm flex flex-col justify-center">
            <div className="flex items-center gap-2 text-violet-700 text-xs font-bold uppercase tracking-widest">
              <Sparkles size={14} /> Parents & Teachers
            </div>
            <p className="mt-3 text-slate-700 leading-relaxed">
              You are cordially invited to review this document to decode the absolute madness driving our day-to-day
              behavior. Consider it a field guide to the species.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <SectionHeader eyebrow="The Overview" title="Three reasons this site exists" />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <OverviewCard icon={Target} accent="from-amber-400 to-rose-500"
            title="1 · Target Audience"
            body="Built specifically for 10th graders suffering from chronic sleep deprivation and elevated panic levels. It also works as a roadmap for parents and teachers to finally decode us." />
          <OverviewCard icon={Compass} accent="from-emerald-400 to-sky-500"
            title="2 · Our Goal & Purpose"
            body="Take real, complex theories about cognition, development, and mental health, and apply them to real-life situations — specifically the ones that hit on a random Tuesday at 2:00 PM." />
          <OverviewCard icon={Brain} accent="from-violet-500 to-indigo-600"
            title="3 · Why Psychology Is Our Salvation"
            body="A necessary perspective check: adolescence is just a temporary — and fairly unstable — software update. It is not your final operating system." />
        </div>
      </section>
    </>
  );
}

function MetaChip({ icon: Icon, label }: { icon: typeof Home; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 font-medium text-indigo-100/90">
      <Icon size={13} /> {label}
    </span>
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
      <PageHero kicker="Tab 02 · Cognition & Memory" accent="from-violet-600 via-indigo-600 to-purple-700"
        title="Study Hacks: procrastination is a neurological system failure."
        sub="Why your brain wants you to scroll TikTok at 11pm — and the tactical, non-cringe ways to override it." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <Block badge="Section A" title="Present Bias (Hyperbolic Discounting) & Maladaptive Emotional Regulation" tone="amber">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Concept text="Your brain treats your 'Future Self' like a complete stranger. Facing a massive 10th-grade history project, your cognitive centers read that workload as a direct existential threat. To protect your emotional state, your primitive limbic system stages a coup and screams: 'Immediate tactical retreat to TikTok for the next three hours to maximize short-term dopamine!' Procrastination isn't a character flaw or laziness — it's simply your inability to regulate the negative emotions a textbook stirs up." />
              <DramaCard text="It's Sunday night, 11:00 PM, and your 1,500-word essay is due first period tomorrow. Instead of writing, you're suddenly deep-cleaning your room, organizing your shoes by color, and watching a documentary on how bricks were made in medieval times — anything to avoid the first paragraph." />
              <h4 className="font-display font-bold mt-6 text-xl text-slate-900">Tactical Survival Strategies</h4>
              <ul className="mt-3 space-y-2 text-slate-700">
                <Tick>The <b>20-Minute Cognitive Trick</b>: tell your brain you'll only work for a short 20-minute interval and then you have legal permission to stop. Lowering the entry barrier tricks your limbic system into starting.</Tick>
                <Tick><b>Deploy digital bodyguards</b>: your willpower is no match for billion-dollar social media algorithms. Install apps like <b>Finish</b> to track micro-deadlines, or use <b>StayFocusd</b> (Chrome) and <b>SelfControl</b> (Safari) to fully block internet access during study hours.</Tick>
                <Tick>Phone in another room. Friction is your friend.</Tick>
              </ul>
            </div>
            <img src={procrastinationImg} loading="lazy" width={1280} height={800} alt="Frustrated student vs scrolling student"
              className="rounded-3xl shadow-xl border border-slate-200" />
          </div>
        </Block>

        <PomodoroTimer />

        <Block badge="Section B" title="Elaborative vs Maintenance Rehearsal — your brain is NOT a camera" tone="emerald">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <img src={studyNotesImg} loading="lazy" width={1280} height={800} alt="Aesthetic color-coded study notes"
              className="rounded-3xl shadow-xl border border-slate-200 order-2 lg:order-1" />
            <div className="order-1 lg:order-2">
              <Concept text="Passively re-reading your highlighted notes (Maintenance Rehearsal) is a total waste of cognitive energy. It only holds information in short-term working memory for about twenty seconds before deleting it. To permanently encode data into long-term memory, you must practice Elaborative Rehearsal: connecting new information to weird, specific, or funny concepts you already understand." />
              <DramaCard text="You stay up until 3:00 AM memorizing biology definitions. You feel like a science genius at midnight, but the exact second the teacher flips the test face-down on your desk the next morning, your brain does a full factory reset." />
              <h4 className="font-display font-bold mt-6 text-xl text-slate-900">Tactical Survival Strategies</h4>
              <ul className="mt-3 space-y-2 text-slate-700">
                <Tick><b>Build absurd analogies</b>: don't just transcribe text. Design ridiculous personal analogies, draw chaotic mind-maps, and organize notes into color-coded binders.</Tick>
                <Tick><b>Use the physical infrastructure</b>: don't lock yourself in your room to cry. Use school resources — Study Centers and Homework Clubs — to collaborate with peers and teachers. Changing environment activates different memory-retrieval routes.</Tick>
                <Tick>Teach the concept to a friend. If you can't, you don't actually know it.</Tick>
              </ul>
            </div>
          </div>
        </Block>

        <Block badge="Section C" title={'Motivation Theory — overriding the "Amotivation" trap'} tone="violet">
          <div className="max-w-4xl">
            <Concept text="Well-meaning adults think motivation is like a light switch — you just flip it on. But Self-Determination Theory (SDT) proves that forced, boring tasks trigger External Regulation (doing something just to avoid getting grounded), which your brain hates. To actually get moving, you need Autonomy (feeling in control of your choices). When you use the 20-minute trick, you're secretly hacking your motivation system. By giving yourself legal permission to stop, you switch your brain from 'I am being forced to do this' to 'I am choosing to do this for 20 minutes.' That tiny shift restores your autonomy and sparks Intrinsic Motivation (internal drive)." />
            <DramaCard text="Your mom is screaming at you to study for chemistry. The more she yells, the absolute less you want to do it. You aren't even actively trying to fail; your brain is just violently rejecting her external pressure because it feels like a prison sentence." />
            <Strategy title="Claim your autonomy" text="Don't study because 'you have to.' Frame it as a tactical choice to get a teacher off your back so you can play video games completely guilt-free later. Control the narrative." />
          </div>
        </Block>
      </div>
    </>
  );
}

/* ----------- STRESS ----------- */
function StressTab() {
  const tier3 = [
    { icon: Brain, title: "CBT Protocols", body: "Catch and destroy irrational, destructive thoughts. Used as prevention, CBT tools cut adolescent depression risk by 63% and raise symptom remission by 45% (Weisz et al.). When your brain says 'You'll fail at life,' treat it like a text from an unknown number and demand proof.", accent: "from-violet-500 to-indigo-600" },
    { icon: Wind, title: "Somatic Regulation", body: "A few minutes of mindfulness or basic yoga forces your autonomic nervous system out of fight-or-flight (panic) and into rest-and-digest (calm), stabilizing your heart rate.", accent: "from-emerald-500 to-teal-600" },
    { icon: Heart, title: "ACT", body: "Acceptance & Commitment Therapy: instead of fighting a bad mood, accept it without judgment — 'I feel intense social anxiety right now, and that's biologically normal. I move forward anyway.'", accent: "from-rose-500 to-amber-500" },
    { icon: ClipboardList, title: "Professional Assessment", body: "Counselors don't guess. They use standardized tools like the Screening & Evaluation Compendium (2nd Edition) to measure your social-emotional wellbeing and apply the right support.", accent: "from-sky-500 to-indigo-500" },
  ];
  return (
    <>
      <PageHero kicker="Tab 03 · Activation Curves" accent="from-indigo-700 via-violet-700 to-rose-600"
        title="Stress Management: clinical workloads & panic spirals."
        sub="Stress isn't the villain. Too much (or too little) of it is. Here's how to find — and stay near — the peak." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <Block badge="Section A" title="The Yerkes-Dodson Law — the stress sweet spot" tone="violet">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Concept text="This law proves your brain actually needs a moderate dose of stress to perform at peak capacity. At 0% stress you're bored, sleepy, and drooling on the desk. At 100% you panic, freeze, and hit cognitive paralysis. Your goal is never to eliminate stress — it's to find the 'Sweet Spot' at the center of the curve, where mental arousal sharpens your focus." />
              <DramaCard text="You walk into your math final, your hands go cold and sweaty, your heart pounds like a drum, and suddenly you completely forget how to simplify a fraction. You've blown past the top of the curve into the absolute panic zone." />
              <Strategy title="Run a panic reframe" text="When your heart starts racing before a presentation, intercept the thought. Don't tell yourself 'I'm having a panic attack.' Tell your brain: 'My heart is pumping fresh blood and oxygen to my prefrontal cortex so I can ace this exam.' Swapping the label from 'threat' to 'useful energy' calms your system instantly." />
            </div>
            <YerkesChart />
          </div>
        </Block>

        <StressMeter />

        <Block badge="Section B" title="High-resistance mental-health interventions (Tier-3 Support)" tone="emerald">
          <p className="-mt-3 mb-6 max-w-3xl text-slate-600 leading-relaxed">
            When school life gets genuinely heavy, surface-level advice like "just breathe" is ineffective. Clinical
            studies show that structured strategies change the way the brain processes emotional chaos.
          </p>
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
    { icon: HandHeart, title: "Sources of Strength", body: "A student-led system that turns friend groups into emotional shields. Clinical trials show trained students are 4× more likely to successfully connect a friend in crisis with a qualified school counselor than untrained students.", accent: "from-amber-500 to-rose-500" },
    { icon: LifeBuoy, title: "Signs of Suicide (SOS)", body: "A school program built to break the harmful silence. It teaches you to recognize warning signs in friends, then apply three key commands: Acknowledge, Care, Tell a trusted adult.", accent: "from-rose-500 to-violet-600" },
    { icon: Handshake, title: "Safe Dates", body: "10th-grade relationships can be a rollercoaster. Teaches conflict resolution, boundaries, and communication. A 4-year follow-up shows students who complete it experience 56%–92% less physical or emotional dating violence (Foshee et al.).", accent: "from-sky-500 to-indigo-600" },
  ];
  return (
    <>
      <PageHero kicker="Tab 04 · Social & Squads" accent="from-rose-600 via-fuchsia-600 to-violet-700"
        title="The Spotlight Effect: nobody is actually watching you."
        sub="The bad news: nobody is paying as much attention to you as you think. The good news: nobody is paying as much attention to you as you think." />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          <Block badge="Section A" title="The Spotlight Effect & Asch Conformity" tone="rose">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Concept text="The Spotlight Effect is an egocentric cognitive bias where you drastically overestimate how much your peers notice your appearance, mistakes, or stumbles. In reality, everyone is too busy worrying about their own imaginary spotlight to notice yours. This fear of judgment often triggers Asch Conformity — faking opinions or changing your style just to fit in, out of an irrational fear of social isolation." />
                <DramaCard text="You drop a metal water bottle in a completely silent hallway mid-class. The sound echoes like an explosion. You spend the next four periods sweating, convinced the whole school has labeled you a clumsy loser." />
                <Strategy title="The spotlight reality test" text="Force your brain to check the historical data. Ask yourself: who dropped their lunch tray last Tuesday? If you can't remember — guess what — nobody remembers your awkward comments or bad-hair days either. They're far too busy thinking about themselves." />
              </div>
              <img src={spotlightImg} loading="lazy" width={1280} height={800} alt="Self-conscious student in a classroom"
                className="rounded-3xl shadow-xl border border-slate-200" />
            </div>
          </Block>

          <SpotlightSimulator />

          <Block badge="Section B" title="Peer support networks & relational safety" tone="violet">
            <p className="-mt-3 mb-6 max-w-3xl text-slate-600 leading-relaxed">
              Let's be real: going only to adults when a friend is struggling can be incredibly awkward. Student-led
              support networks create a huge social safety net, because <i>we</i> are the real first line of defense in
              a crisis. These programs are scientifically validated:
            </p>
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
    { icon: GraduationCap, title: "Life Skills Training (LST)", body: "A curriculum focused on building personal confidence, self-esteem, and social skills. It has a proven track record of reducing teen tobacco, alcohol, and marijuana use over time.", accent: "from-emerald-500 to-teal-600" },
    { icon: Cigarette, title: "Project TND", body: "An interactive classroom model built for high school. Scientific evaluations show it reduces cigarette use by 27% and marijuana use by 22% among participating students (Sussman et al.).", accent: "from-amber-500 to-rose-500" },
    { icon: HandHeart, title: "Big Brothers Big Sisters", body: "A mentorship model showing that a stable connection with a trusted older mentor acts as a psychological shield — protecting youth and improving school performance.", accent: "from-sky-500 to-indigo-600" },
  ];
  return (
    <>
      <PageHero kicker="Tab 05 · Substance Prevention" accent="from-emerald-700 via-teal-700 to-indigo-800"
        title="Resistance: the neurological reality of the 'fake escape.'"
        sub="Vapes and alcohol aren't 'escape.' They chemically hand your future self a worse version of today's problem." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <Block badge="Section A" title="Maladaptive Coping Models — the fake escape" tone="emerald">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Concept text="When 10th-grade speed, family expectations, and social drama get overwhelming, your brain desperately hunts for a quick chemical off-switch. Reaching for vaping, nicotine, or alcohol is what psychology defines as a maladaptive coping mechanism: an artificial shortcut that temporarily numbs your current anxiety but destroys your brain's natural ability to regulate emotions in the future." />
              <DramaCard text="You feel completely isolated or crushed by finals. Someone offers you a vape at a weekend party, and your stressed limbic system tries to convince you that inhaling artificially-flavored vapor is a legitimate way to calm your anxiety." />
            </div>
            <img src={shieldImg} loading="lazy" width={1280} height={800} alt="Neon shield vs cracked barrier"
              className="rounded-3xl shadow-xl border border-slate-200 bg-slate-950" />
          </div>
        </Block>

        <Block badge="Section B" title="Decision-Making & The Adolescent Dual-Process Model" tone="violet">
          <div className="max-w-4xl">
            <Concept text="In cognitive psychology, the Dual-Process Model explains that your brain handles choices using two competitive networks: System 1 (The Socioemotional Network) which is fast, emotional, and craves immediate social rewards, and System 2 (The Cognitive Control Network) which is slow, logical, and calculates long-term consequences. In a quiet classroom, your System 2 works fine. But under stress or at a party, your hyperactive adolescent limbic system completely overwhelms your half-built prefrontal cortex. Your brain experiences Bounded Rationality—your capacity to make a logical decision shrinks to zero because System 1 demands an immediate chemical escape, completely blinding you to the future fallout." />
            <DramaCard text="You know vaping is terrible for your lungs and costs way too much money. Your logical System 2 knows this perfectly. But at 11:30 PM, when you're overwhelmed by social anxiety and someone hands it to you, System 1 stages a total coup, blanks out your logic, and screams: 'Do it right now to fit in!'" />
            <Strategy title="Pre-program your System 2" text="Do not try to make a high-stakes logical decision in the heat of the moment—your brain is physically under construction and cannot process it effectively right now. Instead, decide your boundaries on a quiet afternoon, and script a fast, funny, non-cringe refusal line ahead of time (e.g., 'Nah, I'm training for sports' or 'My lungs are trash already, I'm good'). When someone puts you on the spot, your pre-programmed script takes over automatically without requiring mid-crisis brainpower." />
          </div>
        </Block>

        <Block badge="Section C" title="Built-in resistance tools & validated programs" tone="indigo">
          <p className="-mt-3 mb-6 max-w-3xl text-slate-600 leading-relaxed">
            We don't need another boring "just say no" lecture. We need tactical refusal skills — built on Social
            Influence and Behavioral Skill Acquisition — that protect our personal boundaries without wrecking our
            reputation or pushing away our friend group.
          </p>
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
            <AlertTriangle size={16}/> Somatic Emergency Guide — Physical Control Filters
          </div>
          <div className="mt-5 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h4 className="font-display text-2xl font-bold">5-4-3-2-1 Grounding</h4>
              <p className="mt-2 text-indigo-100/90">Name <b>5</b> things you see, <b>4</b> you can touch, <b>3</b> you hear, <b>2</b> you smell, and <b>1</b> you taste — to get out of your head and back into your body.</p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h4 className="font-display text-2xl font-bold">Box Breathing (Navy SEALs)</h4>
              <p className="mt-2 text-indigo-100/90">Inhale <b>4</b>s · hold <b>4</b>s · exhale <b>4</b>s · hold empty <b>4</b>s. Repeat to switch off the physical stress alarm in under a minute.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ----------- PORTFOLIO ----------- */
function PortfolioTab() {
  const refs = [
    {
      cite: "Weisz, J. R., McCarty, C. A., & Valeri, S. M. (2006). Effects of psychotherapy for depression in children and adolescents: A meta-analysis of studies from 1970 to 2005. Psychological Bulletin, 132(1), 132–149.",
      note: "CBT efficacy data — documents the 63% reduction in depression risk and 45% remission rate in preventive CBT structures.",
    },
    {
      cite: "Sussman, S., Dent, C. W., & Stacy, A. W. (2002). Project Towards No Drug Abuse: A review of target behavior changes over twelve-month follow-up periods. Prevention Science, 3(4), 315–323.",
      note: "Project TND results — validates the 27% reduction in smoking and 22% reduction in cannabis use.",
    },
    {
      cite: "Foshee, V. A., Bauman, K. E., & Ennett, S. T. (2004). Assessing the long-term effects of the Safe Dates program on adolescent dating abuse. American Journal of Public Health, 94(4), 619–624.",
      note: "Safe Dates interpersonal-violence statistics — 4-year follow-up data recording 56%–92% reductions in relational victimization.",
    },
    {
      cite: "Wyman, P. A., Brown, C. H., & LoMurray, M. (2010). An upstream peer-leader intervention to prevent suicide in school populations. American Journal of Public Health, 100(9), 1611–1620.",
      note: "Peer-network safety systems — proof that trained students are 4× more likely to connect an at-risk peer with a counselor.",
    },
  ];
  const reflections = [
    {
      q: "1 · What did this project teach me about my own high school experience?",
      a: "Before starting this research, I was fully convinced my brain was simply defective from the factory. I was stuck in an exhausting cycle: I felt completely overwhelmed by 10th-grade assignments, put them off until the last second, stayed up all night, and then mentally punished myself for being “lazy.” Discovering the concepts of Present Bias and Maladaptive Emotional Regulation was a total paradigm shift. I now understand that my procrastination wasn't a lack of morals or willpower; it was my limbic system aggressively hijacking my half-built prefrontal cortex to escape short-term stress. High school is an absolute pressure cooker, but analyzing my habits through a psychological lens let me replace self-sabotage with tactical self-awareness.",
    },
    {
      q: "2 · Which psychological concepts were most immediately useful?",
      a: "Two specific concepts completely revolutionized my daily perspective at school: the Spotlight Effect and the Yerkes-Dodson Law. Understanding that the Spotlight Effect is just an egocentric cognitive bias — and that every 10th grader around me is too paralyzed by their own imaginary spotlight to evaluate mine — instantly cured my basic social anxiety. The Yerkes-Dodson Law also completely redefined my relationship with academic stress. I now understand that a racing heart before a biology test isn't an “imminent collapse”; it's just my sympathetic nervous system safely deploying adrenaline and oxygen into my brain so I can perform at my peak, right at the optimal point of the curve.",
    },
    {
      q: "3 · How do I plan to adjust my study and stress-management habits in the future?",
      a: "From now on, I'm going to completely dismantle my old study and stress-management routines and replace them with science-based psychological strategies. I'll strictly implement the 20-minute Pomodoro block alongside aggressive digital blockers like SelfControl and StayFocusd to bypass my brain's procrastination response entirely. For exam prep, I'll permanently retire passive note-reading and implement active Elaborative Rehearsal through color-coded mind-maps, visual outlines, and absurd personalized analogies. Finally, when stress levels inevitably rise, I'll reject maladaptive escapes and apply immediate physical overrides — using Box Breathing and the 5-4-3-2-1 Grounding Method to keep my cognitive system fully regulated.",
    },
  ];
  return (
    <>
      <PageHero kicker="Tab 06 · Final Defense Portfolio" accent="from-violet-700 via-purple-700 to-fuchsia-700"
        title="Portfolio, Reflections & Citations."
        sub="Package what you learned. Cite what holds it up." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="rounded-3xl bg-white p-8 shadow-xl border border-slate-200">
          <div className="flex items-center gap-2 text-violet-600 text-sm font-semibold uppercase tracking-widest">
            <Layers size={16}/> Section A · Scientific Bibliography (APA Format)
          </div>
          <h3 className="mt-3 font-display text-3xl font-bold text-slate-900">References</h3>
          <ol className="mt-6 space-y-5 text-slate-700 list-decimal list-inside">
            {refs.map((r) => (
              <li key={r.cite} className="leading-relaxed pl-2">
                {r.cite}
                <span className="mt-1.5 block pl-6 text-sm text-violet-700/90 italic">{r.note}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-xl border border-slate-200">
          <div className="flex items-center gap-2 text-violet-600 text-sm font-semibold uppercase tracking-widest">
            <Lightbulb size={16}/> Section B · Personal Reflection Essays (The Project Conclusion)
          </div>
          <div className="mt-6 space-y-6">
            {reflections.map((r) => (
              <div key={r.q} className="rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-200 p-6">
                <h4 className="font-display text-xl font-bold text-slate-900">{r.q}</h4>
                <p className="mt-3 text-slate-700 leading-relaxed">{r.a}</p>
              </div>
            ))}
          </div>
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
      <span className="text-xs font-bold uppercase tracking-widest text-violet-600">The Scientific Reality</span>
      <p className="mt-2 text-slate-700 leading-relaxed">{text}</p>
    </div>
  );
}

function DramaCard({ text }: { text: string }) {
  return (
    <div className="mt-4 rounded-2xl bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-200 p-5">
      <span className="text-xs font-bold uppercase tracking-widest text-rose-600">The 10th-Grade Drama</span>
      <p className="mt-2 text-slate-800 italic">"{text}"</p>
    </div>
  );
}

function Strategy({ title, text }: { title: string; text: string }) {
  return (
    <div className="mt-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 p-5">
      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700">
        <Lightbulb size={13} /> Tactical Strategy · {title}
      </span>
      <p className="mt-2 text-slate-800 leading-relaxed">{text}</p>
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
          <div>
            <span className="font-display font-bold text-white block">Construction Zone</span>
            <span className="text-xs text-slate-500">Psychology Final Project · 10th Grade · Nibras International School</span>
          </div>
        </div>
        <p className="text-sm max-w-md">Evidence-based. Not a substitute for clinical care. If you're in crisis, call or text <span className="text-white font-semibold">988</span>.</p>
      </div>
    </footer>
  );
}
