import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content/Content';
import Header from './components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectDetails from './components/Content/ProjectDetails';
import projects from './data/projects.json';

function App() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768)

  useEffect(() => {
    AOS.init();
  }, [])

  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return function cleanupListener() {
      window.removeEventListener('resize', handleResize)
    };
  })

  const projectDetailsArray = projects.map((project) =>
    <ProjectDetails
      key={project.id}
      {...project}
    />
  )

  return (
    <>
      <div className={isMobile ? "mobile" : ""}>
        <Header />
        {isMobile && <Navbar isMobile={isMobile} />}
      </div>
      {projectDetailsArray}
      <div className="container">
        {!isMobile && <Navbar isMobile={isMobile} />}
        <Content />
      </div>
    </>
  );
}

export default App;
