import React from 'react';
import { css } from '@emotion/react';
import PageLayout from '../layouts/PageLayout';
import PageContainer from '../layouts/PageContainer';
import { ProjectCard, FeatureCard } from '../components/GlassCard';
import { Typography, Media } from '../lib/style';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "React Router SPA Portfolio Template",
      subtitle: "Modern portfolio template with glass-card UI",
      description: "A modern React Router SPA portfolio template featuring glass-card UI, dark/light themes, and responsive design. Built using Webpack, Emotion, and SCSS, it offers customizable pages for projects, blogs, and experience—ideal for developer portfolios seeking a clean, modern look and strong performance.",
      technologies: ["React", "React Router", "Webpack", "Emotion", "SCSS", "Glassmorphism"],
      status: "Completed",
      year: "2024",
      type: "Web Application",
      gradient: "primary"
    },
    {
      id: 2,
      title: "Family Smart Album",
      subtitle: "AI-powered Android photo organization app",
      description: "AI-powered Android app for automatic family photo organization, featuring smart clustering, location-based grouping, Google Maps integration, and advanced metadata extraction for easy photo discovery and sharing.",
      technologies: ["Android", "Kotlin", "AI/ML", "Google Maps API", "Firebase", "TensorFlow"],
      status: "In Development",
      year: "2025",
      type: "Mobile Application",
      gradient: "secondary"
    },
    {
      id: 3,
      title: "Smart Diary: Reflective",
      subtitle: "Personal diary app with location integration",
      description: "Personal diary app integrating text, photos, and location data. Offers timeline and map views, search, privacy controls, and seamless pairing with Family Smart Album for comprehensive journaling and memory preservation.",
      technologies: ["React Native", "Node.js", "MongoDB", "Geolocation", "Image Processing", "Encryption"],
      status: "Pre-release",
      year: "2024-2025",
      type: "Mobile Application",
      gradient: "warm"
    }
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
            background: var(--primary, #FED766);
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
            color: #22C55E;
          }
          
          .status.development {
            background: rgba(59, 130, 246, 0.2);
            color: #3B82F6;
          }
          
          .status.prerelease {
            background: rgba(251, 146, 60, 0.2);
            color: #FB923C;
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

  return (
    <PageContainer margin="default" padding="default">
      <PageLayout title="Projects">
        <div css={containerStyles}>
          <div css={headerStyles}>
            <h1>My Projects</h1>
            <p>
              Welcome to my projects! Here you can browse and explore my work across web development, 
              mobile applications, and AI-powered solutions.
            </p>
          </div>

          <div css={projectsGridStyles}>
            {projects.map((project) => (
              <ProjectCard 
                key={project.id}
                gradientType={project.gradient}
                css={projectCardStyles}
              >
                <div className="project-header">
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <div className="subtitle">{project.subtitle}</div>
                    <div className="meta">
                      <span className="badge">{project.type}</span>
                      <span className={`status ${getStatusClass(project.status)}`}>
                        {project.status}
                      </span>
                      <span className="badge">{project.year}</span>
                    </div>
                  </div>
                </div>
                
                <div className="project-description">
                  {project.description}
                </div>
                
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
  );
};

export default ProjectsPage; 