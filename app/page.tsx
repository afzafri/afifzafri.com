'use client';

import { FaLinkedin, FaTwitter, FaGithub, FaTiktok } from 'react-icons/fa';
import { IconType } from 'react-icons';

// Reusable SocialIcon component
function SocialIcon({ Icon, url }: { Icon: IconType; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: '#000',
        fontSize: '2rem',
        transition: 'all 0.3s ease',
        opacity: '0.6',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.2)';
        e.currentTarget.style.opacity = '1';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.opacity = '0.6';
      }}
    >
      <Icon />
    </a>
  );
}

export default function Home() {
  // Social links data
  const socialLinks = [
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/afifzafri/' },
    { icon: FaGithub, url: 'https://github.com/afzafri' },
    { icon: FaTwitter, url: 'https://twitter.com/afzafri' },
    { icon: FaTiktok, url: 'https://www.tiktok.com/@afzafri' },
  ];

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Hi! My name is Afif Zafri.
        </h1>
        <p style={{ fontSize: '1.25rem' }}>
          I&apos;m a full stack developer based in Malaysia.
        </p>

        <div style={{
          marginTop: '2rem',
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} Icon={link.icon} url={link.url} />
          ))}
        </div>
      </div>
    </main>
  );
}
