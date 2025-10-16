
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

const App: React.FC = () => {
  return (
    <div className="bg-cream-50 dark:bg-charcoal-700 text-slate-900 dark:text-gray-200 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;
