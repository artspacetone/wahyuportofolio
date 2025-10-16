import React from 'react';
import { experienceData } from '../constants';
import { CheckIcon } from './icons'; // Menggunakan ikon dari file terpusat

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">Professional Experience</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
            A journey of growth from management to development, focused on digital transformation
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 h-full w-0.5 bg-teal-500/30"></div>
          {experienceData.map((item, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
              <div className="hidden sm:block w-1/2"></div>
              <div className="z-10 absolute left-4 sm:left-1/2 -ml-3 bg-teal-500 h-6 w-6 rounded-full border-4 border-white dark:border-charcoal-800"></div>
              <div className="w-full sm:w-1/2 bg-gray-50 dark:bg-charcoal-700 p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
                <div className="text-sm font-semibold text-teal-500 mb-2">{item.date}</div>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <div className="text-md font-medium text-gray-600 dark:text-gray-300 mb-4">{item.company}</div>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{resp}</span>
                    </li>
                  ))}
                </ul>
                {item.achievement && (
                  <div className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 to-amber-500 text-white px-4 py-2 rounded-md text-sm font-medium">
                    <item.achievement.icon className="w-5 h-5" />
                    <span>{item.achievement.text}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;