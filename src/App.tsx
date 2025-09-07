import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Education } from './components/sections/Education';
import { Experience } from './components/sections/Experience';
import { Footer } from './components/sections/Footer';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { ProjectModal } from './components/ui/ProjectModal';
import { Terminal } from './components/ui/Terminal';

import type { MotionValue } from 'framer-motion';
import type { Project } from '../types';

const ParallaxShape: React.FC<{ yTransform: MotionValue<string>; className?: string }> = ({ yTransform, className }) => (
    <motion.div
        className={`absolute w-64 h-64 bg-accent/5 dark:bg-dark-accent/5 rounded-full filter blur-3xl -z-10 transition-colors duration-300 ${className}`}
        style={{ y: yTransform }}
    />
);

const App: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isTerminalExpanded, setIsTerminalExpanded] = useState(false);
    const { scrollYProgress } = useScroll();
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
    
    // Parallax transforms for decorative shapes
    const y1 = useTransform(scrollYProgress, [0, 1], ['-20%', '80%']);
    const y2 = useTransform(scrollYProgress, [0, 1], ['50%', '-30%']);
    const y3 = useTransform(scrollYProgress, [0, 1], ['100%', '20%']);


    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                setIsTerminalExpanded(prev => !prev);
            }
             if (e.key === 'Escape' && isTerminalExpanded) {
                setIsTerminalExpanded(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isTerminalExpanded]);

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="relative bg-background dark:bg-dark-background transition-colors duration-300">
            <motion.div
                className="fixed inset-0 z-0 opacity-5"
                style={{
                    backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')",
                    y: bgY,
                }}
            />
             {/* Parallax decorative shapes */}
            <ParallaxShape yTransform={y1} className="top-0 left-[-5rem]" />
            <ParallaxShape yTransform={y2} className="top-1/3 right-[-10rem]" />
            <ParallaxShape yTransform={y3} className="top-2/3 left-[5rem]" />

            <div className="relative z-10 flex flex-col min-h-screen">
                <motion.div
                    className="fixed top-0 left-0 right-0 h-1 bg-accent dark:bg-dark-accent origin-[0%] z-[100] transition-colors duration-300"
                    style={{ scaleX: scrollYProgress }}
                />
                <Header />
                <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Hero />
                        <About />
                        <Skills />
                        <Experience />
                        <Projects onProjectClick={handleProjectClick} />
                        <Education />
                        <Contact />
                    </motion.div>
                </main>
                <Footer />
                <ProjectModal
                    project={selectedProject}
                    isOpen={!!selectedProject}
                    onClose={handleCloseModal}
                />
                 <Terminal isExpanded={isTerminalExpanded} onToggle={() => setIsTerminalExpanded(p => !p)} />
            </div>
        </div>
    );
};

export default App;