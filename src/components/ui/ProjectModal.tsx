import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import React from 'react';
import type { Project } from '../../../types';

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 50 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-secondary/95 dark:bg-dark-secondary/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 w-full max-w-3xl max-h-[90vh] rounded-lg shadow-2xl overflow-y-auto relative"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-secondary-text dark:text-dark-highlight hover:text-highlight dark:hover:text-white transition-colors z-10"
                        >
                            <X size={24} />
                        </button>
                        <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                        <div className="p-8">
                             <div className="flex justify-between items-start gap-4 mb-4">
                                <h2 className="text-3xl font-bold text-highlight dark:text-white">{project.title}</h2>
                                {project.link && (
                                    <motion.a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-shrink-0 bg-accent text-white dark:bg-dark-accent dark:text-dark-background font-bold py-2 px-4 rounded-full transition-all duration-300 hover:opacity-90 shadow-lg inline-flex items-center gap-2 text-sm"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Acessar
                                        <ExternalLink size={16} />
                                    </motion.a>
                                )}
                            </div>
                            <div className="mb-6">
                                <h4 className="font-semibold text-accent dark:text-dark-accent mb-2">Tecnologias Utilizadas</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map(tech => (
                                        <span key={tech} className="bg-accent/20 text-accent dark:bg-dark-accent/20 dark:text-dark-accent text-sm font-semibold px-3 py-1 rounded-full">{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-4 text-secondary-text dark:text-dark-highlight text-lg">
                                <p>{project.longDescription}</p>
                                <div>
                                    <h4 className="font-semibold text-accent dark:text-dark-accent mb-2">Resultados</h4>
                                    <p>{project.results}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
