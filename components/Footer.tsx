
import React from 'react';
import { socialLinks } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center gap-6 mb-6">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-teal-300 hover:text-slate-900 transition-all duration-300">
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        <p className="mb-2">&copy; {new Date().getFullYear()} M Wahyu Heriyanto. All rights reserved.</p>
        <p className="text-sm text-gray-400">Transforming Ideas into Digital Solutions</p>
      </div>
    </footer>
  );
};

export default Footer;
