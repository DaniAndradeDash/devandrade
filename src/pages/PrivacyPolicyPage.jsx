import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

const PrivacyPolicyPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Avisos de Privacidad</h1>
          
          <div className="space-y-12 text-gray-300 leading-relaxed">
            <section>
              <p className="text-lg mb-6">
                Su privacidad es importante para nosotros. Es política de Daniel Andrade respetar su privacidad con respecto a cualquier información que podamos recopilar de usted a través de nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Recopilación de Datos</h2>
              <p className="mb-4">
                Solo solicitamos información personal cuando realmente la necesitamos para prestarle un servicio. La recopilamos por medios justos y legales, con su conocimiento y consentimiento. También le informamos por qué la recopilamos y cómo se utilizará.
              </p>
              <p>
                Los tipos de información que podemos recopilar incluyen:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Información de contacto (nombre, correo electrónico) proporcionada voluntariamente a través de formularios.</li>
                <li>Datos técnicos de navegación y uso del sitio web.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Uso de la Información</h2>
              <p className="mb-4">
                Utilizamos la información recopilada para diversos fines, entre ellos:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Proveer y mantener nuestro servicio.</li>
                <li>Notificarle sobre cambios en nuestro servicio.</li>
                <li>Permitirle participar en funciones interactivas de nuestro servicio cuando decida hacerlo.</li>
                <li>Proporcionar atención y soporte al cliente.</li>
                <li>Recopilar análisis o información valiosa para que podamos mejorar nuestro servicio.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Cookies y Tecnologías de Seguimiento</h2>
              <p className="mb-4">
                Utilizamos cookies y tecnologías de seguimiento similares para rastrear la actividad en nuestro servicio y mantener cierta información. Las cookies son archivos con una pequeña cantidad de datos que pueden incluir un identificador único anónimo.
              </p>
              <p>
                Puede configurar su navegador para que rechace todas las cookies o para que le indique cuándo se envía una cookie. Sin embargo, si no acepta las cookies, es posible que no pueda utilizar algunas partes de nuestro servicio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Derechos del Usuario</h2>
              <p className="mb-4">
                Usted tiene derecho a acceder, actualizar o eliminar la información que tenemos sobre usted. Si desea ejercer cualquiera de estos derechos, póngase en contacto con nosotros.
              </p>
              <p>
                No compartimos ninguna información de identificación personal públicamente o con terceros, excepto cuando lo exige la ley.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Contacto</h2>
              <p>
                Si tiene alguna pregunta sobre cómo manejamos los datos de los usuarios y la información personal, no dude en ponerse en contacto con nosotros a través de nuestro formulario de contacto o por correo electrónico.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;