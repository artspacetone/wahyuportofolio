import React, { useState, useEffect, useRef } from 'react';
import { skillCategories, professionalSkills } from '../constants';
import type { Skill } from '../types';
import { BriefcaseIcon } from './icons';

const useOnScreen = <T extends Element,>(ref: React.RefObject<T>, rootMargin: string = '0px'): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(entry.target); // Optimasi: berhenti mengamati setelah terlihat
        }
      },
      {
        rootMargin,
      }
    );
    
    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if(currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
};

const SkillBar: React.FC<{ skill: Skill; isVisible: boolean }> = ({ skill, isVisible }) => {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-charcoal-700 rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-teal-400 to-teal-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '-100px');

  return (
    <section id="skills" className="py-24 bg-white dark:bg-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">Skills & Expertise</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
            Technical proficiency combined with business acumen and leadership experience
          </p>
        </div>
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:col-span-2">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 dark:bg-charcoal-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-teal-500 mb-4 flex items-center gap-2">
                  <category.icon className="w-6 h-6" />
                  {category.title}
                </h3>
                <div>
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
                  ))}
                </div>
              </div>
            ))}
             <div className="bg-gray-50 dark:bg-charcoal-700 p-6 rounded-lg shadow-sm md:col-span-2">
                <h3 className="text-xl font-bold text-teal-500 mb-4 flex items-center gap-2">
                    <BriefcaseIcon className="w-6 h-6" />
                    Logistics & Management Expertise
                </h3>
                <div className="flex flex-wrap gap-3">
                    {professionalSkills.map((skill) => (
                        <div key={skill.name} className="bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 text-sm font-medium px-4 py-2 rounded-md">
                            {skill.name}
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;