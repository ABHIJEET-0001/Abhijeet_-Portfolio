import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Learning from './components/Learning';
import GithubStats from './components/GithubStats';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundElements from './components/BackgroundElements';
import CustomCursor from './components/CustomCursor';
import './App.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <BackgroundElements />
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div className="section-divider" />
              <About />
              <div className="section-divider" />
              <Skills />
            </>
          } />
          <Route path="/about" element={
            <>
              <About />
              <div className="section-divider" />
              <Skills />
            </>
          } />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={
            <>
              <Projects />
              <div className="section-divider" />
              <GithubStats />
            </>
          } />
          <Route path="/growth" element={<Learning />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
