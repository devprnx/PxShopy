'use client';

import { motion } from 'framer-motion';
import { fadeIn, scaleUp, slideIn, staggerContainer } from '@/animations/variants';

type AnimationVariant = 'fade' | 'scale' | 'slide' | 'stagger';

interface MotionWrapperProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  className?: string;
}

export default function MotionWrapper({
  children,
  variant = 'fade',
  delay = 0,
  className = '',
}: MotionWrapperProps) {
  const getVariant = () => {
    switch (variant) {
      case 'scale':
        return scaleUp;
      case 'slide':
        return slideIn;
      case 'stagger':
        return staggerContainer;
      default:
        return fadeIn;
    }
  };

  return (
    <motion.div
      className={className}
      variants={getVariant()}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        delay,
        duration: 0.5,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
}