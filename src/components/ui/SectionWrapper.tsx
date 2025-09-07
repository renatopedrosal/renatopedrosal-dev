
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

interface SectionWrapperProps {
    children: React.ReactNode;
    id: string;
    className?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.section
            id={id}
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`py-20 md:py-28 ${className}`}
        >
            {children}
        </motion.section>
    );
};
