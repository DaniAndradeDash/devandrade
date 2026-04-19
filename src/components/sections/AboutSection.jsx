import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Code, Palette, Settings, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Palette,
      title: 'Rediseños',
      description: 'Transformo sitios web existentes en experiencias modernas y atractivas'
    },
    {
      icon: Code,
      title: 'Páginas desde plantilla',
      description: 'Desarrollo rápido y eficiente usando las mejores plantillas del mercado'
    },
    {
      icon: Sparkles,
      title: 'Diseños personalizados',
      description: 'Creo soluciones únicas adaptadas a tu marca y necesidades específicas'
    },
    {
      icon: Settings,
      title: 'Sistemas a la medida',
      description: 'Desarrollo aplicaciones web completas con funcionalidades personalizadas'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Sobre Mí</SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Soy Daniel Andrade, un desarrollador web freelance apasionado por crear soluciones digitales 
            que impulsan negocios. Con experiencia en tecnologías modernas como React, 
            Next.js y Tailwind CSS, me especializo en transformar ideas en productos web 
            funcionales y atractivos.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Mi objetivo es proporcionar soluciones web personalizadas que no solo cumplan 
            con tus expectativas, sino que las superen. Cada proyecto es una oportunidad 
            para crear algo excepcional.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <Icon className="text-emerald-400" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;