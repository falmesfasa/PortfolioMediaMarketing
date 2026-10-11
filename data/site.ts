// EDIT ME: all links, copy and project data live here.
export const LOOM_VIDEO_URL = "PASTE_LOOM_LINK_HERE";
export const RESUME_URL = "/resume.pdf"; // drop your PDF in /public
export const WEBSITE_URL = "https://tevaoutdoorkenya.myshopify.com";
export interface Contact { email: string; phone: string; linkedin: string; city: string }
export const contact: Contact = { email: "martinmuthoni25@gmail.com", phone: "[ADD PHONE NUMBER]", linkedin: "[ADD LINKEDIN URL]", city: "Nairobi, Kenya" };
export const nav: readonly string[] = ["Home","Work","Campaigns","Funnel","Analytics","About","Contact"];
export const journey: readonly string[] = ["Meta ad","Landing page","Lead / WhatsApp","CRM","Follow-up","Sale"];
export const funnel: readonly (readonly [stage: string, role: string])[] = [["Meta ad","Reach"],["Landing page","Convert"],["Lead / WhatsApp","Capture"],["CRM","Organize"],["Follow-up","Nurture"],["Qualified lead","Qualify"],["Sale","Close"]];
export const metrics: readonly (readonly [name: string, description: string])[] = [["CTR","Share of people who saw the ad and clicked. Signals creative and audience fit."],["CPC","Cost of each click. Shows how efficiently the ad earns attention."],["CPL","Cost of each lead or enquiry. Links spend to lead capture."],["Conversion rate","Share of visitors who take the next step. Shows landing page strength."],["CPA","Cost of each acquired customer. Ties spend to sales."],["ROAS","Revenue returned per unit of ad spend. Shows overall profitability."]];
export const diagnostics: readonly (readonly [symptom: string, areas: readonly string[]])[] = [["Low CTR",["Creative","Audience","Messaging","Offer"]],["High CTR + low conversion",["Landing page","Offer","UX","Message match"]],["Many leads + low sales",["Lead quality","Follow-up","CRM","Sales process"]]];
export const process: readonly (readonly [step: string, description: string])[] = [["Research","Understand audience, offer and objective."],["Strategy","Define campaign message, channel and customer journey."],["Creative","Develop visual content, copy and campaign variations."],["Conversion","Connect the campaign to the right landing page, WhatsApp or purchase path."],["Optimization","Use performance data to find problems and improve the funnel."]];
export const skills: Record<string, readonly string[]> = { Marketing:["Digital Marketing","Media Management","Campaign Strategy","Social Media Marketing","Content Strategy","Meta Ads","Lead Generation","Customer Engagement"], Funnels:["Landing Pages","Conversion Optimization","CRM Concepts","Lead Follow-Up","Customer Journey","Marketing Automation Concepts"], Analytics:["Campaign Analytics","Data Visualization","Reporting","Excel","Python","Pandas","Google Colab"], Technology:["HTML","CSS","JavaScript","React","Node.js","MongoDB","Git/GitHub","QA Testing"] };
export const experience: readonly (readonly [period: string, role: string, tags: readonly string[]])[] = [
  ["2024–Present","Digital Marketing & Technical Support Specialist, Freelance",["Campaigns","Social Media","Digital Operations","Websites","Customer Acquisition"]],
  ["Current","Founder & Digital Marketing Lead, Vaziverse",["Marketing","Brand Development","Social Media","Customer Engagement"]],
  ["Current","Marketing Lead, Teva Outdoor Store",["Campaigns","Product Marketing","E-commerce","Customer Engagement"]],
  ["2026–Present","Data Visualization Associate Intern",["Dashboards","Analytics","Reporting","Business Insights"]],
];
export const education: readonly (readonly [degree: string, years: string])[] = [["Diploma in Software Engineering, Full Stack Development","2021–2023"],["Data Science Fundamentals","2026"]];
export const why: readonly (readonly [title: string, text: string])[] = [["I understand the customer journey","I don't look at an advertisement in isolation. I consider what happens after the click."],["I bridge marketing and technology","My technical background lets me work comfortably with websites, digital tools, workflows and technical problems."],["I use data to improve decisions","I use analytics and visualization to understand performance and identify where improvements can be made."]];
// IMAGES: save files in /public/images and put the path here, e.g. "/images/teva-site.jpg". Empty = placeholder.
export type ImageKey = "tevaSite" | "tevaCreative" | "northFace" | "tactical" | "vaziverse1" | "vaziverse2" | "web1" | "web2" | "dash1" | "dash2";
export const images: Record<ImageKey, string> = {
  tevaSite: "/images/teva-website.webp", tevaCreative: "/images/tactical-harness.webp", northFace: "/images/north-face-jackets.webp", tactical: "/images/tactical-harness.webp",
  vaziverse1: "/images/vaziverse-agency.webp", vaziverse2: "/images/vaziverse-agency.webp", web1: "/images/web-mara-fleet.webp", web2: "/images/web-mara-fleet.webp", dash1: "/images/dashboard-1.webp", dash2: "/images/dashboard-2.webp",
};
