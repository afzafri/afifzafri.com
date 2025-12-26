'use client';

import SocialIcon from '@/components/SocialIcon';
import FloatingSidebar from '@/components/FloatingSidebar';
import ThemeToggle from '@/components/ThemeToggle';
import Footer from '@/components/Footer';
import { socialLinks, techStack, whatIDo } from '@/lib/portfolio-data';
import { personalProjects, projectTypes } from '@/lib/personal-projects-data';
import { workProjects } from '@/lib/work-projects-data';
import { experiences } from '@/lib/experience-data';
import { Element, Link } from 'react-scroll';
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
      <ThemeToggle />

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

            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Specializing in Laravel backend engineering and leading teams to build scalable enterprise solutions.
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Link
                to="work-projects"
                href="#work-projects"
                smooth="linear"
                duration={400}
                className="cta-button cta-primary"
              >
                View My Work
              </Link>
              <a
                href="mailto:me@afifzafri.com"
                className="cta-button cta-secondary"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              className="social-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              {socialLinks.map((link, index) => (
                <SocialIcon key={index} Icon={link.icon} url={link.url} label={link.label} />
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
              With 6+ years of experience, I lead and actively contribute to development teams building enterprise web applications, specializing in Laravel-based solutions. I work hands-on across the full stack—from database design and API development to frontend interfaces and cloud deployments.
            </p>
            <p>
              I&apos;m also involved in company-wide solution implementation, including server setup, internal tooling, and platform evaluations. My focus is on scalable, production-ready systems that solve real business problems.
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
          {techStack.map((category, index) => (
            <motion.div
              key={index}
              className="tech-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <h4 className="tech-category-title">{category.title}</h4>
              <div className="tech-tags">
                {category.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      </Element>

      {/* Experience Section */}
      <Element name="experience">
        <section className="experience-section">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Experience
          </motion.h2>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <p className="timeline-period">{exp.period}</p>
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-role">{exp.role}</h3>
                      {exp.website ? (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener"
                          className="timeline-company timeline-company-link"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <p className="timeline-company">{exp.company}</p>
                      )}
                    </div>
                    <span className="timeline-type glass-tag">{exp.employmentType}</span>
                  </div>
                  <p className="timeline-location">{exp.location}</p>

                  <ul className="timeline-responsibilities">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>

                  {exp.skills && (
                    <div className="timeline-skills">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="tech-tag">{skill}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </Element>

      {/* Work Projects Section */}
      <Element name="work-projects">
        <section className="work-projects-section">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Work Projects
          </motion.h2>

          <Masonry
            breakpointCols={breakpointColumns}
            className="work-projects-list"
            columnClassName="work-projects-list-column"
          >
            {workProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="work-project-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Project Header */}
                <div className="work-project-header">
                  <h3 className="work-project-title">{project.title}</h3>
                  <p className="work-project-subtitle">{project.subtitle}</p>
                  <span className="work-project-role glass-tag">{project.role}</span>
                </div>

                {/* Project Screenshot */}
                <div className="work-project-screenshot">
                  <img src={project.screenshot} alt={`${project.title} screenshot`} loading="lazy" />
                </div>

                {/* Project Description */}
                <p className="work-project-description">{project.description}</p>

                {/* Key Contributions */}
                {project.keyContributions && (
                  <div className="work-project-features">
                    <h4>Key Contributions</h4>
                    <ul>
                      {project.keyContributions.map((contribution, i) => (
                        <li key={i}>{contribution}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Integrations */}
                {project.integrations && (
                  <div className="work-project-integrations">
                    <h4>Integration Points</h4>
                    <div className="tech-tags">
                      {project.integrations.map((integration, i) => (
                        <span key={i} className="tech-tag">{integration}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="work-project-tech">
                  <h4>Tech Stack</h4>

                  <div className="project-meta">
                    <div className="tech-tags">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>

                    {project.timeline && (
                      <p className="project-timeline">{project.timeline}</p>
                    )}
                  </div>
                </div>

                {/* Project Link */}
                <div className="work-project-links">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener"
                    className="work-project-link"
                  >
                    <ExternalLink size={16} />
                    Visit {project.title}
                  </a>
                </div>
              </motion.div>
            ))}
          </Masonry>

          <motion.p
            className="section-note"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Additional client solutions delivered for Panasonic, Great Eastern Takaful, Toyo Tires, Prudential, and more
          </motion.p>
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
                    <div className="project-title-row">
                      <h3 className="project-title">{project.title}</h3>
                      {project.tag && (
                        <span className="project-tag glass-tag">{project.tag}</span>
                      )}
                    </div>
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
                        <a href={project.demo} target="_blank" rel="noopener" className="project-link">
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener" className="project-link">
                          <Github size={16} />
                          GitHub
                        </a>
                      )}
                      {project.packagist && (
                        <a href={project.packagist} target="_blank" rel="noopener" className="project-link">
                          <ExternalLink size={16} />
                          Packagist
                        </a>
                      )}
                      {project.paper && (
                        <a href={project.paper} target="_blank" rel="noopener" className="project-link">
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

      <Footer />
    </main>
  );
}
