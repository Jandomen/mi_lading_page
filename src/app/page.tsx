"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import Image from 'next/image';

const schema = z.object({
  email: z.string().email('Email inválido'),
});

type FormData = z.infer<typeof schema>;

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Email suscrito:', data.email);
    alert('¡Gracias por suscribirte! Te enviaremos tips de meditación.');
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-blue-50 to-indigo-100">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative py-32 px-4 text-center"
      >
        <Image
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="ZenFlow background"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        <div className="relative z-10">
          <motion.h1
            variants={fadeIn}
            className="text-6xl font-black text-white mb-6 tracking-tight"
          >
            Medita con <span className="text-neon-pink">ZenFlow</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-2xl font-semibold text-gray-100 mb-10 max-w-3xl mx-auto"
          >
            Encuentra paz interior en solo 5 minutos al día con sesiones guiadas y personalizadas.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255,255,255,0.5)' }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.02, 1], transition: { repeat: Infinity, duration: 1.5 } }}
            className="bg-gradient-to-r from-neon-purple to-neon-blue text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:from-neon-blue hover:to-neon-purple transition"
          >
            Empieza gratis
          </motion.button>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeIn}
            className="text-4xl font-black text-center text-gray-900 mb-16"
          >
            Por qué elegir ZenFlow
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: '🧘',
                title: 'Sesiones guiadas',
                desc: 'Más de 100 meditaciones para todos los niveles.',
                bg: 'bg-neon-purple/20',
              },
              {
                emoji: '📊',
                title: 'Progreso real',
                desc: 'Gráficos y streaks para mantenerte motivado.',
                bg: 'bg-neon-blue/20',
              },
              {
                emoji: '🌙',
                title: 'Modo noche',
                desc: 'Interfaz oscura para relajarte antes de dormir.',
                bg: 'bg-neon-cyan/20',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ rotate: 2, scale: 1.03 }}
                className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-neon-purple/50 transition"
              >
                <div className={`w-16 h-16 ${feature.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-3xl">{feature.emoji}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

<motion.section
  initial="hidden"
  animate="visible"
  variants={stagger}
  className="py-20 px-4 bg-gradient-to-r from-purple-50 to-blue-50"
>
  <div className="max-w-5xl mx-auto">
    <motion.h2
      variants={fadeIn}
      className="text-4xl font-black text-center text-purple-800 mb-16"
    >
      Lo que dicen nuestros usuarios
    </motion.h2>
    <div className="grid md:grid-cols-2 gap-8">
      {[
        {
          quote: 'Cambió mi rutina matutina. ¡Más calmado que nunca!',
          author: 'Ana López',
        },
        {
          quote: 'Fácil de usar y efectiva. Recomendado 100%.',
          author: 'Carlos Ruiz',
        },
      ].map((testimonial, index) => (
        <motion.blockquote
          key={index}
          variants={fadeIn}
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-purple-400 transition"
        >
          <p className="text-purple-700 text-lg font-medium mb-4">
            "{testimonial.quote}"
          </p>
          <cite className="text-purple-900 font-bold text-base">
            - {testimonial.author}
          </cite>
        </motion.blockquote>
      ))}
    </div>
  </div>
</motion.section>


<motion.section
  initial="hidden"
  animate="visible"
  variants={fadeIn}
  className="py-20 px-4 text-center bg-gradient-to-r from-purple-700 via-purple-500 to-blue-400 text-white relative overflow-hidden"
>
  <motion.h2 variants={fadeIn} className="text-4xl font-black mb-6">
    Únete a miles de meditadores
  </motion.h2>
  <motion.p
    variants={fadeIn}
    className="text-xl font-semibold mb-10 max-w-md mx-auto"
  >
    Suscríbete para tips semanales y un descuento del 20%.
  </motion.p>
  <motion.form
    variants={fadeIn}
    onSubmit={handleSubmit(onSubmit)}
    className="max-w-md mx-auto flex gap-3"
  >
    <input
      {...register('email')}
      type="email"
      placeholder="Tu email"
      className="flex-1 px-5 py-4 rounded-full text-gray-900 font-medium focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg"
    />
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{ scale: [1, 1.02, 1], transition: { repeat: Infinity, duration: 1.5 } }}
      type="submit"
      className="bg-pink-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-pink-400 transition"
    >
      Suscribirme
    </motion.button>
  </motion.form>
  {errors.email && (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-red-200 font-medium mt-3"
    >
      {errors.email.message}
    </motion.p>
  )}
</motion.section>


      <motion.footer
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="py-16 px-4 bg-gradient-to-r from-gray-900 via-indigo-900 to-neon-blue/50 text-white relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-neon-cyan/10"
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          <motion.div variants={fadeIn} className="flex flex-col items-center md:items-start">
            <h3 className="text-4xl font-black text-neon-pink mb-4 tracking-tight">ZenFlow</h3>
            <p className="text-gray-200 text-sm font-semibold text-center md:text-left max-w-xs">
              Tu compañero para encontrar calma y equilibrio con meditaciones personalizadas.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-extrabold text-neon-cyan mb-4">Explora</h4>
            <ul className="space-y-3 text-gray-200 text-sm font-semibold">
              {[
                { href: '/about', label: 'Sobre nosotros' },
                { href: '/contact', label: 'Contacto' },
                { href: '/privacy', label: 'Política de privacidad' },
                { href: '/terms', label: 'Términos de uso' },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5, color: '#ec4899' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a href={link.href} className="hover:text-neon-pink transition">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeIn} className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-extrabold text-neon-cyan mb-4">Conéctate</h4>
            <div className="flex space-x-6">
              {[
                { href: 'https://x.com/zenflowinc/status/1915928777508675803', icon: <FaTwitter size={28} /> },
                { href: 'https://www.instagram.com/info.zenflow/', icon: <FaInstagram size={28} /> },
                { href: 'https://www.facebook.com/watch/?v=1541596923296767', icon: <FaFacebook size={28} /> },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.3, rotate: 15, color: '#ec4899' }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-200 hover:text-neon-pink"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-extrabold text-neon-cyan mb-4">Mantente en contacto</h4>
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3 w-full max-w-xs"
            >
              <input
                {...register('email')}
                type="email"
                placeholder="Tu email"
                className="px-4 py-3 rounded-full text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-neon-pink bg-white/90 text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-neon-pink text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-neon-cyan transition"
              >
                Suscribirme
              </motion.button>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-100 font-medium text-xs"
                >
                  {errors.email.message}
                </motion.p>
              )}
            </motion.form>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn}
          className="mt-12 text-center text-gray-300 text-sm font-semibold border-t border-gray-700/50 pt-6"
        >
          <p>&copy; {new Date().getFullYear()} ZenFlow. Todos los derechos reservados.</p>
        </motion.div>
      </motion.footer>
    </main>
  );
}