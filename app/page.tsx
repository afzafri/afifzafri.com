'use client';

import SocialIcon from '@/components/SocialIcon';
import FloatingSidebar from '@/components/FloatingSidebar';
import { socialLinks, techStack, whatIDo } from '@/lib/portfolio-data';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

export default function Home() {

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
    </main>
  );
}
