import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Honors from './components/Honors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content font-sans">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Honors />
      <Footer />
    </div>
  );
}

export default App;
