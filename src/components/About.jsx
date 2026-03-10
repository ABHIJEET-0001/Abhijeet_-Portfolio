import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code2, Brain, Rocket } from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    { label: 'Engineering Student', icon: <Code2 /> },
    { label: 'AI Enthusiast', icon: <Brain /> },
    { label: 'Problem Solver', icon: <Palette /> },
    { label: 'Continuous Learner', icon: <Rocket /> },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">01 — About</span>
          <h2 className="section-title outfit">Who am <span>I?</span></h2>
          <div className="title-underline" />
        </div>

        <div className="about-grid">
          <motion.div
            className="about-text-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          <p>
            Hi, I'm <strong>Abhijeet Kasera</strong>, an AI/ML Developer and Computer Science Engineering undergraduate. My journey is driven by a hands-on approach to designing intelligent, web-integrated solutions that solve complex real-world problems.
          </p>
          <p>
            My primary focus lies at the intersection of <strong>Artificial Intelligence</strong>, <strong>Machine Learning</strong>, and <strong>Full Stack Development</strong>. I'm proficient in Python, Deep Learning, NLP, and Computer Vision, combined with strong expertise in Flask, JavaScript, HTML, and CSS.
          </p>
          <p>
            As a fast learner with strong problem-solving skills, I continually focus on integrating AI models into modern web ecosystems to build impactful, scalable applications.
          </p>

            <div className="about-badges">
              <span>Full Stack Dev</span>
              <span>Machine Learning</span>
              <span>Computer Vision</span>
              <span>NLP</span>
              <span>Deep Learning</span>
              <span>LLM Integration</span>
            </div>
          </motion.div>

          <div className="about-stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
