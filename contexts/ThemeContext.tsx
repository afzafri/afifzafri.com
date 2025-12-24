'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type ThemePreference = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

interface ThemeContextType {
  theme: ResolvedTheme;
  themePreference: ThemePreference;
  setThemePreference: (preference: ThemePreference) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themePreference, setThemePreferenceState] = useState<ThemePreference>('system');
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light');

  // Get system theme
  const getSystemTheme = (): ResolvedTheme => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Resolve the actual theme based on preference
  const resolveTheme = (preference: ThemePreference): ResolvedTheme => {
    if (preference === 'system') {
      return getSystemTheme();
    }
    return preference;
  };

  // Initialize theme on mount
  useEffect(() => {
    const savedPreference = localStorage.getItem('themePreference') as ThemePreference | null;
    const preference = savedPreference || 'system';
    setThemePreferenceState(preference);
    const theme = resolveTheme(preference);
    setResolvedTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  // Listen for system theme changes - only when preference is 'system'
  useEffect(() => {
    if (themePreference !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setResolvedTheme(newTheme);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [themePreference]);

  // Update DOM when resolved theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme);
  }, [resolvedTheme]);

  const setThemePreference = (preference: ThemePreference) => {
    setThemePreferenceState(preference);
    localStorage.setItem('themePreference', preference);
    const theme = resolveTheme(preference);
    setResolvedTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme: resolvedTheme, themePreference, setThemePreference }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
