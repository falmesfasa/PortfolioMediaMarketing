import { skills } from "../data/site";
import { Section, Tag } from "./ui";
export default function Skills() {
  return <Section title="Skills"><div className="grid gap-4 md:grid-cols-2">{Object.entries(skills).map(([k, v]) => <div key={k} className="rounded-2xl border border-line bg-ink p-5"><h3 className="font-display text-xl">{k}</h3><div className="mt-3 flex flex-wrap gap-2">{v.map(s => <Tag key={s}>{s}</Tag>)}</div></div>)}</div></Section>;
}
