'use client';

import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import readingRaw from '@/lib/reading-data.json';

// Explicit type so the seed can be an empty { books: [] } fallback without
// TypeScript inferring `never[]` (which breaks book.percentage access).
type ReadingBook = {
  title: string;
  author: string | null;
  percentage: number;
  lastReadAt: number | null;
};
type ReadingData = { updatedAt: number; books: ReadingBook[] };
const readingData = readingRaw as ReadingData;

// Relative label computed against the baked snapshot time so the value is a
// build-time constant (no client/server hydration mismatch).
function lastReadLabel(lastReadAt: number | null, snapshotAt: number): string | null {
  if (!lastReadAt) return null;
  const days = Math.floor((snapshotAt - lastReadAt) / 86400);
  if (days <= 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  return `${Math.floor(days / 30)}mo ago`;
}

export default function CurrentlyReading() {
  const { books, updatedAt } = readingData;
  const book = books[0];

  // Genuine "no current book" state (fetch ran, nothing in progress): show a
  // subtle line rather than vanishing, so the Reading hobby still has context.
  if (!book) {
    return (
      <motion.div
        className="currently-reading currently-reading--empty"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="cr-icon" aria-hidden>
          <BookOpen size={16} strokeWidth={1.8} />
        </span>
        <span className="cr-text">
          <span className="cr-label">Currently reading</span>{' '}
          <span className="cr-none">between books right now 📚</span>
        </span>
      </motion.div>
    );
  }

  const pct = Math.round(book.percentage * 100);
  const when = lastReadLabel(book.lastReadAt, updatedAt);

  return (
    <motion.div
      className="currently-reading"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      <span className="cr-icon" aria-hidden>
        <BookOpen size={16} strokeWidth={1.8} />
      </span>
      <span className="cr-text">
        <span className="cr-label">Currently reading</span>{' '}
        <span className="cr-title">{book.title}</span>
        {book.author && <span className="cr-author"> · {book.author}</span>}
      </span>
      <span className="cr-meta">
        <span className="cr-pct">{pct}%</span>
        {when && <span className="cr-when">{when}</span>}
      </span>
    </motion.div>
  );
}
