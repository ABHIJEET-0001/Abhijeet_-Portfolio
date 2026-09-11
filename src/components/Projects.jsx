import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Folder, Star, GitFork, ArrowUpRight } from 'lucide-react';
import { fetchGithubProjects } from '../utils/github';
import './Projects.css';

const featuredProjects = [
  {
    id: 'ecotrack-ai',
    name: 'EcoTrack AI',
    description: 'AI-powered sustainability & carbon tracking platform. Monitor real-time CO2 emissions, green score analytics, 6-month trends, category breakdowns, and personalized AI climate tips.',
    tags: ['React', 'Node.js', 'AI Analytics', 'Chart.js', 'Tailwind CSS'],
    github: 'https://github.com/ABHIJEET-0001',
    demo: '#',
    image: '/projects/ecotrack-ai.png',
    featured: true
  },
  {
    id: 1,
    name: 'Money Mule Detection System',
    description: 'ML-based fraud detection system identifying money mule patterns. Engineered multi-factor indicators and implemented Random Forest classifier.',
    tags: ['Python', 'Scikit-Learn', 'Pandas', 'Render'],
    github: 'https://github.com/ABHIJEET-0001',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'AI Career Advisor',
    description: 'Smart India Hackathon project. An AI-powered web app providing tailored career guidance and skill recommendations using NLP.',
    tags: ['React', 'Node.js', 'OpenAI API', 'Firebase'],
    github: 'https://github.com/ABHIJEET-0001',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    name: 'Smart Traffic Management System',
    description: 'AI-based traffic monitoring system using real-time camera feeds to detect congestion and optimize signal timings.',
    tags: ['Python', 'Flask', 'YOLOv8', 'Firebase'],
    github: 'https://github.com/ABHIJEET-0001',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    name: 'Real-Time Animal Safety App',
    description: 'Full-stack platform for real-time animal safety monitoring with geo-location tracking and instant incident reporting.',
    tags: ['FastAPI', 'Android Studio', 'Firebase', 'Node.js'],
    github: 'https://github.com/ABHIJEET-0001',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  }
];

const Projects = () => {
  const [githubRepos, setGithubRepos] = useState([]);
  const [activeTab, setActiveTab] = useState('featured');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRepos = async () => {
      setLoading(true);
      const repos = await fetchGithubProjects();
      setGithubRepos(repos);
      setLoading(false);
    };
    getRepos();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">04 — Work</span>
          <h2 className="section-title outfit">Featured <span>Projects</span></h2>
          <div className="title-underline" />
        </div>

        <div className="tab-container">
          <button 
            className={`tab-btn ${activeTab === 'featured' ? 'active' : ''}`}
            onClick={() => setActiveTab('featured')}
          >
            Featured Projects
          </button>
          <button 
            className={`tab-btn ${activeTab === 'github' ? 'active' : ''}`}
            onClick={() => setActiveTab('github')}
          >
            GitHub Activity
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'featured' ? (
            <motion.div 
              key="featured"
              className="projects-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {featuredProjects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.name} />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a href={project.github} target="_blank" rel="noreferrer"><Github size={20} /></a>
                        <a href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={20} /></a>
                      </div>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3 className="outfit">{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="github"
              className="github-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {loading ? (
                <div className="loading">Fetching repositories...</div>
              ) : githubRepos.length > 0 ? (
                githubRepos.map((repo) => (
                  <a 
                    key={repo.id} 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="repo-card"
                  >
                    <div className="repo-header">
                      <Folder className="repo-icon" />
                      <div className="repo-stats">
                        <span><Star size={14} /> {repo.stargazers_count}</span>
                        <span><GitFork size={14} /> {repo.forks_count}</span>
                      </div>
                    </div>
                    <h3 className="outfit">{repo.name}</h3>
                    <p>{repo.description || 'No description available.'}</p>
                    <div className="repo-footer">
                      <span className="repo-language">{repo.language}</span>
                      <ArrowUpRight size={16} />
                    </div>
                  </a>
                ))
              ) : (
                <div className="no-repos pink-text">Could not load repositories. Check GITHUB_USERNAME in utils/github.js.</div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
