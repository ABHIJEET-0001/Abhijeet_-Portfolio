import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, BrainCircuit, Code2, FileText, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => (
  <section id="hero" className="hero-section">
    <div className="container hero-container">
      <motion.div className="hero-content" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
        <div className="hero-eyebrow outfit"><span className="eyebrow-dot" /> Available for opportunities</div>
        <p className="hero-kicker mono">HELLO, I AM</p>
        <h1 className="hero-title outfit">Abhijeet <span>Kasera</span></h1>
        <h2 className="hero-role">AI / ML Engineer · Full-Stack Developer</h2>
        <p className="hero-subtitle">Final-year Computer Science Engineering student building practical, human-centered products with <strong>AI, data, and modern web technology.</strong></p>
        <div className="hero-cta"><Link to="/projects" className="btn btn-primary">Explore my work <ArrowRight size={17} /></Link><Link to="/resume" className="btn btn-secondary"><FileText size={17} /> Experience</Link></div>
        <div className="hero-meta mono"><MapPin size={14} /> Ajmer, Rajasthan, India <span /> Open to on-site, hybrid & remote roles</div>
        <div className="hero-socials">
          <a href="https://github.com/ABHIJEET-0001" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/abhijeet-kasera-bb4416230/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="mailto:abhijeetkasera80@gmail.com" className="social-icon" aria-label="Email"><Mail size={18} /></a>
        </div>
      </motion.div>
      <motion.aside className="career-console" initial={{ opacity: 0, scale: 0.94, x: 22 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.14 }}>
        <div className="console-top"><span className="console-live"><i /> CAREER DASHBOARD</span><Sparkles size={17} /></div>
        <div className="console-profile"><div className="profile-frame"><img src="/profile.png" alt="Abhijeet Kasera" /></div><div><p className="mono">CURRENT FOCUS</p><h3>AI that solves real problems.</h3></div></div>
        <div className="route-grid">
          <Link to="/projects" className="route-card route-card-primary"><Code2 /><span>Build</span><small>Projects & products</small></Link>
          <Link to="/skills" className="route-card"><BrainCircuit /><span>Learn</span><small>Technical toolkit</small></Link>
          <Link to="/resume" className="route-card"><Award /><span>Grow</span><small>Experience & wins</small></Link>
          <Link to="/contact" className="route-card"><Mail /><span>Connect</span><small>Let's talk</small></Link>
        </div>
        <div className="console-footer"><span>14+ hackathons</span><b>•</b><span>23 certifications</span><b>•</b><span>2027 graduate</span></div>
      </motion.aside>
    </div>
  </section>
);
export default Hero;
