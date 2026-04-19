import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ContactButton = ({ children, onClick, className = '' }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        onClick={onClick}
        className={`bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-lg font-medium transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 ${className}`}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default ContactButton;