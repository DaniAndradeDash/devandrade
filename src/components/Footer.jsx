import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 mt-auto relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>&copy; {currentYear} Daniel Andrade. Todos los derechos reservados.</p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-8">
            <Link 
              to="/copyright" 
              className="text-gray-400 hover:text-emerald-400 text-sm font-medium transition-colors duration-200"
            >
              Derechos Reservados
            </Link>
            <Link 
              to="/privacy" 
              className="text-gray-400 hover:text-emerald-400 text-sm font-medium transition-colors duration-200"
            >
              Avisos de Privacidad
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;