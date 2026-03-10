import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link to="/" className="footer-logo outfit">
              Abhi<span className="gradient-text">jeet</span> Kasera
            </Link>
            <span className="footer-tagline">// AI Researcher · Full-Stack Engineer</span>
          </div>

          <nav className="footer-nav">
            {navLinks.map(link => (
              <Link key={link.name} to={link.path}>{link.name}</Link>
            ))}
          </nav>

          <div className="footer-socials">
            <a href="https://github.com/ABHIJEET-0001" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={17} />
            </a>
            <a href="https://www.linkedin.com/in/abhijeet-kasera-bb4416230/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
            <a href="mailto:abhijeetkasera80@gmail.com" aria-label="Email">
              <Mail size={17} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Abhijeet Kasera. All rights reserved.</p>
          <p className="footer-note">
            Built with <Heart size={13} className="heart-icon" /> and passion for technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
