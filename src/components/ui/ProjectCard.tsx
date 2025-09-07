import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import React, { useRef } from 'react';
import type { Project } from '../../../types';

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
            }}
            className="bg-secondary/60 dark:bg-dark-secondary/40 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-lg overflow-hidden shadow-lg cursor-pointer h-full flex flex-col"
        >
            <div style={{ transform: 'translateZ(20px)' }} className="p-6 flex-grow flex flex-col">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4"/>
                <motion.h3 
                    className="text-xl font-bold text-highlight dark:text-white mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {project.title}
                </motion.h3>
                <p className="text-secondary-text dark:text-dark-highlight flex-grow">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map(tech => (
                        <span key={tech} className="bg-accent/20 text-accent dark:bg-dark-accent/20 dark:text-dark-accent text-xs font-semibold px-2 py-1 rounded-full">{tech}</span>
                    ))}
                </div>
                 {project.link && (
                    <div className="mt-4">
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 text-accent dark:text-dark-accent font-semibold group"
                            whileHover={{ gap: '10px' }}
                            transition={{ type: 'spring', stiffness: 400 }}
                        >
                            Acessar Projeto
                            <ExternalLink size={16} />
                        </motion.a>
                    </div>
                )}
            </div>
        </motion.div>
    );
};
