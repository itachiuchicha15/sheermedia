import React from 'react';
import { motion } from 'framer-motion';

interface MinimalTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}

export const MinimalText: React.FC<MinimalTextProps> = ({ text, className, delay = 0, as = 'h2' }) => {
  const Component = motion[as as keyof typeof motion] || motion.h2;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {text}
    </Component>
  );
};
