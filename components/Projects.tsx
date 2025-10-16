import React from 'react';
import { projectsData } from '../constants';
import { ExternalLinkIcon, GithubIcon, RocketIcon } from './icons';

const ProjectCard: React.FC<{ project: typeof projectsData[0] }> = ({ project }) => {
  const { title, description, features, tech, demoLink, sourceLink, imageUrl } = project;

  return (
    <div className="bg-white dark:bg-charcoal-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-charcoal-700/50 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      
      {/* --- BAGIAN YANG DIPERBARUI --- */}
      <div className="w-full h-48 bg-gray-200 dark:bg-charcoal-900 flex items-center justify-center">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-contain" 
        />
      </div>
      {/* --- AKHIR BAGIAN YANG DIPERBARUI --- */}

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed flex-grow">{description}</p>
        <ul className="space-y-2 mb-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start text-sm">
                <span className="text-teal-500 font-bold mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((tag) => (
            <span key={tag} className="bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-xs font-medium px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-charcoal-700 flex items-center gap-4">
          <a href={demoLink} className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md text-white bg-teal-500 hover:bg-teal-600 transition-colors">
            {sourceLink || title.includes('API') ? <RocketIcon className="w-4 h-4" /> : <ExternalLinkIcon className="w-4 h-4" />}
            {sourceLink ? 'View Demo' : title.includes('API') ? 'Coming Soon' : 'Learn More'}
          </a>
          {sourceLink && (
            <a href={sourceLink} className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-charcoal-700 hover:bg-gray-300 dark:hover:bg-charcoal-600 transition-colors">
              <GithubIcon className="w-4 h-4" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};


const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-teal-500/5 dark:bg-teal-300/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">Featured Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
            Real-world applications solving complex logistics and asset management challenges
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;