
import React, { useState, useEffect } from 'react';
import { ChevronUpIcon } from './icons';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-teal-500 text-white rounded-full shadow-lg flex items-center justify-center transition-opacity duration-300 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-label="Go to top"
    >
      <ChevronUpIcon className="w-6 h-6" />
    </button>
  );
};

export default BackToTopButton;
