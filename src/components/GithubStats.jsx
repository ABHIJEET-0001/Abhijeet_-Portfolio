import React from 'react';
import { motion } from 'framer-motion';
import { Github, TrendingUp, BarChart3, Code2 } from 'lucide-react';
import './GithubStats.css';

const GITHUB_USERNAME = 'ABHIJEET-0001';

const GithubStats = () => {
  return (
    <section className="github-stats-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title outfit">GitHub Activity</h2>
          <div className="title-underline"></div>
        </div>

        <div className="stats-grid">
          {/* Main Stats Card */}
          <motion.div 
            className="stat-img-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="card-header">
              <Github size={20} className="icon-blue" />
              <h3>Overall Stats</h3>
            </div>
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&bg_color=18181B&title_color=2563eb&text_color=f8fafc&icon_color=2563eb&border_color=27272a`} 
              alt="GitHub Stats" 
            />
          </motion.div>

          {/* Languages Card */}
          <motion.div 
            className="stat-img-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="card-header">
              <Code2 size={20} className="icon-blue" />
              <h3>Most Used Languages</h3>
            </div>
            <img 
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&bg_color=18181B&title_color=2563eb&text_color=f8fafc&border_color=27272a`} 
              alt="Top Languages" 
            />
          </motion.div>
        </div>

        {/* GitHub Graph / Streak */}
        <motion.div 
          className="streak-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="card-header">
            <TrendingUp size={20} className="icon-blue" />
            <h3>Commit Streak</h3>
          </div>
          <img 
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&background=18181b&ring=2563eb&fire=2563eb&currStreakNum=f8fafc&sideNums=f8fafc&currStreakLabel=94a3b8&sideLabels=94a3b8&dates=94a3b8&stroke=27272a&border=27272a&hide_border=false`} 
            alt="GitHub Streak" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GithubStats;
