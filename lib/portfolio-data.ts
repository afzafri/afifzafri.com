import { FaLinkedin, FaTwitter, FaGithub, FaTiktok, FaEnvelope } from 'react-icons/fa';
import { Users, Handshake, Code2, Server, Rocket } from 'lucide-react';

export const socialLinks = [
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/afifzafri/', label: 'LinkedIn' },
  { icon: FaGithub, url: 'https://github.com/afzafri', label: 'GitHub' },
  { icon: FaTwitter, url: 'https://twitter.com/afzafri', label: 'Twitter' },
  { icon: FaTiktok, url: 'https://www.tiktok.com/@afzafri', label: 'TikTok' },
];

export const techStack = [
  {
    title: 'Backend Development',
    technologies: ['PHP', 'Laravel', 'RESTful APIs', 'WebSocket', 'MySQL', 'PostgreSQL', 'Oracle DB']
  },
  {
    title: 'Frontend Development',
    technologies: ['React', 'Next.js', 'Vue.js', 'jQuery', 'Bootstrap', 'Materialize CSS', 'HTML5', 'CSS3', 'JavaScript']
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
    technologies: ['Multi-tenant Architecture', 'Android', 'Git']
  },
];

export const whatIDo = [
  { title: 'Team Leadership', desc: 'Lead full-stack development teams and coordinate project delivery', icon: Users },
  { title: 'Client Engagement', desc: 'Conduct requirement studies and technical consultations with enterprise clients', icon: Handshake },
  { title: 'Full-Stack Development', desc: 'Build end-to-end web applications from database to user interface', icon: Code2 },
  { title: 'Infrastructure Management', desc: 'Setup and maintain cloud and on-premise server environments', icon: Server },
  { title: 'DevOps & Deployment', desc: 'Experience working with CI/CD pipelines and containerized deployment workflows', icon: Rocket }
];
