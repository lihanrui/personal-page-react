import React from 'react';
import { css } from '@emotion/react';
import PageLayout from '../layouts/PageLayout';
import PageContainer from '../layouts/PageContainer';
import { ProjectCard } from '../components/GlassCard';
import StickyShowcase from '../components/StickyShowcase';
import { Typography, Media } from '../lib/style';

const heroSectionStyles = css`
  position: relative;
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5.5rem 1.5rem 3.5rem;
  overflow: hidden;
`;

const heroBackdrop = css`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(97, 255, 201, 0.12) 0%, rgba(80, 167, 255, 0.25) 45%, rgba(32, 39, 84, 0.4) 100%);
  filter: blur(75px);
  opacity: 0.65;
`;

const heroCardStyles = css`
  position: relative;
  max-width: 700px;
  text-align: center;
  background: rgba(16, 22, 36, 0.55);
  border: 1px solid rgba(80, 167, 255, 0.2);
  border-radius: 26px;
  padding: 3rem 3.5rem;
  color: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(22px);

  h1 {
    font-size: clamp(2.6rem, 2.2rem + 1.6vw, 3.4rem);
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.84);
  }
`;

const projects = [
  {
    id: 1,
    title: 'React Router SPA Portfolio Template',
    subtitle: 'Modern portfolio template with glass-card UI',
    description:
      'A modern React Router SPA portfolio template featuring glass-card UI, dark/light themes, and responsive design. Built using Webpack, Emotion, and SCSS, it offers customizable pages for projects, blogs, and experience—ideal for developer portfolios seeking a clean, modern look and strong performance.',
    technologies: ['React', 'React Router', 'Webpack', 'Emotion', 'SCSS', 'Glassmorphism'],
    status: 'Completed',
    year: '2024',
    type: 'Web Application',
    gradient: 'primary',
  },
  {
    id: 2,
    title: 'Family Smart Album',
    subtitle: 'AI-powered Android photo organization app',
    description:
      'AI-powered Android app for automatic family photo organization, featuring smart clustering, location-based grouping, Google Maps integration, and advanced metadata extraction for easy photo discovery and sharing.',
    technologies: ['Android', 'Kotlin', 'AI/ML', 'Google Maps API', 'Firebase', 'TensorFlow'],
    status: 'In Development',
    year: '2025',
    type: 'Mobile Application',
    gradient: 'secondary',
  },
  {
    id: 3,
    title: 'Smart Diary: Reflective',
    subtitle: 'Personal diary app with location integration',
    description:
      'Personal diary app integrating text, photos, and location data. Offers timeline and map views, search, privacy controls, and seamless pairing with Family Smart Album for comprehensive journaling and memory preservation.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Geolocation', 'Image Processing', 'Encryption'],
    status: 'Pre-release',
    year: '2024-2025',
    type: 'Mobile Application',
    gradient: 'warm',
  },
];

const showcaseItems = [
  {
    key: 'portfolio-template',
    badge: 'Glassmorphism UI',
    title: {
      leading: 'A delightful React Router base for',
      highlight: 'developer portfolios',
      trailing: 'with dark/light symmetry.',
    },
    description:
      'Webpack-powered SPA with glass-card components, theming hooks, and polished typography primitives to help engineers launch quickly.',
    media: {
      gradient:
        'radial-gradient(circle at 20% 35%, rgba(97, 255, 201, 0.5), transparent 60%), linear-gradient(135deg, rgba(20, 28, 44, 0.92), rgba(82, 146, 255, 0.55))',
    },
    cta: { to: '/projects', label: 'View Projects' },
  },
  {
    key: 'family-smart-album',
    badge: 'Android • AI/ML',
    title: {
      leading: 'Organizing family memories with',
      highlight: 'on-device intelligence',
      trailing: 'and contextual grouping.',
    },
    description:
      'Combines clustering, maps, and smart metadata extraction to surface the right photo in seconds—built for everyday storytellers.',
    media: {
      gradient:
        'radial-gradient(circle at 70% 25%, rgba(255, 214, 102, 0.45), transparent 55%), linear-gradient(135deg, rgba(26, 33, 58, 0.9), rgba(255, 170, 112, 0.55))',
    },
  },
  {
    key: 'smart-diary',
    badge: 'Privacy First',
    title: {
      leading: 'Reflective journaling with',
      highlight: 'location-aware entries',
      trailing: 'and secure storage.',
    },
    description:
      'Companion to Family Smart Album, merging timeline, map views, and encryption so memories stay vivid and private.',
    media: {
      gradient:
        'radial-gradient(circle at 50% 60%, rgba(255, 255, 255, 0.32), transparent 63%), linear-gradient(135deg, rgba(24, 46, 68, 0.9), rgba(139, 234, 255, 0.45))',
    },
  },
];

