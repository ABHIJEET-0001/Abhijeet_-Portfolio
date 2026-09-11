import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Briefcase, Trophy, ExternalLink, Eye, Download, X, Search, CheckCircle, ShieldCheck, Sparkles, Star } from 'lucide-react';
import './Certificates.css';

const certificatesData = [
  {
    id: 'cert-nakshatra',
    title: '1st Position - CODE Nakshatra-II',
    issuer: 'CODE RANGERS (TIIPS, Greater Noida)',
    category: 'Hackathons',
    date: '7-8th May 2026',
    type: '1st Position Winner (Team F1MAX)',
    description: 'Secured 1st Position in the 24-hour high-intensity hackathon CODE Nakshatra-II organized by CODE RANGERS at TIIPS, Greater Noida with Team F1MAX.',
    skills: ['24-hr Hackathon', 'Rapid Prototyping', 'Team Leadership', 'Problem Solving'],
    image: '/certificates/code-nakshatra-2-1st-place.png',
    credentialUrl: '#',
    badgeText: '🏆 1st Place Award',
    featured: true
  },
  {
    id: 'cert-codehive',
    title: 'THE BIG SHIFT 1.0 - GeeksforGeeks',
    issuer: 'CodeHive & GeeksforGeeks, Noida',
    category: 'Hackathons',
    date: '8 May 2026',
    type: 'Hackathon Finalist',
    description: 'Participated in THE BIG SHIFT 1.0 organized by CodeHive at GeeksforGeeks Headquarters in Noida, demonstrating active enthusiasm towards technology and innovation.',
    skills: ['GeeksforGeeks Noida', 'System Design', 'Algorithms', 'Community Learning'],
    image: '/certificates/codehive-gfg-the-big-shift.png',
    credentialUrl: '#',
    badgeText: 'GFG Noida Hackathon',
    featured: true
  },
  {
    id: 'cert-amd',
    title: 'AMD Slingshot Campus Days Ideathon 2026',
    issuer: 'AMD India & H2S',
    category: 'Hackathons',
    date: '3 April 2026',
    type: 'Ideathon Certification',
    description: 'Mastered the fundamentals of agentic workflows and vibe coding during the high-intensity on-ground AMD Slingshot Campus Days Ideathon in Jaipur.',
    skills: ['Agentic Workflows', 'Vibe Coding', 'AI Ideation', 'AMD Slingshot'],
    image: '/certificates/amd-slingshot-ideathon.png',
    credentialUrl: '#',
    badgeText: 'AMD Certified',
    featured: true
  },
  {
    id: 'cert-technotarang',
    title: 'TECHNO TARANG HACKATHON 3.0',
    issuer: 'Poornima College of Engineering, Jaipur',
    category: 'Hackathons',
    date: '18-19th April 2026',
    type: 'Hackathon Participation',
    description: 'Participated in Techno Tarang Hackathon 3.0 ("Where Code Builds The Future of Earth") organized by Poornima College of Engineering in Jaipur.',
    skills: ['Hack2Skill', 'Sustainable Tech', 'Full-Stack Web', 'Rapid Development'],
    image: '/certificates/techno-tarang-hackathon-3.png',
    credentialUrl: '#',
    badgeText: 'National Hackathon'
  },
  {
    id: 'cert-shankara',
    title: 'SHANKARA GLOBAL HACKATHON',
    issuer: 'Shankara Group of Institutions & RTU Kota',
    category: 'Hackathons',
    date: '27-28th Feb 2026',
    type: 'Global Hackathon',
    description: 'Participated in the 24-hour non-stop Shankara Global Hackathon Innovation & Startup Competition in association with RTU-Kota, MBM-Jodhpur & BTU-Bikaner.',
    skills: ['24-hr Non-Stop Coding', 'Startup Innovation', 'Full Stack Development'],
    image: '/certificates/shankara-global-hackathon.png',
    credentialUrl: '#',
    badgeText: 'Global Hackathon'
  },
  {
    id: 'cert-celebal',
    title: 'Data Science Internship Certificate',
    issuer: 'Celebal Technologies',
    category: 'Internships',
    date: '2024',
    type: 'Data Science Internship',
    description: 'Applied data science, machine learning models, data pipeline building, and predictive analytics in a commercial software production setting.',
    skills: ['Python', 'Data Science', 'Machine Learning', 'SQL', 'Data Analytics'],
    image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=800&auto=format&fit=crop',
    credentialUrl: '#',
    badgeText: 'Verified Internship'
  },
  {
    id: 'cert-napses',
    title: 'Full-Stack Developer Internship',
    issuer: 'Napses Technologies',
    category: 'Internships',
    date: '2024',
    type: 'Web Dev Internship',
    description: 'Developed modern responsive web frontends, backend RESTful services, database schema design, and deployment pipelines.',
    skills: ['React.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop',
    credentialUrl: '#',
    badgeText: 'Verified Internship'
  },
  {
    id: 'cert-mnit-ibm',
    title: 'AI/ML & Research Training Certificate',
    issuer: 'MNIT Jaipur & IBM',
    category: 'Certifications',
    date: '2023 - 2024',
    type: 'Professional Specialization',
    description: 'In-depth specialization in Artificial Intelligence, Neural Networks, Deep Learning principles, and research-backed system design.',
    skills: ['Artificial Intelligence', 'Deep Learning', 'PyTorch', 'TensorFlow'],
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=800&auto=format&fit=crop',
    credentialUrl: '#',
    badgeText: 'IBM & MNIT Certified'
  }
];

const categories = ['All', 'Hackathons', 'Internships', 'Certifications'];

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredCertificates = certificatesData.filter(cert => {
    const matchesCategory = activeCategory === 'All' || cert.category === activeCategory;
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cert.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="certificates-section">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="badge-pill">
            <ShieldCheck size={16} className="badge-icon" /> Verified Credentials & Awards
          </div>
          <h2 className="outfit section-title">
            Certificates & <span className="gradient-text">Hackathons</span>
          </h2>
          <p className="section-description">
            A showcase of my official hackathon wins, participation credentials, internship certificates, and AI/ML specializations.
          </p>
        </motion.div>

        {/* Filter and Search Bar */}
        <motion.div 
          className="cert-controls"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="category-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'Hackathons' && <Trophy size={15} />}
                {cat === 'Internships' && <Briefcase size={15} />}
                {cat === 'Certifications' && <Award size={15} />}
                {cat === 'All' && <Sparkles size={15} />}
                <span>{cat}</span>
              </button>
            ))}
          </div>

          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search by title, event, skill, or org..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery('')}>
                <X size={16} />
              </button>
            )}
          </div>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div 
          className="certificates-grid"
          layout
        >
          <AnimatePresence>
            {filteredCertificates.map(cert => (
              <motion.div
                key={cert.id}
                className={`cert-card ${cert.featured ? 'featured-card' : ''}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedCert(cert)}
              >
                <div className="cert-preview">
                  <img src={cert.image} alt={cert.title} loading="lazy" />
                  <div className="cert-overlay">
                    <span className="view-btn">
                      <Eye size={18} /> View Full Certificate
                    </span>
                  </div>
                  <span className="cert-type-badge">{cert.badgeText}</span>
                  {cert.featured && (
                    <span className="featured-star" title="Featured Achievement">
                      <Star size={14} fill="#eab308" color="#eab308" />
                    </span>
                  )}
                </div>

                <div className="cert-content">
                  <div className="cert-meta">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-date">{cert.date}</span>
                  </div>

                  <h3 className="cert-title outfit">{cert.title}</h3>
                  <p className="cert-description">{cert.description}</p>

                  <div className="cert-skills">
                    {cert.skills.map((skill, index) => (
                      <span key={index} className="skill-chip">{skill}</span>
                    ))}
                  </div>

                  <div className="cert-card-footer">
                    <button className="cert-action-link" onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCert(cert);
                    }}>
                      <CheckCircle size={15} /> View Details & Certificate
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCertificates.length === 0 && (
          <div className="no-results">
            <Award size={48} />
            <h3>No certificates found</h3>
            <p>Try searching for another term or click 'All' to view all credentials.</p>
          </div>
        )}

        {/* Modal Certificate Viewer */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div 
              className="cert-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
            >
              <motion.div 
                className="cert-modal-content"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="modal-close-btn" onClick={() => setSelectedCert(null)}>
                  <X size={24} />
                </button>

                <div className="modal-body">
                  <div className="modal-image-container">
                    <img src={selectedCert.image} alt={selectedCert.title} />
                  </div>

                  <div className="modal-details">
                    <div className="modal-badge">{selectedCert.badgeText}</div>
                    <h2 className="modal-title outfit">{selectedCert.title}</h2>
                    
                    <div className="modal-meta-grid">
                      <div>
                        <span className="meta-label">Organized By / Issuer</span>
                        <span className="meta-value">{selectedCert.issuer}</span>
                      </div>
                      <div>
                        <span className="meta-label">Date / Period</span>
                        <span className="meta-value">{selectedCert.date}</span>
                      </div>
                      <div>
                        <span className="meta-label">Category</span>
                        <span className="meta-value">{selectedCert.category}</span>
                      </div>
                      <div>
                        <span className="meta-label">Honor / Status</span>
                        <span className="meta-value">{selectedCert.type}</span>
                      </div>
                    </div>

                    <div className="modal-section">
                      <h4>Event Overview & Achievement</h4>
                      <p>{selectedCert.description}</p>
                    </div>

                    <div className="modal-section">
                      <h4>Verified Technologies & Competencies</h4>
                      <div className="cert-skills">
                        {selectedCert.skills.map((skill, index) => (
                          <span key={index} className="skill-chip active">{skill}</span>
                        ))}
                      </div>
                    </div>

                    <div className="modal-actions">
                      <a 
                        href={selectedCert.image} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="modal-btn primary-btn"
                        download={`${selectedCert.title}.png`}
                      >
                        <Download size={18} /> Open / Download Full Resolution
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;
