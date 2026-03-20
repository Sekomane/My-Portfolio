import React from 'react';
import '../styles/Skills.css';
import { 
  FaJava, FaReact, FaPython, FaPhp, FaHtml5, FaCss3Alt, 
  FaJs, FaGit, FaLinux, FaWindows, FaDocker 
} from 'react-icons/fa';

import { 
  SiKotlin, SiMysql, SiBootstrap, SiOracle, 
  SiDotnet, SiFirebase, SiCsharp, SiSqlite 
} from 'react-icons/si';

import { motion } from 'framer-motion';

const categories = {

  Frontend: [
    { name: 'React', icon: <FaReact /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'Bootstrap', icon: <SiBootstrap /> },
  ],

  Backend: [
    { name: 'C#', icon: <SiCsharp /> },
    { name: '.NET', icon: <SiDotnet /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Kotlin', icon: <SiKotlin /> },
  ],

  Database: [
    { name: 'SQL', icon: <SiMysql /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'SQL Server', icon: <SiSqlite /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'PL/SQL', icon: <SiOracle /> },
  ],

  'DevOps & Tools': [
    { name: 'Git', icon: <FaGit /> },
    { name: 'Docker', icon: <FaDocker /> },
  ],

  'Operating Systems': [
    { name: 'Linux', icon: <FaLinux /> },
    { name: 'Windows', icon: <FaWindows /> },
  ],

  'Software Engineering': [
    { name: 'REST APIs' },
    { name: 'MVVM Architecture' },
    { name: 'Domain-Driven Design' },
    { name: 'Agile Development' },
    { name: 'OOP' },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <h2>Skills</h2>

      {Object.entries(categories).map(([category, skills]) => (
        <div key={category} className="skills-category">

          <h3>{category}</h3>

          <div className="skills-grid">
            {skills
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((skill, index) => (
                
                <motion.div
                  className="skill-card"
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  
                  <div className="icon">
                    {skill.icon || <span className="no-icon">•</span>}
                  </div>

                  <div className="skill-name">
                    {skill.name}
                  </div>

                </motion.div>
              ))}
          </div>

        </div>
      ))}
    </section>
  );
};

export default Skills;