const containerStyles = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const headerStyles = css`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    ${Typography.styles.h1}
    background: linear-gradient(135deg, var(--primary, #FED766), #FFFFFF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
  }

  p {
    ${Typography.styles.lead}
    color: var(--text-secondary, #666);
    max-width: 600px;
    margin: 0 auto;
  }
`;

const projectsGridStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  ${Media.small} {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const projectCardStyles = css`
  display: flex;
  flex-direction: column;
  height: 100%;

  .project-header {
    margin-bottom: 1.5rem;

    .project-info {
      flex: 1;

      h3 {
        ${Typography.styles.h3}
        margin-bottom: 0.5rem;
        color: var(--text-primary);
      }

      .subtitle {
        ${Typography.styles.bodySmall}
        color: var(--text-secondary, #666);
        margin-bottom: 0.5rem;
      }

      .meta {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 0.5rem;

        .badge {
          ${Typography.styles.caption}
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          background: var(--primary, #fed766);
          color: #000;
          font-weight: 600;
        }

        .status {
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .status.completed {
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
        }

        .status.development {
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
        }

        .status.prerelease {
          background: rgba(251, 146, 60, 0.2);
          color: #fb923c;
        }
      }
    }
  }

  .project-description {
    ${Typography.styles.body}
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    flex: 1;
  }

  .project-technologies {
    margin-top: auto;

    h4 {
      ${Typography.styles.h6}
      color: var(--text-primary);
      margin-bottom: 0.75rem;
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      .tech-tag {
        ${Typography.styles.caption}
        padding: 0.375rem 0.75rem;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.1);
        color: var(--text-primary);
        border: 1px solid rgba(255, 255, 255, 0.2);
        transition: all 0.2s ease;

        &:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-1px);
        }
      }
    }
  }
`;

const getStatusClass = (status) => {
  switch (status.toLowerCase()) {
    case 'completed':
      return 'completed';
    case 'in development':
      return 'development';
    case 'pre-release':
      return 'prerelease';
    default:
      return 'development';
  }
};

const ProjectsPage = () => {
  return (
    <>
      <section css={heroSectionStyles}>
        <div css={heroBackdrop} />
        <div css={heroCardStyles}>
          <h1>Projects in Motion</h1>
          <p>
            Exploring web, mobile, and AI to create joyful tooling—each build balancing performance, craft, and the
            humans who rely on it.
          </p>
        </div>
      </section>

      <StickyShowcase items={showcaseItems} />

      <PageContainer margin="default" padding="default">
        <PageLayout title="Projects">
          <div css={containerStyles}>
            <div css={headerStyles}>
              <h1>My Projects</h1>
              <p>
                Here you can browse and explore my work across web development, mobile applications, and AI-powered
                solutions.
              </p>
            </div>

            <div css={projectsGridStyles}>
              {projects.map((project) => (
                <ProjectCard key={project.id} gradientType={project.gradient} css={projectCardStyles}>
                  <div className="project-header">
                    <div className="project-info">
                      <h3>{project.title}</h3>
                      <div className="subtitle">{project.subtitle}</div>
                      <div className="meta">
                        <span className="badge">{project.type}</span>
                        <span className={`status ${getStatusClass(project.status)}`}>{project.status}</span>
                        <span className="badge">{project.year}</span>
                      </div>
                    </div>
                  </div>

                  <div className="project-description">{project.description}</div>

                  <div className="project-technologies">
                    <h4>Technologies</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </ProjectCard>
              ))}
            </div>
          </div>
        </PageLayout>
      </PageContainer>
    </>
  );
};

export default ProjectsPage;
