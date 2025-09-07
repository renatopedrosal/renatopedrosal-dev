import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

export const Hero: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
            <motion.div style={{ y }} className="w-full flex flex-col items-center justify-center">
                <motion.div
                    className="relative w-40 h-40 md:w-48 md:h-48 mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
                >
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-accent dark:border-dark-accent transition-colors duration-300"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.img
                        src="/images/renato.jpeg"
                        alt="Renato Pedrosa Leite"
                        className="w-full h-full object-cover rounded-full p-1"
                        animate={{
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                </motion.div>
                <motion.h1
                    className="text-4xl md:text-6xl font-bold text-highlight dark:text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Renato Pedrosa Leite
                </motion.h1>
                <motion.p
                    className="text-lg md:text-2xl text-secondary-text dark:text-dark-highlight mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Desenvolvedor Full-Stack | Java, Spring Boot, Angular & React
                </motion.p>
                <motion.div
                    className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <motion.a
                        href="/pdf/cv-renato-pedrosa.pdf"
                        download
                        className="bg-accent text-white dark:bg-dark-accent dark:text-dark-background font-bold py-3 px-8 rounded-full transition-all duration-300 hover:opacity-90 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                            scale: [1, 1.03, 1],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        Download CV
                    </motion.a>
                    <motion.a
                        href="#projects"
                        className="border-2 border-accent text-accent dark:border-dark-accent dark:text-dark-accent font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-accent hover:text-white dark:hover:bg-dark-accent dark:hover:text-dark-background shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                            scale: [1, 1.03, 1],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        Ver Projetos
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};
