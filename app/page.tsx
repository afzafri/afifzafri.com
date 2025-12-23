'use client';

import SocialIcon from '@/components/SocialIcon';
import FloatingSidebar from '@/components/FloatingSidebar';
import { socialLinks, techStack, whatIDo } from '@/lib/portfolio-data';
import { personalProjects, projectTypes } from '@/lib/personal-projects-data';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import Masonry from 'react-masonry-css';

export default function Home() {
  const [activeProjectType, setActiveProjectType] = useState<string>('web');

  const filteredProjects = personalProjects.filter(p => p.type === activeProjectType);

  const breakpointColumns = {
    default: 2,
    768: 1
  };

  return (
    <main>
      <FloatingSidebar />

      {/* Hero Section */}
      <Element name="hero">
        <section className="hero-section">
          <div className="hero-content">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              👋🏻 Hi! My name is <strong className="name-nowrap">Afif Zafri</strong>.
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              I&apos;m a <strong>full stack developer</strong> based in Malaysia.
            </motion.p>

            <motion.div
              className="social-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              {socialLinks.map((link, index) => (
                <SocialIcon key={index} Icon={link.icon} url={link.url} />
              ))}
            </motion.div>
          </div>
        </section>
      </Element>

      {/* About Section */}
      <Element name="about">
        <section className="about-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.h2>

        {/* Introduction */}
        <motion.div
          className="intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p>
            I lead development teams building enterprise web applications, specializing in Laravel-based solutions with modern cloud infrastructure. Currently based in Ara Damansara, Selangor.
          </p>
          <p>
            I work across the full stack, from database design and API development to frontend interfaces and cloud deployments. My focus is on scalable, production-ready systems that solve real business problems.
          </p>
        </motion.div>

        {/* What I Do */}
        <motion.h3
          className="subsection-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          What I Do
        </motion.h3>
        <div className="what-i-do-grid">
          {whatIDo.map((item, index) => {
            return (
              <motion.div
                key={index}
                className="what-i-do-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4>
                  <span className="what-i-do-icon"><item.icon /></span>
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack */}
        <motion.h3
          className="subsection-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Tech Stack
        </motion.h3>
        <div className="tech-stack">
          <motion.div
            className="tech-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="tech-category-title">Backend Development</h4>
            <div className="tech-tags">
              {techStack.backend.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="tech-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="tech-category-title">Frontend Development</h4>
            <div className="tech-tags">
              {techStack.frontend.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="tech-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="tech-category-title">DevOps & Infrastructure</h4>
            <div className="tech-tags">
              {techStack.devops.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="tech-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="tech-category-title">Additional Technologies</h4>
            <div className="tech-tags">
              {techStack.additional.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      </Element>

      {/* Personal Projects Section */}
      <Element name="personal-projects">
        <section className="personal-projects-section">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Personal Projects
          </motion.h2>

          {/* Project Type Tabs */}
          <motion.div
            className="project-tabs"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            {projectTypes.map((type, index) => (
              <motion.button
                key={type.key}
                onClick={() => setActiveProjectType(type.key)}
                className={`project-tab ${activeProjectType === type.key ? 'active' : ''}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {type.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects List */}
          <motion.div
            key={activeProjectType}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Masonry
              breakpointCols={breakpointColumns}
              className="projects-list"
              columnClassName="projects-list-column"
            >
              {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>

                  <p className="project-description">{project.description}</p>

                  {project.features && (
                    <ul className="project-features">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  )}

                  <div className="project-meta">
                    <div className="project-stack">
                      {project.stack.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>

                    {project.timeline && (
                      <p className="project-timeline">{project.timeline}</p>
                    )}
                  </div>

                  {(project.demo || project.github || project.packagist || project.paper) && (
                    <div className="project-links">
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                          <Github size={16} />
                          GitHub
                        </a>
                      )}
                      {project.packagist && (
                        <a href={project.packagist} target="_blank" rel="noopener noreferrer" className="project-link">
                          <ExternalLink size={16} />
                          Packagist
                        </a>
                      )}
                      {project.paper && (
                        <a href={project.paper} target="_blank" rel="noopener noreferrer" className="project-link">
                          <ExternalLink size={16} />
                          Paper
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
            </Masonry>
          </motion.div>
        </section>
      </Element>
    </main>
  );
}
