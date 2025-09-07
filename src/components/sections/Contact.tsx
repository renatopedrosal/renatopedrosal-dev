import React, { useState } from 'react';
// FIX: Import `Variants` type from framer-motion to explicitly type the animation variants.
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SectionWrapper } from '../ui/SectionWrapper';

const socialLinks = [
    { icon: FaLinkedin, href: 'https://linkedin.com' },
    { icon: FaGithub, href: 'https://github.com' },
    { icon: FaEnvelope, href: 'mailto:email@example.com' },
];

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = { name: '', email: '', message: '' };
        if (!formData.name.trim()) {
            newErrors.name = 'O nome é obrigatório.';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'O email é obrigatório.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Formato de email inválido.';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'A mensagem é obrigatória.';
        }
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.values(validationErrors).every(error => error === '')) {
            setIsSubmitting(true);
            setSubmitStatus(null);
            // Simulate API call
            setTimeout(() => {
                setIsSubmitting(false);
                
                // For demonstration, we'll assume the submission is successful.
                const isSuccess = true; 

                if (isSuccess) {
                    setSubmitStatus('success');
                    // After 5 seconds, hide the message and clear the form
                    setTimeout(() => {
                        setSubmitStatus(null);
                        setFormData({ name: '', email: '', message: '' });
                    }, 5000);
                } else {
                    setSubmitStatus('error');
                    // After 5 seconds, hide the error message. Don't clear the form.
                    setTimeout(() => {
                        setSubmitStatus(null);
                    }, 5000);
                }
            }, 1500);
        }
    };
    
    // FIX: Add `Variants` type to ensure type correctness.
    const formContainerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    // FIX: Add `Variants` type to fix the type error on the `ease` property.
    const formItemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };
    
    const errorVariants: Variants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 }
    }
    
    const notificationVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 }
    }

    return (
        <SectionWrapper id="contact">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-highlight dark:text-white mb-12">
                Contato
            </h2>
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-12">
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-highlight dark:text-white mb-4">Vamos Conversar!</h3>
                    <p className="text-lg text-secondary-text dark:text-dark-highlight mb-6">
                        Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato.
                    </p>
                    <div className="flex space-x-6">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary-text dark:text-dark-highlight hover:text-accent dark:hover:text-dark-accent transition-colors"
                                whileHover={{
                                    scale: [1, 1.15, 1],
                                    transition: {
                                        duration: 1,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    },
                                }}
                            >
                                <link.icon size={32} />
                            </motion.a>
                        ))}
                    </div>
                </div>
                <motion.form
                    noValidate
                    onSubmit={handleSubmit}
                    className="flex-1 space-y-4"
                    variants={formContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div variants={formItemVariants} className="relative">
                        <input
                            type="text"
                            name="name"
                            placeholder="Seu Nome"
                            value={formData.name}
                            onChange={handleChange}
                            aria-invalid={!!errors.name}
                            aria-describedby="name-error"
                            className={`w-full p-3 bg-gray-100 dark:bg-dark-secondary rounded-md text-highlight dark:text-white placeholder-secondary-text dark:placeholder-dark-highlight/50 focus:outline-none focus:ring-2 transition-all duration-300 ${errors.name ? 'ring-red-500' : 'focus:ring-accent dark:focus:ring-dark-accent'}`}
                        />
                         <AnimatePresence>
                            {errors.name && (
                                <motion.p id="name-error" variants={errorVariants} initial="hidden" animate="visible" exit="exit" className="text-red-400 text-sm mt-1 pl-1" aria-live="polite">
                                    {errors.name}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>
                    <motion.div variants={formItemVariants} className="relative">
                        <input
                            type="email"
                            name="email"
                            placeholder="Seu Email"
                            value={formData.email}
                            onChange={handleChange}
                            aria-invalid={!!errors.email}
                            aria-describedby="email-error"
                            className={`w-full p-3 bg-gray-100 dark:bg-dark-secondary rounded-md text-highlight dark:text-white placeholder-secondary-text dark:placeholder-dark-highlight/50 focus:outline-none focus:ring-2 transition-all duration-300 ${errors.email ? 'ring-red-500' : 'focus:ring-accent dark:focus:ring-dark-accent'}`}
                        />
                         <AnimatePresence>
                            {errors.email && (
                                <motion.p id="email-error" variants={errorVariants} initial="hidden" animate="visible" exit="exit" className="text-red-400 text-sm mt-1 pl-1" aria-live="polite">
                                    {errors.email}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>
                    <motion.div variants={formItemVariants} className="relative">
                        <textarea
                            name="message"
                            placeholder="Sua Mensagem"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            aria-invalid={!!errors.message}
                            aria-describedby="message-error"
                            className={`w-full p-3 bg-gray-100 dark:bg-dark-secondary rounded-md text-highlight dark:text-white placeholder-secondary-text dark:placeholder-dark-highlight/50 focus:outline-none focus:ring-2 transition-all duration-300 ${errors.message ? 'ring-red-500' : 'focus:ring-accent dark:focus:ring-dark-accent'}`}
                        ></textarea>
                         <AnimatePresence>
                            {errors.message && (
                                <motion.p id="message-error" variants={errorVariants} initial="hidden" animate="visible" exit="exit" className="text-red-400 text-sm mt-1 pl-1" aria-live="polite">
                                    {errors.message}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>
                    <motion.div variants={formItemVariants}>
                        <motion.button
                            type="submit"
                            disabled={isSubmitting || submitStatus !== null}
                            className="w-full bg-accent text-white dark:bg-dark-accent dark:text-dark-background font-bold py-3 px-8 rounded-full transition-all duration-300 hover:opacity-90 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                            whileHover={!(isSubmitting || submitStatus !== null) ? { scale: 1.05 } : {}}
                            whileTap={!(isSubmitting || submitStatus !== null) ? { scale: 0.95 } : {}}
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                        </motion.button>
                    </motion.div>
                     <div className="h-6 mt-1 text-center">
                        <AnimatePresence mode="wait">
                            {submitStatus === 'success' && (
                               <motion.p 
                                   key="success"
                                   variants={notificationVariants}
                                   initial="hidden" animate="visible" exit="exit"
                                   className="font-semibold text-green-500"
                                >
                                   Mensagem enviada com sucesso!
                               </motion.p>
                            )}
                            {submitStatus === 'error' && (
                               <motion.p 
                                    key="error"
                                    variants={notificationVariants}
                                    initial="hidden" animate="visible" exit="exit"
                                    className="font-semibold text-red-500"
                                >
                                   Ocorreu um erro. Tente novamente.
                               </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.form>
            </div>
        </SectionWrapper>
    );
};
