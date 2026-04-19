import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ children }) => {
  return (
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-white mb-4"
      >
        {children}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '80px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto rounded-full"
      />
    </div>
  );
};

export default SectionTitle;