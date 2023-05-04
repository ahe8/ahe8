import React from "react";
import About from './About'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Footer from "../Footer";

export default function Content() {
  return (
    <div className="content" data-aos="fade-left">
      <About />
      <Projects />
      <Education />
      <Experience />
      <Footer />
    </div>
  );
}