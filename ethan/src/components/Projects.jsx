import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import hyn from '../assets/hyn.jpg';
import build from '../assets/build.jpg';
import resume from '../assets/resume.pdf';


const projects = [
  {
    title: "Parking Space Finder",
    description: "React-based app for finding and booking parking spaces.",
    image: {hyn},
    link: "https://github.com/yourusername/parking-space-finder"
  },
  {
    title: "Buildlink Construction Platform",
    description: "Multi-page React app for hiring handymen and showcasing companies.",
    image: {build},
    link: "https://github.com/yourusername/buildlink"
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React and CSS.",
    image: {hyn},
    link: "https://github.com/yourusername/portfolio"
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="projects-title"
      >
        ✨ My Projects
      </motion.h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Code</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
