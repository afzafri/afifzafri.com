import { FaLinkedin, FaGithub, FaTiktok, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Users, Handshake, Code2, Server, Rocket } from 'lucide-react';

export const socialLinks = [
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/afifzafri/', label: 'LinkedIn' },
  { icon: FaGithub, url: 'https://github.com/afzafri', label: 'GitHub' },
  { icon: FaXTwitter, url: 'https://x.com/afzafri', label: 'X' },
  { icon: FaTiktok, url: 'https://www.tiktok.com/@afzafri', label: 'TikTok' },
];

export const techStack = [
  {
    title: 'Backend Development',
    technologies: ['PHP', 'Laravel', 'RESTful APIs', 'WebSocket', 'MySQL', 'PostgreSQL', 'Redis', 'Oracle DB']
  },
  {
    title: 'Frontend Development',
    technologies: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS']
  },
  {
    title: 'DevOps & Infrastructure',
    technologies: ['Docker', 'CI/CD', 'Linux', 'AWS', 'Azure', 'Alibaba Cloud']
  },
  {
    title: 'Authentication & Security',
    technologies: ['OAuth 2.0', 'SAML SSO', 'JWT-based Authentication']
  },
  {
    title: 'AI Integrations',
    technologies: ['OpenAI', 'Gemini', 'Anthropic', 'Prompt Engineering']
  },
  {
    title: 'Additional Technologies',
    technologies: ['Multi-tenant Architecture', 'Playwright', 'Android', 'Git']
  },
];

export const whatIDo = [
  { title: 'Team Leadership', desc: 'Lead development teams delivering multi-tenant SaaS platforms and enterprise solutions end-to-end', icon: Users },
  { title: 'Client Engagement', desc: 'Run requirement studies and technical consultations, translating business needs into system architecture', icon: Handshake },
  { title: 'Full-Stack Development', desc: 'Build production Laravel backends with RESTful APIs, real-time integrations, and React/Vue frontends', icon: Code2 },
  { title: 'Infrastructure Management', desc: 'Provision and maintain AWS, Azure, and on-premise environments for enterprise clients', icon: Server },
  { title: 'DevOps & Deployment', desc: 'Implement CI/CD pipelines with Docker-based containerized deployments across cloud providers', icon: Rocket }
];
