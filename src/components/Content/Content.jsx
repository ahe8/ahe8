import About from './About'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Footer from "../Footer";
import Certifications from "./Certifications";

export default function Content() {
  return (
    <div className="content" data-aos="fade-left">
      <About />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Footer />
    </div>
  );
}