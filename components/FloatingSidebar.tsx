'use client';

import { useState, useEffect } from 'react';
import { Home, User, Briefcase, Folder } from 'lucide-react';
import { Link, scroller } from 'react-scroll';
import { motion } from 'framer-motion';

type NavKey = 'hero' | 'about' | 'work-projects' | 'personal-projects';

const NAV = [
    { key: 'hero', label: 'Home', icon: Home },
    { key: 'about', label: 'About', icon: User },
    { key: 'work-projects', label: 'Work Projects', icon: Briefcase },
    { key: 'personal-projects', label: 'Personal Projects', icon: Folder },
] as const;

export default function FloatingSidebar() {
    const [active, setActive] = useState<NavKey>('hero');

    useEffect(() => {
        // Read hash from URL on mount
        const hash = window.location.hash.slice(1) as NavKey; // Remove the # symbol
        if (hash && ['hero', 'about', 'work-projects', 'personal-projects'].includes(hash)) {
            setActive(hash);
            // Scroll to the section when page loads with hash
            setTimeout(() => {
                scroller.scrollTo(hash, {
                    duration: 400,
                    smooth: 'linear',
                });
            }, 100);
        }

        // Listen for hash changes (e.g., browser back/forward)
        const handleHashChange = () => {
            const newHash = window.location.hash.slice(1) as NavKey;
            if (newHash && ['hero', 'about', 'work-projects', 'personal-projects'].includes(newHash)) {
                setActive(newHash);
                scroller.scrollTo(newHash, {
                    duration: 400,
                    smooth: 'linear',
                });
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const handleSetActive = (section: NavKey) => {
        setActive(section);
        // Update URL hash without triggering page jump
        window.history.pushState(null, '', `#${section}`);
    };

    return (
        <motion.nav
            aria-label="Quick navigation"
            className="floating-sidebar"
            initial={{ opacity: 0, x: 20, y: '-50%' }}
            animate={{ opacity: 1, x: 0, y: '-50%' }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
            {NAV.map(({ key, label, icon: Icon }) => {
                const isActive = active === key;

                return (
                    <Link
                        key={key}
                        to={key}
                        smooth="linear"
                        duration={400}
                        spy={true}
                        onSetActive={() => handleSetActive(key)}
                        className="floating-sidebar-item"
                    >
                        {/* icon - always visible */}
                        <Icon
                            size={20}
                            strokeWidth={1.8}
                            className={`floating-sidebar-icon ${isActive ? 'active' : ''}`}
                        />

                        {/* expanding pill with label */}
                        <span
                            aria-hidden
                            className={`floating-sidebar-pill ${isActive ? 'active' : ''}`}
                        >
                            <span className="floating-sidebar-label">
                                {label}
                            </span>
                        </span>
                    </Link>
                );
            })}
        </motion.nav>
    );
}