import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { Minus } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { projects, skills } from '../../../constants';

interface TerminalProps {
    isExpanded: boolean;
    onToggle: () => void;
}

const Kbd: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <kbd className="px-1.5 py-0.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-md dark:bg-dark-background dark:text-gray-300 dark:border-gray-700">
        {children}
    </kbd>
);

const terminalVariants: Variants = {
    collapsed: {
        width: 140,
        height: 36,
        y: 0,
        transition: { type: 'spring', stiffness: 400, damping: 30 },
    },
    expanded: {
        width: 'clamp(300px, 90vw, 800px)',
        height: 'clamp(200px, 70vh, 600px)',
        y: 0,
        transition: { type: 'spring', stiffness: 400, damping: 30 },
    },
};


const Typewriter: React.FC<{ text: string | string[]; onComplete?: () => void }> = ({ text, onComplete }) => {
    const [displayText, setDisplayText] = useState('');
    const fullText = Array.isArray(text) ? text.join('\n') : text;

    useEffect(() => {
        setDisplayText('');
        let i = 0;
        const intervalId = setInterval(() => {
            if (i < fullText.length) {
                setDisplayText(prev => prev + fullText.charAt(i));
                i++;
            } else {
                clearInterval(intervalId);
                if (onComplete) onComplete();
            }
        }, 20);
        return () => clearInterval(intervalId);
    }, [fullText, onComplete]);

    return <span className="whitespace-pre-wrap">{displayText}</span>;
};

export const Terminal: React.FC<TerminalProps> = ({ isExpanded, onToggle }) => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<{ command: string; output: React.ReactNode }[]>([]);
    const endOfTerminalRef = useRef<null | HTMLDivElement>(null);
    const inputRef = useRef<null | HTMLInputElement>(null);

    const commands = React.useMemo<{ [key: string]: () => React.ReactNode }>(() => ({
        help: () => `Comandos disponíveis:\n- sobre: Mostra uma breve descrição.\n- skills: Lista minhas habilidades técnicas.\n- projetos: Mostra meus projetos principais.\n- clear: Limpa o terminal.\n- exit: Fecha o terminal.`,
        sobre: () => 'Desenvolvedor Full-Stack com experiência em sistemas de grande escala, APIs RESTful e modernização de sistemas legados.',
        skills: () => 'Habilidades: ' + skills.map(s => s.name).join(', '),
        projetos: () => projects.map(p => `- ${p.title}: ${p.description}`).join('\n'),
        clear: () => {
            setHistory([]);
            return 'Terminal limpo.';
        },
        exit: () => {
            onToggle();
            return 'Minimizando terminal...';
        }
    }), [onToggle]);

    useEffect(() => {
        if (isExpanded) {
           setTimeout(() => inputRef.current?.focus(), 100);
           if(history.length === 0){
             setHistory([{ command: 'help', output: commands.help() }]);
           }
        }
    }, [isExpanded, commands, history.length]);
    
    useEffect(() => {
        endOfTerminalRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const command = input.trim().toLowerCase();
        if (!command) return;

        const output = commands[command] ? commands[command]() : `Comando não encontrado: ${command}. Digite 'help' para ver a lista de comandos.`;
        
        setHistory(prev => [...prev, { command: input, output }]);
        setInput('');
    };

    return (
         <motion.div
            variants={terminalVariants}
            initial="collapsed"
            animate={isExpanded ? 'expanded' : 'collapsed'}
            className="fixed bottom-4 right-4 z-[200] font-mono bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-lg shadow-2xl border border-blue-500/20 dark:border-green-400/20 overflow-hidden"
        >
            <AnimatePresence mode="wait">
                {!isExpanded ? (
                    <motion.button
                        key="collapsed"
                        onClick={onToggle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.1 } }}
                        exit={{ opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                        className="w-full h-full flex items-center justify-center space-x-2 text-xs text-secondary-text dark:text-dark-highlight"
                    >
                        <span>Terminal</span>
                        <div className="flex items-center space-x-1">
                            <Kbd>Ctrl</Kbd><span>+</span><Kbd>K</Kbd>
                        </div>
                    </motion.button>
                ) : (
                    <motion.div
                        key="expanded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.1 } }}
                        exit={{ opacity: 0 }}
                        className="w-full h-full flex flex-col"
                    >
                        <header className="bg-gray-200/50 dark:bg-gray-800/50 p-3 flex items-center justify-between rounded-t-lg select-none flex-shrink-0">
                            <div className="flex space-x-2">
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            </div>
                            <span className="text-blue-600 dark:text-green-400 text-sm truncate mx-2">renato@portfolio: ~</span>
                            <button onClick={onToggle} className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white">
                                <Minus size={18} />
                            </button>
                        </header>
                        <main
                            className="p-4 overflow-y-auto flex-grow" 
                            onClick={() => inputRef.current?.focus()}
                        >
                            {history.map((entry, index) => (
                                <div key={index}>
                                    <div className="flex items-center">
                                        <span className="text-blue-600 dark:text-green-400">renato@portfolio:~$</span>
                                        <span className="ml-2 text-highlight dark:text-white">{entry.command}</span>
                                    </div>
                                    <div className="text-blue-600 dark:text-green-400">
                                        <Typewriter text={entry.output as string} />
                                    </div>
                                </div>
                            ))}
                             <form onSubmit={handleSubmit} className="flex items-center mt-2">
                                <span className="text-blue-600 dark:text-green-400">renato@portfolio:~$</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={handleInputChange}
                                    className="flex-1 bg-transparent text-highlight dark:text-white ml-2 focus:outline-none"
                                    autoComplete="off"
                                />
                            </form>
                            <div ref={endOfTerminalRef} />
                        </main>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};