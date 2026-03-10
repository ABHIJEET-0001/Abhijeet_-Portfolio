import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Network, Globe, Terminal, Layers, MonitorSmartphone } from 'lucide-react';
import './BackgroundElements.css';

const icons = [
  { Icon: Code2, size: 100, x: '8%', y: '12%', delay: 0 },
  { Icon: Cpu, size: 120, x: '88%', y: '18%', delay: 2 },
  { Icon: Database, size: 90, x: '82%', y: '62%', delay: 4 },
  { Icon: Network, size: 110, x: '12%', y: '72%', delay: 1 },
  { Icon: Globe, size: 140, x: '18%', y: '42%', delay: 3 },
  { Icon: Layers, size: 100, x: '78%', y: '88%', delay: 5 },
  { Icon: Terminal, size: 95, x: '52%', y: '28%', delay: 2.5 },
  { Icon: MonitorSmartphone, size: 105, x: '48%', y: '78%', delay: 4.5 },
];

const BackgroundElements = () => {
  return (
    <div className="bg-elements-container">
      <div className="bg-gradient-overlay top-radial"></div>
      <div className="bg-gradient-overlay bottom-radial"></div>
      {icons.map((item, index) => {
        const { Icon } = item;
        return (
          <motion.div
            key={index}
            className="floating-icon"
            style={{
              left: item.x,
              top: item.y,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.03, 0.08, 0.03],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut"
            }}
          >
            <Icon size={item.size} strokeWidth={0.5} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default BackgroundElements;
