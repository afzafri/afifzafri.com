'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { socialLinks } from '@/lib/portfolio-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="footer-copyright">© {currentYear} Afif Zafri · Selangor, Malaysia</p>
        <nav className="footer-links" aria-label="Social links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </motion.div>
    </footer>
  );
}
