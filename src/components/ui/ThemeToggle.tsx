import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary dark:bg-dark-secondary text-highlight dark:text-dark-highlight hover:text-accent dark:hover:text-dark-accent transition-colors"
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
        >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </motion.button>
    );
};
