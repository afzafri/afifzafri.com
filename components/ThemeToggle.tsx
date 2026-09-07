'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { themePreference, setThemePreference } = useTheme();

  const cycleTheme = () => {
    const cycle = {
      system: 'light',
      light: 'dark',
      dark: 'system',
    } as const;
    setThemePreference(cycle[themePreference]);
  };

  const getIcon = () => {
    switch (themePreference) {
      case 'light':
        return <Sun size={20} strokeWidth={1.8} />;
      case 'dark':
        return <Moon size={20} strokeWidth={1.8} />;
      case 'system':
        return <Monitor size={20} strokeWidth={1.8} />;
    }
  };

  const getLabel = () => {
    switch (themePreference) {
      case 'light':
        return 'Light mode';
      case 'dark':
        return 'Dark mode';
      case 'system':
        return 'System mode';
    }
  };

  // No opacity/scale entrance: it gated visibility behind an rAF animation that
  // can be throttled on mobile until first scroll, leaving the button invisible.
  // whileTap stays for tap feedback.
  return (
    <motion.button
      onClick={cycleTheme}
      className="theme-toggle"
      aria-label={getLabel()}
      whileTap={{ scale: 0.95 }}
    >
      <span className="theme-toggle-icon">{getIcon()}</span>
      <span className="theme-toggle-pill">
        <span className="theme-toggle-label">{getLabel()}</span>
      </span>
    </motion.button>
  );
}
