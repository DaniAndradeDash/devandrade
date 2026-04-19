import React from 'react';
import { motion } from 'framer-motion';

const TechTag = ({ tech }) => {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-medium rounded-full"
    >
      {tech}
    </motion.span>
  );
};

export default TechTag;