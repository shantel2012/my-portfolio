import React from 'react';
import './About.css';
import { Typewriter } from 'react-simple-typewriter';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub } from 'react-icons/fa';
import tino from '../assets/tino.jpg';
import resume from '../assets/resume.png'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src={tino}
            alt="Profile"
          />
        </div>

        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          
          <p className="about-text">
            <Typewriter
              words={[
                "I'm Tinomudaishe Kutama, a passionate software developer with experience in building responsive, full-stack applications using modern technologies. I focus on writing clean, scalable code and delivering intuitive user experiences.",
              ]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>

          <div className="tech-icons">
            <FaReact title="React" />
            <FaNodeJs title="Node.js" />
            <FaJs title="JavaScript" />
            <FaHtml5 title="HTML5" />
            <FaCss3Alt title="CSS3" />
            <FaGithub title="GitHub" />
          </div>

          <a
            href={resume}
            className="cv-button"
            download
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
