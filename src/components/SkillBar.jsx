import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ name, level, color = 'emerald', isInView, delay = 0 }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-emerald-400 font-bold">{level}%</span>
      </div>
      
      {/* Progress Bar Background */}
      <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
        {/* Progress Bar Fill */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ 
            duration: 1, 
            delay: delay + 0.2,
            ease: "easeOut" 
          }}
          className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full relative"
        >
          {/* Shine Effect */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={isInView ? { x: '200%' } : { x: '-100%' }}
            transition={{ 
              duration: 1.5, 
              delay: delay + 0.5,
              ease: "easeInOut" 
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SkillBar;