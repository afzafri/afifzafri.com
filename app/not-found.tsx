'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

export default function NotFound() {
  return (
    <main>
      <ThemeToggle />

      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ fontSize: '4rem', marginBottom: '0.5rem' }}
          >
            404
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Oops! Page not found
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            style={{
              fontSize: '1rem',
              color: 'var(--color-text-light)',
              marginTop: '1rem',
              marginBottom: '2rem'
            }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'var(--color-accent)',
                color: 'var(--color-hover-text)',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease',
                boxShadow: 'var(--shadow-md)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              <Home size={18} strokeWidth={2} />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
