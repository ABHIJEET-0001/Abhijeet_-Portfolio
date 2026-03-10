import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Growth', href: '/growth' },
    { name: 'Resume', href: '/resume' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="logo outfit">
          <span className="logo-bracket">&lt;</span>
          ABHI<span className="gradient-text">JEET</span>
          <span className="logo-bracket">/&gt;</span>
        </Link>

        <div className="nav-links">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.href} 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.name}
            </NavLink>
          ))}
          <div className="nav-divider" />
          <div className="nav-socials">
            <a href="https://github.com/ABHIJEET-0001" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/abhijeet-kasera-bb4416230/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
          </div>
          <div className="nav-status">
            <span className="status-dot" />
            Open for Work
          </div>
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.href}
            className="mobile-link"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
        <div className="mobile-socials">
          <a href="https://github.com/ABHIJEET-0001" target="_blank" rel="noreferrer"><Github size={22} /></a>
          <a href="https://www.linkedin.com/in/abhijeet-kasera-bb4416230/" target="_blank" rel="noreferrer"><Linkedin size={22} /></a>
          <a href="mailto:abhijeetkasera80@gmail.com"><Mail size={22} /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
