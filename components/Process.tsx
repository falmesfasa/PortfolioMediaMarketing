"use client";
import { motion } from "framer-motion";
import { process } from "../data/site";
import { Section } from "./ui";
export default function Process() {
  return (
    <Section title="How I Think About Media">
      <ol className="space-y-6">{process.map(([t, d], i) => (
        <li key={t} className="grid gap-2 md:grid-cols-[200px_1fr] md:items-center">
          <div><span className="text-volt text-sm">Step {i + 1}</span><h3 className="font-display text-xl">{t}</h3></div>
          <div><p className="text-mist/75">{d}</p><div className="mt-2 h-1 rounded bg-line"><motion.div className="h-1 rounded bg-volt" initial={{ width: 0 }} whileInView={{ width: `${(i + 1) * 20}%` }} viewport={{ once: true }} transition={{ duration: 0.8 }} /></div></div>
        </li>))}</ol>
    </Section>
  );
}
