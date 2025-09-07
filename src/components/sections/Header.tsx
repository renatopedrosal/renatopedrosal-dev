import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';

const navItems = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Experiência', href: '#experience' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
];

export const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 dark:bg-dark-background/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <a 
                  href="#hero" 
                  onClick={(e) => handleNavClick(e, '#hero')}
                  className="text-xl font-bold text-highlight dark:text-dark-highlight hover:text-accent dark:hover:text-dark-accent transition-colors flex items-center"
                >
                  <code>&lt;/renatopedrosal&gt;</code>
                </a>
                <div className="flex items-center space-x-8">
                    <ul className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a 
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className="text-highlight dark:text-dark-highlight hover:text-accent dark:hover:text-dark-accent transition-colors font-medium"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ThemeToggle />
                </div>
                {/* Mobile menu could be added here */}
            </nav>
        </motion.header>
    );
};