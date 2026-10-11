"use client";
import { useState } from "react";
import { metrics, diagnostics } from "../data/site";
import { Section } from "./ui";
export default function AnalyticsSection() {
  const [o, setO] = useState(0);
  return (
    <Section id="analytics" title="Campaign Performance & Funnel Diagnostics">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{metrics.map(([m, d]) => <div key={m} className="rounded-2xl border border-line bg-ink p-5"><h3 className="font-display text-xl text-volt">{m}</h3><p className="mt-1 text-sm text-mist/70">{d}</p></div>)}</div>
      <div className="mt-10 grid gap-3 md:grid-cols-3">{diagnostics.map(([s, areas], i) => (
        <button key={s} onClick={() => setO(i)} aria-expanded={o === i} className={`rounded-2xl border p-5 text-left transition ${o === i ? "border-volt bg-volt/10" : "border-line bg-ink"}`}>
          <span className="font-display text-lg">{s}</span>
          {o === i && <span className="mt-3 block text-sm text-mist/75">Check: {areas.join(", ")}</span>}</button>))}</div>
      <p className="mt-6 font-display text-xl">The objective is to identify where the funnel is breaking, then optimize that point.</p>
    </Section>
  );
}
