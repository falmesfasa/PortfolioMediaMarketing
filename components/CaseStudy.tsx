import { Section, Reveal, Img, Btn } from "./ui";
import { images, WEBSITE_URL } from "../data/site";
export default function CaseStudy() {
  return (
    <Section id="campaigns" title="Teva Outdoor Store: Campaign & Digital Marketing" sub="Teva Outdoor Store is an outdoor apparel and equipment retailer targeting customers looking for hiking, tactical, camping and outdoor gear.">
      <Reveal><h3 className="font-display text-xl">The challenge</h3>
        <ul className="mt-3 grid gap-2 text-mist/75 sm:grid-cols-2">{["Build stronger online visibility","Promote specific products and offers","Generate customer enquiries","Support online sales","Connect social media content with the website","Make product information and calls-to-action clearer"].map(c => <li key={c} className="rounded-xl border border-line bg-ink px-4 py-3 text-sm">{c}</li>)}</ul></Reveal>
      <Reveal className="mt-12"><h3 className="font-display text-xl">Campaign approach</h3>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">{["Audience","Offer","Creative","Landing page","WhatsApp / lead","Follow-up","Purchase"].map((s, i) => <span key={s} className="flex items-center gap-2"><span className="rounded-lg bg-volt/15 px-3 py-2 text-volt">{s}</span>{i < 6 && <span aria-hidden className="text-mist/40">→</span>}</span>)}</div>
        <p className="mt-3 text-mist/70">I approach campaigns as a connected system rather than isolated social media posts.</p></Reveal>
      <Reveal className="mt-16"><h3 className="font-display text-2xl md:text-3xl">From Ad Click to Customer Action</h3>
        <div className="mt-5 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="overflow-hidden rounded-2xl border border-line bg-ink"><div className="flex gap-1.5 border-b border-line p-3"><i className="h-2.5 w-2.5 rounded-full bg-line"/><i className="h-2.5 w-2.5 rounded-full bg-line"/><i className="h-2.5 w-2.5 rounded-full bg-line"/></div>
            <Img src={images.tevaSite} label="Teva Outdoor Store website screenshot" className="h-72 border-0 object-top" /></div>
          <ol className="grid gap-1.5 text-sm text-mist/80">{["Clear headline","Product/value proposition","Strong visual","Benefits","Product categories","Trust elements","Delivery information","Payment information","Clear CTA","Purchase/enquiry path"].map((x, i) => <li key={x} className="flex gap-3 rounded-lg border border-line px-3 py-1.5"><span className="text-volt">{i + 1}</span>{x}</li>)}</ol></div>
        <p className="mt-4 max-w-2xl text-mist/70">The goal of the landing page is to maintain message continuity between the campaign and the customer’s next action.</p>
        <div className="mt-4"><Btn href={WEBSITE_URL} target="_blank" rel="noopener noreferrer">View Website</Btn></div></Reveal>
    </Section>
  );
}
