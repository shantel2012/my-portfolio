import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import {
  CircularProgressbar,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  { name: 'React', level: 90 },
  { name: 'CSS / Styled Components', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'Node.js ', level: 75 },
  { name: 'Responsive Design', level: 85 },
  { name: 'React Router', level: 70 },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="skills-title"
        >
          My Skills
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div
              className="skill-card"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <CircularProgressbar
                value={skill.level}
                text={`${skill.level}%`}
                styles={buildStyles({
                  textColor: '#facc15',
                  pathColor: '#facc15',
                  trailColor: '#1e293b',
                  textSize: '20px',
                })}
              />
              <h4>{skill.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;