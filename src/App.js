import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content/Content';
import Header from './components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768)

    //choose the screen size 
    const handleResize = () => {
      if (window.innerWidth < 768) {
          setIsMobile(true)
      } else {
          setIsMobile(false)
      }
  }

  // create an event listener
  React.useEffect(() => {
      window.addEventListener("resize", handleResize)

      return function cleanupListener() {
          window.removeEventListener('resize', handleResize)
      };
  })

  return (
    <>
      <div className={isMobile ? "mobile" : ""}>
        <Header/ >
        {isMobile && <Navbar isMobile={isMobile}/>}
      </div>

      <div className="container">
        {!isMobile && <Navbar isMobile={isMobile}/>}
        <Content />
      </div>
    </>
  );
}

export default App;
