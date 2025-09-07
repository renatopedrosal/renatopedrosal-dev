import React from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { FaGraduationCap } from 'react-icons/fa';

export const Education: React.FC = () => {
    return (
        <SectionWrapper id="education">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-highlight dark:text-white mb-12">
                Formação Acadêmica
            </h2>
            <div className="max-w-xl mx-auto bg-secondary dark:bg-dark-secondary p-8 rounded-lg shadow-lg flex items-center space-x-6">
                <FaGraduationCap className="text-5xl text-accent dark:text-dark-accent flex-shrink-0" />
                <div>
                    <h3 className="text-2xl font-bold text-highlight dark:text-white">Gestão de Tecnologia da Informação</h3>
                    <p className="text-secondary-text dark:text-dark-highlight text-lg mt-1">FATEC Tatuí (2020 - 2024)</p>
                </div>
            </div>
        </SectionWrapper>
    );
};
