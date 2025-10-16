import React from 'react';
import { educationData } from '../constants';
import { GraduationCapIcon, ExternalLinkIcon } from './icons';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white dark:bg-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* --- PERUBAHAN DI SINI --- */}
          <h2 className="text-3xl md:text-4xl font-extrabold">Education</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
            My academic background and formal qualifications.
          </p>
          {/* --- AKHIR PERUBAHAN --- */}
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-teal-500/30"></div>
          {educationData.map((item, index) => (
            <div key={index} className="relative flex items-start mb-10 pl-12">
              <div className="z-10 absolute left-4 -ml-3 bg-teal-500 h-6 w-6 rounded-full flex items-center justify-center border-4 border-white dark:border-charcoal-800">
                <GraduationCapIcon className="w-4 h-4 text-white" />
              </div>
              <div className="w-full bg-gray-50 dark:bg-charcoal-700 p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
                <div className="text-sm font-semibold text-teal-500 mb-2">{item.date}</div>
                <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                <div className="text-md font-medium text-gray-600 dark:text-gray-300 mb-4">{item.institution}</div>
                <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
                
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 text-sm font-medium rounded-md border border-teal-500 text-teal-500 hover:bg-teal-500/10 transition-colors"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                    {/* --- PERUBAHAN DI SINI --- */}
                    View Certificate
                    {/* --- AKHIR PERUBAHAN --- */}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;