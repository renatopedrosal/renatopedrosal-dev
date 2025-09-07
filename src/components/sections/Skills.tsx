import React, { useState } from 'react';
// FIX: Import Variants from framer-motion to explicitly type animation variants.
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { skills } from '../../../constants';
import type { Skill } from '../../../types';
import { SectionWrapper } from '../ui/SectionWrapper';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
    const [isHovered, setIsHovered] = useState(false);

    const cardVariants: Variants = {
        initial: { opacity: 0, scale: 0.9 },
        inView: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
        hover: { 
            y: -8, 
            transition: { type: 'spring', stiffness: 300 }
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="inView"
            whileHover="hover"
            viewport={{ once: true, amount: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative bg-background dark:bg-dark-background rounded-2xl p-4 flex flex-col items-center justify-center aspect-square cursor-pointer shadow-neumorphic-light dark:shadow-neumorphic-dark hover:shadow-neumorphic-inset-light dark:hover:shadow-neumorphic-inset-dark transition-shadow duration-300"
            style={{ willChange: 'transform, box-shadow' }}
        >
            <skill.icon size={48} style={{ color: skill.color }} />
            <span className="mt-3 font-semibold text-highlight dark:text-white text-center">{skill.name}</span>
            
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-2 left-2 right-2 p-2"
                    >
                        <div className="w-full bg-gray-200 dark:bg-dark-secondary rounded-full h-2.5">
                            <motion.div
                                className="h-2.5 rounded-full"
                                style={{ backgroundColor: skill.color }}
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            <AnimatePresence>
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full mb-3 w-max max-w-xs p-2 bg-secondary dark:bg-dark-secondary text-highlight dark:text-white text-xs rounded-lg shadow-lg z-10"
                >
                    {skill.usage}
                </motion.div>
            )}
            </AnimatePresence>
        </motion.div>
    );
};

export const Skills: React.FC = () => {
    return (
        <SectionWrapper id="skills">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-highlight dark:text-white mb-16">
                Habilidades Técnicas
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
                {skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                ))}
            </div>
        </SectionWrapper>
    );
};
