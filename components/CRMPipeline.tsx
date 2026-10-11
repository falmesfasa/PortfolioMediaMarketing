import { Section } from "./ui";
export default function CRMPipeline() {
  return (
    <Section title="A pipeline that shows where leads stand">
      <div className="grid gap-2 sm:grid-cols-5">{["New lead","Contacted","Qualified","Follow-up","Converted / Lost"].map((s, i) => <div key={s} className="rounded-xl border border-line bg-ink p-4 text-sm"><span className="text-volt">{i + 1}</span> {s}</div>)}</div>
      <div className="mt-3 grid gap-2 sm:grid-cols-4 text-sm text-mist/70">{["Source","Interest","Lead status","Next action"].map(f => <div key={f} className="rounded-lg border border-dashed border-line px-3 py-2">{f}</div>)}</div>
      <p className="mt-4 max-w-2xl text-mist/70">A structured CRM makes it easier to understand where leads are coming from, what stage they are in, what action is required next and where prospects are being lost.</p>
    </Section>
  );
}
