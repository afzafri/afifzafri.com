import { FaLinkedin, FaTwitter, FaGithub, FaTiktok } from 'react-icons/fa';
import { Users, Handshake, Code2, Server, Rocket } from 'lucide-react';

export const socialLinks = [
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/afifzafri/' },
  { icon: FaGithub, url: 'https://github.com/afzafri' },
  { icon: FaTwitter, url: 'https://twitter.com/afzafri' },
  { icon: FaTiktok, url: 'https://www.tiktok.com/@afzafri' },
];

export const techStack = {
  backend: ['PHP', 'Laravel', 'RESTful APIs', 'WebSocket', 'MySQL', 'PostgreSQL', 'Oracle DB'],
  frontend: ['Vue.js', 'jQuery', 'Bootstrap', 'Materialize CSS', 'HTML5', 'CSS3', 'JavaScript'],
  devops: ['Docker', 'CI/CD', 'Linux', 'AWS', 'Azure', 'Alibaba Cloud'],
  additional: ['Multi-tenant Architecture', 'WebSocket', 'Android', 'Git'],
};

export const whatIDo = [
  { title: 'Team Leadership', desc: 'Lead full-stack development teams and coordinate project delivery', icon: Users },
  { title: 'Client Engagement', desc: 'Conduct requirement studies and technical consultations with enterprise clients', icon: Handshake },
  { title: 'Full-Stack Development', desc: 'Build end-to-end web applications from database to user interface', icon: Code2 },
  { title: 'Infrastructure Management', desc: 'Setup and maintain cloud and on-premise server environments', icon: Server },
  { title: 'DevOps & Deployment', desc: 'Implement CI/CD pipelines and containerized deployments', icon: Rocket },
];
