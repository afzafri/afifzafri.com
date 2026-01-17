'use client';

import { motion } from 'framer-motion';

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function ShinyText({ children, className = '' }: ShinyTextProps) {
  return (
    <motion.span
      className={`shiny-text ${className}`}
      initial={{ backgroundPosition: '200% center' }}
      animate={{ backgroundPosition: '-200% center' }}
      transition={{
        duration: 3,
        ease: 'linear',
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      {children}
    </motion.span>
  );
}
