import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import SkillBar from '@/components/SkillBar';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: 'React / Next.js', level: 95, color: 'emerald' },
    { name: 'Tailwind CSS', level: 90, color: 'emerald' },
    { name: 'JavaScript / TypeScript', level: 88, color: 'emerald' },
    { name: 'Node.js', level: 85, color: 'emerald' },
    { name: 'PostgreSQL / SQL', level: 82, color: 'emerald' },
    { name: 'REST APIs', level: 90, color: 'emerald' },
    { name: 'Git / GitHub', level: 87, color: 'emerald' },
    { name: 'Responsive Design', level: 93, color: 'emerald' }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Habilidades</SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <SkillBar 
                  name={skill.name} 
                  level={skill.level} 
                  color={skill.color}
                  isInView={isInView}
                  delay={index * 0.1}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-slate-900/50 rounded-xl p-6 border border-emerald-500/20">
            <h3 className="text-xl font-bold text-white mb-3">Frontend</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• React & Next.js</li>
              <li>• Tailwind CSS</li>
              <li>• Framer Motion</li>
              <li>• Responsive Design</li>
            </ul>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-emerald-500/20">
            <h3 className="text-xl font-bold text-white mb-3">Backend</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Node.js & Express</li>
              <li>• REST APIs</li>
              <li>• PostgreSQL</li>
              <li>• Authentication</li>
            </ul>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-emerald-500/20">
            <h3 className="text-xl font-bold text-white mb-3">Herramientas</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Git & GitHub</li>
              <li>• VS Code</li>
              <li>• Figma</li>
              <li>• Vercel & Netlify</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;