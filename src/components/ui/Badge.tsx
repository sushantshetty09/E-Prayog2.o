import React from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'green' | 'cyan' | 'purple' | 'lime';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'green':
        return 'bg-green/10 border-green text-green';
      case 'cyan':
        return 'bg-cyan/10 border-cyan text-cyan';
      case 'purple':
        return 'bg-purple/10 border-purple text-purple';
      case 'lime':
        return 'bg-lime/10 border-lime text-lime';
      default:
        return 'glass-effect border-glass-border text-white';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1 text-xs';
      case 'lg':
        return 'px-6 py-3 text-base';
      default:
        return 'px-4 py-2 text-sm';
    }
  };

  return (
    <motion.span
      className={`
        inline-flex items-center justify-center
        border rounded-full font-medium
        ${getVariantStyles()}
        ${getSizeStyles()}
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      {children}
    </motion.span>
  );
};

export default Badge;
