import React from 'react';
import { stats } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-teal-500/5 dark:bg-teal-300/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">About Me</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
            Backend & Full Stack Developer with unique expertise in logistics and warehouse management systems
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              I am a Backend & Full Stack Developer with deep experience in warehouse management systems (WMS), logistics automation, and API integration. With a professional background in asset and logistics management at Trans TV, I focus on building digital solutions that simplify complex business processes into efficient and user-friendly applications.
            </p>
            <p>
              Proficient in Node.js, React.js, TypeScript, PostgreSQL, SQL Server, and MongoDB, I deliver robust, secure, and scalable web-based systems. My unique combination of technical skills and real-world business experience allows me to create solutions that truly address operational challenges.
            </p>
            <a 
              href="/wahyuporto.pdf" 
              download="CV-M-Wahyu-Heriyanto.pdf"
              className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-500 hover:bg-teal-600 transition-colors"
            >
              Download CV
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-charcoal-800 p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-teal-500 mb-2">{stat.value}</div>
                <div className="text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;