'use client';

import { useState } from 'react';
import { Home, User, Folder } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

type NavKey = 'hero' | 'about' | 'personal-projects';

const NAV = [
    { key: 'hero', label: 'Home', icon: Home },
    { key: 'about', label: 'About', icon: User },
    { key: 'personal-projects', label: 'Personal Projects', icon: Folder },
] as const;

export default function FloatingSidebar() {
    const [active, setActive] = useState<NavKey>('hero');

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
                        smooth={true}
                        duration={800}
                        spy={true}
                        onSetActive={() => setActive(key)}
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