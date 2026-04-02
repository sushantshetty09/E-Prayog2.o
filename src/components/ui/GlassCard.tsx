import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  borderColor?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  borderColor = 'var(--glass-border)'
}) => {
  return (
    <motion.div
      className={`glass-effect ${hover ? 'card-hover' : ''} ${className}`}
      style={{ borderColor }}
      whileHover={hover ? { scale: 1.02 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
