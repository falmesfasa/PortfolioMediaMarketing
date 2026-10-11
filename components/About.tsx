import { Section, Reveal } from "./ui";
const cards: [title: string, items: string[]][] = [["Media",["Campaigns","Social Media","Content Strategy","Meta Ads"]],["Technology",["Websites","Landing Pages","Digital Workflows","QA & Troubleshooting"]],["Data",["Analytics","Reporting","Data Visualization","Funnel Diagnostics"]]];
export default function About() {
  return (
    <Section id="about" title="Marketing + Technology + Data">
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal className="space-y-4 text-mist/75 max-w-xl">
          <p>I’m a digital marketing and technology professional with hands-on experience supporting social media campaigns, promotional content, e-commerce, customer engagement, websites and digital business operations.</p>
          <p>My technical background in software development and data analysis allows me to look beyond individual posts or ads and understand how different parts of a digital customer journey work together.</p>
          <p>I’m particularly interested in campaign performance, conversion-focused landing pages, lead management, marketing automation and using data to identify where a funnel can be improved.</p>
        </Reveal>
        <div className="grid gap-4">{cards.map(([t, l]) => <Reveal key={t}><div className="rounded-2xl border border-line bg-ink p-5"><h3 className="font-display text-xl">{t}</h3><p className="mt-2 text-sm text-mist/70">{l.join(", ")}</p></div></Reveal>)}</div>
      </div>
    </Section>
  );
}
