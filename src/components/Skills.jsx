import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Wrench, Cpu, Terminal } from 'lucide-react';
import './Skills.css';

const BrainCircuit = ({ ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0 .98 4.96 2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 1.98 3 2.5 2.5 0 0 0 4.96-.46" />
    <path d="M12 4.5a2.5 2.5 0 0 1 4.96-.46 2.5 2.5 0 0 1 1.98 3 2.5 2.5 0 0 1-.98 4.96 2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1-1.98 3 2.5 2.5 0 0 1-4.96-.46" />
    <path d="M12 8v8" />
    <path d="M16 12H8" />
  </svg>
);

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code2 />,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Java & C++', level: 80 },
      { name: 'HTML & CSS', level: 95 },
      { name: 'NoSQL', level: 75 },
    ]
  },
  {
    title: 'Frameworks & Libraries',
    icon: <Globe />,
    skills: [
      { name: 'React & Express.js', level: 85 },
      { name: 'Tailwind CSS & Bootstrap', level: 90 },
      { name: 'NumPy & Pandas', level: 85 },
      { name: 'Flask', level: 80 },
    ]
  },
  {
    title: 'AI & Data Science',
    icon: <BrainCircuit />,
    skills: [
      { name: 'Deep Learning & NLP', level: 85 },
      { name: 'Computer Vision', level: 80 },
      { name: 'LLM & AI Integration', level: 90 },
      { name: 'Scikit-Learn', level: 85 },
    ]
  },
  {
    title: 'Tools & DevOps',
    icon: <Wrench />,
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker & Kubernetes', level: 75 },
      { name: 'Firebase', level: 85 },
      { name: 'CI/CD Pipelines', level: 80 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">02 — Skills</span>
          <h2 className="section-title outfit">Technical <span>Arsenal</span></h2>
          <div className="title-underline" />
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="category-title">
                {cat.icon}
                <h3>{cat.title}</h3>
              </div>
              <div className="skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div 
                        className="progress-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (sIdx * 0.1) }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
