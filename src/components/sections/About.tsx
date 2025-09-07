import { motion } from 'framer-motion';
import React from 'react';
import { badges } from '../../../constants';
import { SectionWrapper } from '../ui/SectionWrapper';

const BadgeCard: React.FC<{ badge: typeof badges[0] }> = ({ badge }) => (
    <div className="group relative flex flex-col items-center text-center">
        <motion.div
            className="w-24 h-24 rounded-full bg-secondary dark:bg-dark-secondary flex items-center justify-center transition-all duration-300 group-hover:bg-accent dark:group-hover:bg-dark-accent shadow-md"
            whileHover={{ scale: 1.1, rotate: 5 }}
        >
            <badge.icon className="text-5xl text-highlight dark:text-dark-highlight group-hover:text-white dark:group-hover:text-dark-background transition-colors duration-300" />
        </motion.div>
        <h4 className="mt-4 font-bold text-highlight dark:text-white">{badge.name}</h4>
        <div className="absolute top-full mt-2 w-48 p-3 bg-secondary dark:bg-dark-secondary rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
            <p className="text-sm text-secondary-text dark:text-dark-highlight">{badge.description}</p>
        </div>
    </div>
);


export const About: React.FC = () => {
    return (
        <SectionWrapper id="about">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-highlight dark:text-white mb-12">
                Sobre Mim
            </h2>
            <p className="max-w-3xl mx-auto text-center text-lg md:text-xl leading-relaxed mb-20 text-secondary-text dark:text-dark-highlight">
                Desenvolvedor Full-Stack com experiência em sistemas internos de grande escala, APIs RESTful seguras, modernização de sistemas legados e interfaces responsivas. Atuo em todo o ciclo de vida do software, da análise até a entrega.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-center text-highlight dark:text-white mb-12">
                Conquistas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                {badges.map((badge, index) => (
                    <BadgeCard key={index} badge={badge} />
                ))}
            </div>
        </SectionWrapper>
    );
};
