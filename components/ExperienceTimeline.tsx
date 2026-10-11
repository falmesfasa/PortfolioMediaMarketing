import { experience, education, why } from "../data/site";
import { Section, Tag } from "./ui";
export default function ExperienceTimeline() {
  return (
    <>
      <Section title="Experience">
        <ol className="border-l border-line pl-6 space-y-8">{experience.map(([d, t, tags]) => <li key={t} className="relative"><i className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-volt" /><p className="text-sm text-volt">{d}</p><h3 className="font-display text-xl">{t}</h3><div className="mt-2 flex flex-wrap gap-2">{tags.map(x => <Tag key={x}>{x}</Tag>)}</div></li>)}</ol>
        <h3 className="mt-12 font-display text-xl">Education</h3>
        <ul className="mt-3 space-y-2 text-mist/75">{education.map(([e, y]) => <li key={e}>{e} <span className="text-mist/50">({y})</span></li>)}</ul>
      </Section>
      <Section title="Why I’m Different"><div className="grid gap-4 md:grid-cols-3">{why.map(([t, d]) => <div key={t} className="rounded-2xl border border-line bg-ink p-6"><h3 className="font-display text-xl">{t}</h3><p className="mt-2 text-mist/70">{d}</p></div>)}</div></Section>
    </>
  );
}
