import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects = [
      {
        id: 1,
        title: 'Topp & Screed',
        description: 'Creaciòn de una pagina web para dar a conocer las maquinarias de la empresa, con un diseño moderno y funcional, utilizando React para una experiencia de usuario fluida.',
        image: '/public/EquiposyTopp.png',
        technologies: ['React', 'CSS', 'PHP'],
        link: 'https://toppandscreedmx.netlify.app'
      },
      {
        id: 2,
        title: 'Answerst - Infonagreen',
        description: 'Landing page para la empresa Answer st con Infonagreen, con un diseño atractivo y afincado a su identidad corporativa, utilizando tecnologías modernas para garantizar un rendimiento óptimo.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
        technologies: ['React', 'Node.js', 'Next.js', 'PHPMailer', 'TailwindCss'],
        link: 'https://answerst.netlify.app'
      },
      {
        id: 3,
        title: 'Plataforma de Reservas',
        description: 'Sistema de reservas online con calendario interactivo, notificaciones automáticas y panel de administración.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
        technologies: ['Next.js', 'Tailwind', 'Node.js', 'PostgreSQL'],
        link: 'https://ejemplo.com/reservas'
      },
      {
        id: 4,
        title: 'Portal Corporativo',
        description: 'Sitio web corporativo moderno con blog integrado, formularios de contacto y optimización SEO.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
        technologies: ['React', 'Tailwind', 'REST API'],
        link: 'https://ejemplo.com/corporativo'
      },
      {
        id: 5,
        title: 'Dashboard Analítico',
        description: 'Panel de control con visualización de datos en tiempo real, gráficos interactivos y exportación de reportes.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
        link: 'https://ejemplo.com/dashboard'
      },
      {
        id: 6,
        title: 'App de Gestión de Tareas',
        description: 'Aplicación colaborativa para gestión de proyectos con tableros Kanban y asignación de tareas.',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
        technologies: ['Next.js', 'Tailwind', 'PostgreSQL', 'TypeScript'],
        link: 'https://ejemplo.com/tareas'
      }
  ];

  const allTechnologies = ['all', ...new Set(projects.flatMap(p => p.technologies))];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.technologies.includes(selectedFilter));

  return (
    <section id="portfolio" className="py-20 bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Proyectos</SectionTitle>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedFilter(tech)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedFilter === tech
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {tech === 'all' ? 'Todos' : tech}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;