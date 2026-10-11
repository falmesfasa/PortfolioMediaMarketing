"use client";
import { motion } from "framer-motion";
import { journey, RESUME_URL } from "../data/site";
import { Btn, Tag } from "./ui";
export default function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-6xl gap-12 px-5 pt-16 pb-12 md:pt-24 lg:grid-cols-[1.2fr_1fr] lg:items-center">
      <div>
        <p className="text-volt font-medium">Martin Gachucha · Digital Marketing & Media Manager</p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">Digital Marketing That Connects the Entire Customer Journey.</h1>
        <p className="mt-6 max-w-xl text-lg text-mist/75">I combine media management, campaign strategy, creative content, landing pages, digital funnels and analytics to turn attention into meaningful customer action.</p>
        <div className="mt-6 flex flex-wrap gap-2">{["Media Management","Campaign Strategy","Landing Pages","Lead Generation","Analytics"].map(t => <Tag key={t}>{t}</Tag>)}</div>
        <div className="mt-8 flex flex-wrap gap-3"><Btn href="#work" solid>View Selected Work</Btn><Btn href={RESUME_URL} download>Download Resume</Btn></div>
      </div>
      <div className="rounded-3xl border border-line bg-gradient-to-b from-ink to-navy p-6">
        <ol className="space-y-2">
          {journey.map((j, i) => (
            <motion.li key={j} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.18 }}
              className="flex items-center gap-3 rounded-xl border border-line bg-navy/60 px-4 py-3 text-sm">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-volt/20 text-xs text-volt">{i + 1}</span>{j}</motion.li>))}
        </ol>
        <p className="mt-4 text-sm text-mist/60">Track the full journey, not just the ad.</p>
      </div>
    </section>
  );
}
