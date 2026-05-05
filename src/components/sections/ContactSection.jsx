import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MessageSquare, Send, Phone } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '978589a8-5591-4a29-b224-7861bb53ed2a';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    if (!formData.asunto.trim()) {
      newErrors.asunto = 'El asunto es requerido';
    }
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: 'Error en el formulario',
        description: 'Por favor, completa todos los campos correctamente.',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          nombre: formData.nombre,
          email: formData.email,
          asunto: formData.asunto,
          mensaje: formData.mensaje
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: '¡Mensaje enviado!',
          description: 'Gracias por contactarme. Te responderé lo antes posible.'
        });
        setFormData({
          nombre: '',
          email: '',
          asunto: '',
          mensaje: ''
        });
        setErrors({});
      } else {
        throw new Error(data.message || 'Error al enviar el mensaje');
      }
    } catch (error) {
      toast({
        title: 'Error al enviar',
        description: 'Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/528123374469', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Contacto</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={isInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.6 }} 
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Hablemos de tu proyecto</h3>
              <p className="text-gray-300 leading-relaxed">
                ¿Tienes una idea en mente? Estoy aquí para ayudarte a convertirla en realidad. 
                Contáctame y trabajemos juntos en tu próximo proyecto web.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {/* Email */}
              <motion.div 
                whileHover={{ x: 5 }} 
                className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-emerald-500/20"
              >
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="text-emerald-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium break-all">daniel.freelance@devandrade.com</p>
                </div>
              </motion.div>

              {/* Phone Direct Call */}
              <motion.a 
                href="tel:+528123374469"
                whileHover={{ x: 5 }} 
                className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="text-emerald-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Teléfono</p>
                  <p className="text-white font-medium">+52 8123374469</p>
                </div>
              </motion.a>

              {/* WhatsApp Button */}
              <motion.button 
                whileHover={{ x: 5 }} 
                onClick={openWhatsApp} 
                className="w-full flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <MessageSquare className="text-emerald-400" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="text-white font-medium">Enviar mensaje</p>
                </div>
              </motion.button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={isInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre *
                </label>
                <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} className={`w-full px-4 py-3 bg-slate-800 border ${errors.nombre ? 'border-red-500' : 'border-emerald-500/20'} rounded-lg focus:outline-none focus:border-emerald-500 transition-colors text-white placeholder-gray-500`} placeholder="Tu nombre completo" />
                {errors.nombre && <p className="mt-1 text-sm text-red-500">{errors.nombre}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 bg-slate-800 border ${errors.email ? 'border-red-500' : 'border-emerald-500/20'} rounded-lg focus:outline-none focus:border-emerald-500 transition-colors text-white placeholder-gray-500`} placeholder="tu@email.com" />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-gray-300 mb-2">
                  Asunto *
                </label>
                <input type="text" id="asunto" name="asunto" value={formData.asunto} onChange={handleChange} className={`w-full px-4 py-3 bg-slate-800 border ${errors.asunto ? 'border-red-500' : 'border-emerald-500/20'} rounded-lg focus:outline-none focus:border-emerald-500 transition-colors text-white placeholder-gray-500`} placeholder="Motivo de tu mensaje" />
                {errors.asunto && <p className="mt-1 text-sm text-red-500">{errors.asunto}</p>}
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje *
                </label>
                <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} rows={5} className={`w-full px-4 py-3 bg-slate-800 border ${errors.mensaje ? 'border-red-500' : 'border-emerald-500/20'} rounded-lg focus:outline-none focus:border-emerald-500 transition-colors text-white placeholder-gray-500 resize-none`} placeholder="Cuéntame sobre tu proyecto..." />
                {errors.mensaje && <p className="mt-1 text-sm text-red-500">{errors.mensaje}</p>}
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensaje
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;