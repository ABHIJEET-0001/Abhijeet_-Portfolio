import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Download, Eye, Users } from 'lucide-react';
import './Resume.css';

const Resume = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Government Engineering College Ajmer',
      period: '2023 - 2027',
      description: 'Focusing on AI, Data Structures, and Software Engineering.'
    },
    {
      degree: 'Higher Secondary Education (Science)',
      institution: 'Queen Mary School Ajmer',
      period: '2023',
      description: 'Completed Class XII in Science stream.'
    }
  ];

  const experience = [
    {
      degree: 'AI-Intern',
      institution: 'IBM with AICIT',
      period: 'Aug 2024 - Sep 2024',
      description: 'Built and fine-tuned intelligent AI/ML solutions for real-world data insights.'
    },
    {
      degree: 'Data Science & ML Intern',
      institution: 'Infotact (Remote)',
      period: '2024',
      description: 'Built and optimized data models using Python and Scikit-learn for insightful analysis.'
    },
    {
      degree: 'AI/ML Intern',
      institution: 'OASIS INFOBYTE (Remote)',
      period: 'June 2024',
      description: 'Developed and deployed AI/ML models for predictive analytics.'
    }
  ];

  const honors = [
    'RIFT Hackathon - Finalist in Noida PW IOI (Physical Wallah)',
    'IMC (India Mobile Congress) - Delhi Selected',
    'Hackathon Finalist - AI Agentic',
    'Gen AI Lab - Jaipur',
    'Data Structures and Algorithms - CodeChef',
    'HackerRank - Problem Solving',
  ];

  const professionalSkills = [
    'Effective Verbal & Written Communication',
    'Technical Presentation & Public Speaking',
    'Team Collaboration & Cross-function',
    'Client & Stakeholder Communication',
  ];

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title outfit">Experience & Education</h2>
          <div className="title-underline"></div>
        </div>

        <div className="resume-grid">
          <div className="resume-left">
            <h3 className="sub-title outfit"><Briefcase size={20} /> Experience</h3>
            <div className="timeline">
              {experience.map((edu, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="period">{edu.period}</span>
                    <h4>{edu.degree}</h4>
                    <h5>{edu.institution}</h5>
                    <p>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="sub-title outfit" style={{marginTop: '40px'}}><GraduationCap size={20} /> Education</h3>
            <div className="timeline">
              {education.map((edu, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="period">{edu.period}</span>
                    <h4>{edu.degree}</h4>
                    <h5>{edu.institution}</h5>
                    <p>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-right">
            <h3 className="sub-title outfit"><Award size={20} /> Accomplishments</h3>
            <div className="honors-list">
              {honors.map((honor, idx) => (
                <div key={idx} className="honor-item">
                  <span className="honor-bullet"></span>
                  <p>{honor}</p>
                </div>
              ))}
            </div>

            <h3 className="sub-title outfit" style={{marginTop: '40px'}}><Users size={20} /> Professional Skills</h3>
            <div className="honors-list">
              {professionalSkills.map((skill, idx) => (
                <div key={idx} className="honor-item">
                  <span className="honor-bullet"></span>
                  <p>{skill}</p>
                </div>
              ))}
            </div>

            <div className="resume-action">
              <h4>Ready to collaborate?</h4>
              <p>Download my full resume to see more details about my projects and technical background.</p>
              <div className="resume-btns">
                <a href="/resume.png" download="Abhijeet_Kasera_Resume.png" className="btn btn-primary">
                  <Download size={18} /> Download Resume
                </a>
                <a href="/resume.png" target="_blank" rel="noreferrer" className="btn btn-secondary">
                  <Eye size={18} /> View Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
