import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import Footer from '@/components/Footer';
import { Clock, Hammer, Code2 } from 'lucide-react';

const ComingSoonPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-hidden">
      <ParticleBackground />

      <div className="flex-grow flex items-center justify-center w-full px-4 py-16">
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          {/* Glassmorphism Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-slate-900/60 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-8 md:p-12 shadow-2xl shadow-emerald-900/20"
          >
            {/* Icons */}
            <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-8">
              <div className="p-4 bg-emerald-500/10 rounded-full border border-emerald-500/30">
                <Code2 className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="p-4 bg-emerald-500/10 rounded-full border border-emerald-500/30">
                <Hammer className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="p-4 bg-emerald-500/10 rounded-full border border-emerald-500/30">
                <Clock className="w-8 h-8 text-emerald-400" />
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 mb-6 tracking-tight drop-shadow-sm"
            >
              Próximamente
            </motion.h1>

            {/* Subtitle */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Mi portafolio está en construcción
              </h2>
              <p className="text-gray-300 max-w-xl mx-auto text-lg leading-relaxed">
                Estoy trabajando duro para crear una experiencia digital única. 
                Muy pronto podrás ver mis últimos proyectos y habilidades en desarrollo web.
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div 
              variants={itemVariants}
              className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto rounded-full my-8" 
            />

            {/* Contact Preview */}
            <motion.div variants={itemVariants} className="mt-8">
              <p className="text-sm text-emerald-300 font-medium mb-2 uppercase tracking-wider">
                ¿Necesitas contactarme ya?
              </p>
              <a 
                href="mailto:daniel.freelance@devandrade.com" 
                className="text-white hover:text-emerald-400 transition-colors duration-300 text-lg font-medium"
              >
                daniel.freelance@devandrade.com
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComingSoonPage;