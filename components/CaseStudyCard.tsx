import { Img, Tag, Btn } from "./ui";
export interface CaseStudyProject {
  category: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  images: [src: string, label: string][];
}

export default function CaseStudyCard({ p }: { p: CaseStudyProject }) {
  return (
    <article className="grid overflow-hidden rounded-3xl border border-line bg-ink md:grid-cols-2">
      <div className="grid grid-cols-2 gap-2 p-3">{p.images.map(([src, label]) => <Img key={label} src={src} label={label} className="min-h-28 rounded-xl" />)}</div>
      <div className="p-6 md:p-8">
        <p className="text-sm text-volt">{p.category}</p>
        <h3 className="mt-2 font-display text-2xl md:text-3xl">{p.title}</h3>
        <p className="mt-3 text-mist/70">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">{p.tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
        {p.href && <div className="mt-6"><Btn href={p.href} solid>View Case Study</Btn></div>}
      </div>
    </article>
  );
}
