'use client';

import { useState } from 'react';
import { Home, User } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

type NavKey = 'hero' | 'about';

const NAV = [
    { key: 'hero', label: 'Home', icon: Home },
    { key: 'about', label: 'About', icon: User },
] as const;

export default function FloatingSidebar() {
    const [active, setActive] = useState<NavKey>('hero');

    return (
        <motion.nav
            aria-label="Quick navigation"
            className="floating-sidebar"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
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
                        {/* expanding pill */}
                        <span
                            aria-hidden
                            className={`floating-sidebar-pill ${isActive ? 'active' : ''}`}
                        />

                        {/* icon */}
                        <Icon
                            size={20}
                            strokeWidth={1.8}
                            className={`floating-sidebar-icon ${isActive ? 'active' : ''}`}
                        />

                        {/* label */}
                        <span className={`floating-sidebar-label ${isActive ? 'active' : ''}`}>
                            {label}
                        </span>
                    </Link>
                );
            })}
        </motion.nav>
    );
}