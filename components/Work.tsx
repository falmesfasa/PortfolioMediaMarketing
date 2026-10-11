import CaseStudyCard, { type CaseStudyProject } from "./CaseStudyCard";
import { Section } from "./ui";
import { images as I } from "../data/site";
const P: CaseStudyProject[] = [
  { category:"Digital Marketing • E-commerce • Campaigns", title:"Building a Digital Customer Journey for an Outdoor Retail Brand", description:"Marketing and digital work for an outdoor apparel and equipment retailer serving customers in Kenya.", tags:["Meta Marketing","Social Media","E-commerce","Product Campaigns","Website","WhatsApp Lead Generation"], href:"#campaigns", images:[[I.tevaSite,"Teva website screenshot"],[I.tevaCreative,"Product promotional creative"],[I.northFace,"North Face jacket campaign"],[I.tactical,"Tactical uniform campaign"]] },
  { category:"Brand Development • Social Media • E-commerce", title:"Vaziverse", description:"Digital marketing and brand development work for an apparel and lifestyle brand.", tags:["Product campaigns","Social content","Brand visuals","Customer engagement"], images:[[I.vaziverse1,"Vaziverse campaign"],[I.vaziverse2,"Social content"]] },
  { category:"Web Development • Landing Pages", title:"Website development", description:"Selected website projects, supporting the marketing work.", tags:["React","JavaScript","HTML","CSS","Node.js","MongoDB"], images:[[I.web1,"Website project 1"],[I.web2,"Website project 2"]] },
  { category:"Analytics • Business Intelligence", title:"Data visualization", description:"Using data analysis and visualization to communicate information and support business decision-making. Dashboards shown are sample concepts using sample data.", tags:["Python","Pandas","NumPy","Excel","Google Colab"], images:[[I.dash1,"Dashboard 1"],[I.dash2,"Dashboard 2"]] },
];
export default function Work() {
  return <Section id="work" title="Selected Work" sub="Practical projects across digital marketing, e-commerce, content and technology."><div className="space-y-6">{P.map(p => <CaseStudyCard key={p.title} p={p} />)}</div></Section>;
}
