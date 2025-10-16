import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // --- PERBAIKAN DI SINI ---
      // Ubah dari 10 menjadi 1. Navbar akan menjadi solid setelah scroll 1 pixel.
      setIsScrolled(window.scrollY > 1); 

      const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean);
      let currentSection = 'home';
      for (const section of sections) {
        if (section && section.offsetTop <= window.scrollY + 100) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-xl font-bold text-white">
            M Wahyu Heriyanto
          </a>
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${activeSection === link.href.substring(1) ? 'text-teal-300' : 'text-gray-300 hover:text-teal-300'}`}>
                    {link.label}
                    {activeSection === link.href.substring(1) && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-300"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none p-2">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-slate-900 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) => (
                <li key={link.href}>
                <a href={link.href} onClick={closeMenu} className={`text-2xl font-medium transition-colors ${activeSection === link.href.substring(1) ? 'text-teal-300' : 'text-gray-300 hover:text-teal-300'}`}>
                    {link.label}
                </a>
                </li>
            ))}
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;