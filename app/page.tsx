import Navbar from "../components/Navbar"; import Hero from "../components/Hero"; import Work from "../components/Work";
import CaseStudy from "../components/CaseStudy"; import FunnelDiagram from "../components/FunnelDiagram"; import CRMPipeline from "../components/CRMPipeline";
import AnalyticsSection from "../components/AnalyticsSection"; import Process from "../components/Process"; 
import About from "../components/About"; import Skills from "../components/Skills"; import ExperienceTimeline from "../components/ExperienceTimeline";
import Contact from "../components/Contact"; import Footer from "../components/Footer";
export default function Page() {
  return (<><Navbar /><main><Hero /><Work /><CaseStudy /><FunnelDiagram /><CRMPipeline /><AnalyticsSection /><Process /><About /><Skills /><ExperienceTimeline /><Contact /></main><Footer /></>);
}
