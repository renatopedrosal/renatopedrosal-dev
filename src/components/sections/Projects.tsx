
import { motion } from 'framer-motion';
import React from 'react';
import { projects } from '../../../constants';
import type { Project } from '../../../types';
import { ProjectCard } from '../ui/ProjectCard';
import { SectionWrapper } from '../ui/SectionWrapper';

interface ProjectsProps {
    onProjectClick: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <SectionWrapper id="projects">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                Projetos
            </h2>
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {projects.map((project) => (
                    <motion.div key={project.id} variants={itemVariants}>
                        <ProjectCard
                            project={project}
                            onClick={() => onProjectClick(project)}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
};
