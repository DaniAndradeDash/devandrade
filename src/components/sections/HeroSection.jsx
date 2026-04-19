import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import ContactButton from '@/components/ContactButton';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" 
      style={{
        background: 'radial-gradient(100% 100% at 50% 100%, #10B981 0%, #059669 15%, #047857 30%, #1a1b1e 80%)'
      }}
    >
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1678247539441-05ad26a18343)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 inline-block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500 rounded-full blur-xl opacity-50 animate-pulse" />
              <img 
                src="https://horizons-cdn.hostinger.com/014a98d5-4823-4506-80f4-6a5561ddf372/daniel-andrade-foto-smks1.jpg" 
                alt="Daniel Andrade" 
                className="relative w-32 h-32 rounded-full object-cover border-4 border-emerald-500/50"
              />
            </div>
          </motion.div>

          {/* Freelance Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full text-emerald-300 text-sm font-medium">
              💼 Freelance
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4"
          >
            Daniel Andrade
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-2xl sm:text-3xl text-emerald-300 mb-8"
          >
            Desarrollador Web
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
          >
            Creando experiencias digitales únicas con tecnologías modernas
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <ContactButton onClick={scrollToProjects}>
              Ver Mis Proyectos
            </ContactButton>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="cursor-pointer"
              onClick={scrollToProjects}
            >
              <ArrowDown className="text-emerald-300" size={32} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;