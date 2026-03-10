import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Brain, Settings } from 'lucide-react';
import './Learning.css';

const focusAreas = [
  {
    title: 'Data Structures & Algorithms',
    icon: <Code />,
    description: 'Mastering algorithmic efficiency and complex data structures for problem solving.',
    progress: 85,
  },
  {
    title: 'Machine Learning',
    icon: <Brain />,
    description: 'Exploring deep learning, neural networks, and AI-driven predictive modeling.',
    progress: 75,
  },
  {
    title: 'System Design',
    icon: <Settings />,
    description: 'Learning to build scalable, distributed, and highly available software systems.',
    progress: 60,
  },
  {
    title: 'Full Stack Development',
    icon: <BookOpen />,
    description: 'Perfecting modern web technologies from interactive frontends to robust backends.',
    progress: 90,
  },
];

const Learning = () => {
  return (
    <section id="learning" className="learning-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title outfit">Learning & Growth</h2>
          <div className="title-underline"></div>
        </div>

        <div className="learning-grid">
          {focusAreas.map((area, idx) => (
            <motion.div 
              key={idx}
              className="learning-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="learning-icon">{area.icon}</div>
              <h3 className="outfit">{area.title}</h3>
              <p>{area.description}</p>
              <div className="area-progress">
                <div className="progress-label">Proficiency</div>
                <div className="bar-bg">
                  <motion.div 
                    className="bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${area.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Learning;
