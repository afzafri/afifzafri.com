import SocialIcon from '@/components/SocialIcon';
import { socialLinks, techStack, whatIDo } from '@/lib/portfolio-data';

export default function Home() {

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi! My name is Afif Zafri.
          </h1>
          <p className="hero-subtitle">
            I&apos;m a full stack developer based in Malaysia.
          </p>

          <div className="social-links">
            {socialLinks.map((link, index) => (
              <SocialIcon key={index} Icon={link.icon} url={link.url} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2 className="section-title">About</h2>

        {/* Introduction */}
        <div className="intro">
          <p>
            I lead development teams building enterprise web applications, specializing in Laravel-based solutions with modern cloud infrastructure. Currently based in Ara Damansara, Selangor.
          </p>
          <p>
            I work across the full stack, from database design and API development to frontend interfaces and cloud deployments. My focus is on scalable, production-ready systems that solve real business problems.
          </p>
        </div>

        {/* What I Do */}
        <h3 className="subsection-title">What I Do</h3>
        <div className="what-i-do-grid">
          {whatIDo.map((item, index) => {
            return (
              <div key={index} className="what-i-do-item">
                <h4>
                  <span className="what-i-do-icon"><item.icon /></span>
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Tech Stack */}
        <h3 className="subsection-title">Tech Stack</h3>
        <div className="tech-stack">
          <div className="tech-category">
            <h4 className="tech-category-title">Backend Development</h4>
            <div className="tech-tags">
              {techStack.backend.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="tech-category">
            <h4 className="tech-category-title">Frontend Development</h4>
            <div className="tech-tags">
              {techStack.frontend.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="tech-category">
            <h4 className="tech-category-title">DevOps & Infrastructure</h4>
            <div className="tech-tags">
              {techStack.devops.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="tech-category">
            <h4 className="tech-category-title">Additional Technologies</h4>
            <div className="tech-tags">
              {techStack.additional.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
