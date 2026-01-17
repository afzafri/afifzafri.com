'use client';

import { ReactNode } from 'react';

interface ShinyButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function ShinyButton({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
}: ShinyButtonProps) {
  const baseClass = `cta-button cta-${variant}`;
  const combinedClass = `${baseClass} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClass}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass}>
      {children}
    </button>
  );
}
