'use client';

import { FaLinkedin, FaTwitter, FaGithub, FaTiktok } from 'react-icons/fa';

export default function Home() {
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
          I'm a full stack developer based in Malaysia.
        </p>

        <div style={{
          marginTop: '2rem',
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <a
            href="https://www.linkedin.com/in/afifzafri/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#0A66C2',
              fontSize: '2rem',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/afzafri"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#333',
              fontSize: '2rem',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <FaGithub />
          </a>

          <a
            href="https://twitter.com/afzafri"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#1DA1F2',
              fontSize: '2rem',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <FaTwitter />
          </a>

          <a
            href="https://www.tiktok.com/@afzafri"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#000',
              fontSize: '2rem',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </main>
  );
}
