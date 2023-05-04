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

  return (
    <>
      <Header/ >
      <div className="container">
        <Navbar />
        <Content />
      </div>
    </>
  );
}

export default App;
