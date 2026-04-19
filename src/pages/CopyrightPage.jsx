import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

const CopyrightPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <div className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <Link 
          to="/" 
          className="inline-flex items-center text-emerald-500 hover:text-emerald-400 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al Inicio
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Derechos Reservados</h1>
          
          <div className="space-y-12 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Titularidad del Contenido</h2>
              <p className="mb-4">
                Todo el contenido presentado en este sitio web, incluyendo pero no limitado a textos, gráficos, logotipos, iconos de botones, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad exclusiva de <strong>Daniel Andrade</strong> o de sus proveedores de contenido, y está protegido por las leyes internacionales de derechos de autor.
              </p>
              <p>
                La compilación de todo el contenido en este sitio es propiedad exclusiva de Daniel Andrade, con derechos de autor de esta colección por Daniel Andrade, &copy; {currentYear}.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Derechos de Propiedad Intelectual</h2>
              <p className="mb-4">
                Las marcas comerciales, marcas de servicio y logotipos (las "Marcas") utilizados y mostrados en este sitio son Marcas registradas y no registradas de Daniel Andrade y otros. Nada en este sitio debe interpretarse como una concesión, por implicación, impedimento o de otro modo, de cualquier licencia o derecho para usar cualquier Marca mostrada en el sitio sin el permiso por escrito del propietario de la Marca.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Restricciones de Uso</h2>
              <p className="mb-4">
                Se le concede una licencia limitada para acceder y hacer uso personal de este sitio y no para descargar (excepto el almacenamiento en caché de páginas) o modificarlo, o cualquier parte de él, excepto con el consentimiento expreso por escrito de Daniel Andrade.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Este sitio o cualquier parte de este sitio no puede ser reproducido, duplicado, copiado, vendido, revendido, visitado o explotado de otra manera para ningún propósito comercial sin el consentimiento expreso por escrito.</li>
                <li>No puede utilizar técnicas de enmarcado para encerrar ninguna marca comercial, logotipo u otra información patentada (incluidas imágenes, texto, diseño de página o formulario) sin el consentimiento expreso por escrito.</li>
                <li>Cualquier uso no autorizado termina el permiso o licencia concedida por Daniel Andrade.</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default CopyrightPage;