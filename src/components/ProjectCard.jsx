import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import TechTag from '@/components/TechTag';
import { useToast } from '@/components/ui/use-toast';

const ProjectCard = ({ project }) => {
  const { toast } = useToast();

  const handleClick = () => {
    if (project.link) {
      window.open(project.link, '_blank');
    } else {
      toast({
        title: '🚧 Función en desarrollo',
        description: 'Este proyecto aún no tiene un enlace configurado. 🚀'
      });
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group bg-slate-800 rounded-xl overflow-hidden border border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 cursor-pointer"
      onClick={handleClick}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Overlay Icon */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-emerald-500/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ExternalLink className="text-white" size={20} />
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechTag key={tech} tech={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;