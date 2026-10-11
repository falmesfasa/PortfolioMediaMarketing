"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { funnel } from "../data/site";
import { Section } from "./ui";
const info: Record<string, string> = { "Meta ad":"Reach the right audience with a clear offer.", "Landing page":"Keep message match so interest becomes action.", "Lead / WhatsApp":"Make it easy to enquire and capture contact details.", CRM:"Record source, interest and status for every lead.", "Follow-up":"Respond promptly and nurture undecided prospects.", "Qualified lead":"Separate serious buyers from casual browsers.", Sale:"Close the sale and learn what worked." };
export default function FunnelDiagram() {
  const [a, setA] = useState(0);
  const [play, setPlay] = useState(false);
  const calm = useReducedMotion();
  useEffect(() => {
    if (!play) return;
    const t = setInterval(() => setA(v => { if (v >= funnel.length - 1) { setPlay(false); return v; } return v + 1; }), 1400);
    return () => clearInterval(t);
  }, [play]);
  const start = () => { setA(0); setPlay(true); };
  return (
    <Section id="funnel" title="Thinking Beyond the Ad" sub="Track the full journey, not just the ad.">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-xs text-mist/50">Illustrative shape of a funnel, not real campaign data.</p>
        <button onClick={play ? () => setPlay(false) : start} className="rounded-lg border border-line px-3 py-2 text-sm hover:border-volt">{play ? "Pause" : "Play the journey"}</button>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div role="tablist" aria-label="Funnel stages" className="relative flex flex-col items-center gap-2">
          {funnel.map(([s, v], i) => {
            const on = a === i, done = i < a;
            return (
              <motion.button key={s} role="tab" aria-selected={on} onClick={() => { setPlay(false); setA(i); }}
                initial={{ opacity: 0, scaleX: 0.6 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }}
                style={{ width: `${100 - i * 9}%` }}
                className={`relative overflow-hidden rounded-xl border px-4 py-3 text-left transition-colors ${on ? "border-volt bg-volt/20" : done ? "border-volt/40 bg-volt/10" : "border-line bg-ink"}`}>
                {!calm && (on || done) && <motion.span aria-hidden className="absolute inset-y-0 w-10 bg-gradient-to-r from-transparent via-volt/30 to-transparent"
                  initial={{ x: "-100%" }} animate={{ x: "1200%" }} transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }} />}
                <span className="relative flex items-baseline justify-between gap-2"><span className="text-sm font-medium">{s}</span><span className="text-xs text-volt">{v}</span></span>
              </motion.button>
            );
          })}
        </div>
        <motion.div key={a} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} aria-live="polite"
          className="rounded-2xl border border-line bg-ink p-6">
          <p className="text-sm text-volt">Stage {a + 1} of {funnel.length}: {funnel[a][1]}</p>
          <h3 className="mt-1 font-display text-2xl">{funnel[a][0]}</h3>
          <p className="mt-3 text-mist/75">{info[funnel[a][0]]}</p>
          <div className="mt-5 h-1 rounded bg-line"><motion.div className="h-1 rounded bg-volt" animate={{ width: `${((a + 1) / funnel.length) * 100}%` }} transition={{ duration: 0.5 }} /></div>
        </motion.div>
      </div>
      <p className="mt-10 max-w-2xl text-mist/70">I understand campaign performance as a complete funnel. A campaign can generate clicks without generating customers, so performance needs to be evaluated across creative, landing-page conversion, lead quality and follow-up.</p>
      <p className="mt-4 max-w-2xl rounded-xl border border-line p-4 text-sm text-mist/70">My hands-on experience with dedicated CRM platforms is developing, but I understand the underlying CRM, pipeline and automation logic and can quickly adapt to new marketing technology.</p>
    </Section>
  );
}
