import React, { useState, useEffect } from 'react';
import { socialLinks } from '../constants';
import { FolderOpenIcon, MailIcon } from './icons';

const roles = ['Backend Developer', 'Full Stack Developer', 'System Analyst', 'Logistics Expert'];

const Hero: React.FC = () => {
  const [typedRole, setTypedRole] = useState('');
  
  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: number;

    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      setTypedRole(currentRole.substring(0, charIndex));

      let typeSpeed = isDeleting ? 75 : 150;

      if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
      }

      timeoutId = window.setTimeout(type, typeSpeed);
    };

    type();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-teal-600 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* --- BAGIAN YANG DIPERBARUI: DITAMBAHKAN 'object-top' --- */}
            <img
                src="/profile.jpg"
                alt="M Wahyu Heriyanto"
                className="w-48 h-48 rounded-full object-cover object-top border-4 border-white/20 shadow-2xl mb-8 mx-auto"
            />
            {/* --- AKHIR BAGIAN YANG DIPERBARUI --- */}
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">M Wahyu Heriyanto</h1>
            <p className="text-xl md:text-2xl text-teal-300 font-semibold mb-4">Welcome to My Portfolio</p>
            <div className="h-10 text-2xl md:text-3xl font-medium text-teal-300 mb-6">
                <span className="border-r-2 border-teal-300 animate-pulse">{typedRole}</span>
            </div>
            <p className="max-w-2xl mx-auto text-lg text-gray-200 mb-10 leading-relaxed">
                Experienced developer specializing in warehouse management systems, logistics automation, and API integration. Transforming complex business processes into efficient and user-friendly digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a href="#projects" className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-teal-300 hover:bg-teal-400 transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
                    <FolderOpenIcon className="w-5 h-5" />
                    View Projects
                </a>
                <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-teal-300 text-base font-medium rounded-md text-teal-300 bg-transparent hover:bg-teal-300 hover:text-slate-900 transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
                    <MailIcon className="w-5 h-5" />
                    Contact Me
                </a>
            </div>
            <div className="flex gap-6 justify-center">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-teal-300 hover:text-slate-900 transition-all duration-300 transform hover:-translate-y-1">
                        <Icon className="w-6 h-6" />
                    </a>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Hero;