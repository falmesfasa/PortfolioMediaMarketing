import { contact, RESUME_URL } from "../data/site";
import { Section, Btn } from "./ui";
export default function Contact() {
  const li = contact.linkedin.startsWith("[");
  return (
    <Section id="contact" title="Let’s Build Better Digital Campaigns." sub="I’m open to opportunities in media management, digital marketing, campaign management and marketing technology.">
      <div className="flex flex-wrap gap-3"><Btn href={`mailto:${contact.email}`} solid>Email Me</Btn>{!li && <Btn href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</Btn>}<Btn href={RESUME_URL} download>Download Resume</Btn></div>
      <dl className="mt-8 space-y-1 text-mist/75"><dd>{contact.city}</dd><dd>{contact.email}</dd>{!contact.phone.startsWith("[") && <dd>{contact.phone}</dd>}</dl>
    </Section>
  );
}
