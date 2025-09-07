import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaBriefcase, FaColumns, FaStream } from 'react-icons/fa';
import { experience } from '../../../constants';
import type { ExperienceItem } from '../../../types';
import { SectionWrapper } from '../ui/SectionWrapper';

// Componente para evitar repetição de código
const TimelineItem: React.FC<ExperienceItem> = ({ period, company, description }) => (
    <>
        <p className="text-accent dark:text-dark-accent font-semibold">{period}</p>
        <h3 className="text-xl font-bold text-highlight dark:text-white mt-1">{company}</h3>
        <p className="text-secondary-text dark:text-dark-highlight mt-2">{description}</p>
    </>
);

export const Experience: React.FC = () => {
    // Começa com o layout de coluna única (não alternado)
    const [isAlternating, setIsAlternating] = useState(false);

    const variantsLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    const variantsRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    return (
        <SectionWrapper id="experience">
            <div className="flex justify-center items-center text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-highlight dark:text-white">
                    Experiência Profissional
                </h2>
                <motion.button
                    onClick={() => setIsAlternating(!isAlternating)}
                    className="ml-4 p-3 bg-secondary dark:bg-dark-secondary rounded-full text-secondary-text dark:text-dark-highlight hover:text-accent dark:hover:text-dark-accent transition-colors"
                    aria-label="Alternar layout da linha do tempo"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {isAlternating ? <FaStream size={20} /> : <FaColumns size={20} />}
                </motion.button>
            </div>
            
            <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-dark-secondary rounded-full"></div>
                
                {experience.map((item, index) => {
                    const isRightSide = isAlternating && index % 2 !== 0;

                    return (
                        <motion.div
                            key={index}
                            className="mb-12 flex justify-between items-center w-full"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={isRightSide ? variantsRight : variantsLeft}
                        >
                            {/* Container Esquerdo (com conteúdo ou vazio) */}
                            <div className="w-1/2 pr-8 text-right">
                                {!isRightSide && <TimelineItem {...item} />}
                            </div>
                            
                            {/* Ícone Central */}
                            <div className="absolute left-1/2 -translate-x-1/2 bg-accent dark:bg-dark-accent w-8 h-8 rounded-full flex items-center justify-center z-10 border-4 border-background dark:border-dark-background">
                                 <FaBriefcase className="text-white dark:text-dark-background"/>
                            </div>
                             
                            {/* Container Direito (com conteúdo ou vazio) */}
                            <div className="w-1/2 pl-8 text-left">
                                {isRightSide && <TimelineItem {...item} />}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
};
