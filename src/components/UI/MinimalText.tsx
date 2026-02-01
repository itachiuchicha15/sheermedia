
import React from 'react';
import { motion } from 'framer-motion';

interface MinimalTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const MinimalText: React.FC<MinimalTextProps> = ({ text, className, delay = 0 }) => {
  return (
    <motion.h2 
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {text}
    </motion.h2>
  );
};
