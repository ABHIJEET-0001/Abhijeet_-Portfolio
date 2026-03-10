import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, FileText, ArrowRight, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">

        {/* ---- Left Content ---- */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            className="hero-eyebrow outfit"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="eyebrow-dot" />
            CS &amp; Engineering Undergraduate
          </motion.div>

          <h1 className="hero-title outfit">
            Abhijeet
            <span className="hero-title-line2"> Kasera</span>
          </h1>

          <h2 className="hero-role">
            AI Researcher &amp; Full-Stack Engineer
          </h2>

          <p className="hero-subtitle">
            Building intelligent systems at the intersection of <strong style={{color: 'var(--text-primary)'}}>Machine Learning</strong>, scalable web architecture, and algorithmic problem solving. Focused on clean code and real-world impact.
          </p>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number outfit">5+</span>
              <span className="stat-desc">AI Projects</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number outfit">3+</span>
              <span className="stat-desc">Years Coding</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number outfit">10+</span>
              <span className="stat-desc">Technologies</span>
            </div>
          </div>

          <div className="hero-cta">
            <motion.div
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link to="/projects" className="btn btn-primary">
                View Projects <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link to="/resume" className="btn btn-secondary">
                <FileText size={16} /> Curriculum Vitae
              </Link>
            </motion.div>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/ABHIJEET-0001" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/abhijeet-kasera-bb4416230/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:abhijeetkasera80@gmail.com" className="social-icon" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        {/* ---- Right: Profile Image ---- */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="image-ring" />
          <div className="image-ring-2" />

          <div className="image-main">
            <img src="/profile.png" alt="Abhijeet Kasera — AI Researcher & Full Stack Engineer" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
