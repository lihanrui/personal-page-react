import React from 'react';
import { css } from '@emotion/react';
import PageLayout from '../layouts/PageLayout';
import { typography, textEffect, fontFamily, layout, component } from '../lib/util';

const aboutContentStyle = css`
  .hero-text {
    ${typography('lead')};
    text-align: center;
    color: var(--text-secondary, var(--text-primary));
    margin-bottom: 3rem;
  }
  
  .gradient-text {
    ${textEffect('gradient')};
    font-weight: 700;
  }
  
  .skills-grid {
    ${layout('cardGrid')};
    
    .skill-category {
      background: var(--glass-bg, rgba(255, 255, 255, 0.1));
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.2));
      border-radius: 16px;
      padding: 1.5rem;
      box-shadow: var(--shadow-lg);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
      
      /* Glass shine effect */
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(
          90deg, 
          transparent, 
          rgba(255, 255, 255, 0.1), 
          transparent
        );
        opacity: 0.6;
      }
      
      &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-xl);
        border-color: var(--primary, rgba(254, 215, 102, 0.3));
      }
      
      h4 {
        ${typography('h4')};
        color: var(--primary);
        margin-top: 0;
        margin-bottom: 1rem;
      }
      
      ul {
        ${component('arrowList')};
      }
    }
  }
  
  .quote {
    background: var(--glass-bg, rgba(255, 255, 255, 0.1));
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.2));
    border-radius: 20px;
    box-shadow: var(--shadow-xl);
    font-size: 1.25rem;
    font-family: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif";
    font-style: italic;
    text-align: center;
    margin: 3rem 0;
    padding: 2.5rem;
    position: relative;
    overflow: hidden;
    
    /* Enhanced glass shine */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(
        90deg, 
        transparent, 
        rgba(255, 255, 255, 0.2), 
        transparent
      );
      opacity: 0.8;
    }
    
    &::after {
      content: '"';
      font-size: 4rem;
      color: var(--primary);
      position: absolute;
      top: '-0.5rem';
      left: '1rem';
      line-height: 1;
      text-shadow: var(--shadow-sm);
    }
  }
  
  .fun-facts {
    background: var(--glass-bg, rgba(255, 255, 255, 0.1));
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.2));
    border-radius: 16px;
    box-shadow: var(--shadow-lg);
    margin: 2rem 0;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    
    /* Glass shine effect */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(
        90deg, 
        transparent, 
        rgba(255, 255, 255, 0.1), 
        transparent
      );
      opacity: 0.6;
    }
    
    h3 {
      ${typography('h3')};
      text-align: center;
      margin-bottom: 1.5rem;
    }
    
    .facts-list {
      ${layout('statsGrid')};
      
      .fact {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: var(--shadow-md);
        transition: all 0.3s ease;
        
        &:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary, rgba(254, 215, 102, 0.2));
        }
        
        .number {
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 0.5rem;
          text-shadow: var(--shadow-sm);
        }
        
        .label {
          font-size: 0.75rem;
          font-weight: 400;
          line-height: 1.4;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-secondary, var(--text-primary));
        }
      }
    }
  }

  .experience-section {
    margin: 3rem 0;
    
    h2 {
      ${typography('h2')};
      margin-bottom: 2rem;
      text-shadow: var(--shadow-sm);
    }
    
    .experience-item {
      background: var(--glass-bg, rgba(255, 255, 255, 0.1));
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.2));
      border-radius: 16px;
      margin-bottom: 2rem;
      padding: 2rem;
      box-shadow: var(--shadow-lg);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
      
      /* Glass shine effect */
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(
          90deg, 
          transparent, 
          rgba(255, 255, 255, 0.1), 
          transparent
        );
        opacity: 0.6;
      }
      
      &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-xl);
        border-color: var(--primary, rgba(254, 215, 102, 0.3));
      }
      
      .company-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 1rem;
        flex-wrap: wrap;
        gap: 0.5rem;
        
        .company-name {
          ${typography('h4')};
          color: var(--primary);
          margin: 0;
          text-shadow: var(--shadow-sm);
        }
        
        .duration {
          ${typography('body')};
          color: var(--text-secondary);
          font-weight: 500;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.25rem 0.75rem;
          box-shadow: var(--shadow-sm);
        }
      }
      
      .role-title {
        ${typography('h5')};
        color: var(--text-primary);
        margin: 0 0 0.5rem 0;
        font-weight: 600;
        text-shadow: var(--shadow-sm);
      }
      
      .description {
        ${typography('body')};
        color: var(--text-secondary);
        line-height: 1.6;
        margin: 0;
      }
    }
  }

  .education-section {
    margin: 3rem 0;
    
    h2 {
      ${typography('h2')};
      margin-bottom: 2rem;
      text-shadow: var(--shadow-sm);
    }
    
    .education-item {
      background: var(--glass-bg, rgba(255, 255, 255, 0.1));
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.2));
      border-radius: 20px;
      padding: 2.5rem;
      box-shadow: var(--shadow-xl);
      position: relative;
      overflow: hidden;
      
      /* Enhanced glass shine */
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(
          90deg, 
          transparent, 
          rgba(255, 255, 255, 0.2), 
          transparent
        );
        opacity: 0.8;
      }
      
      .school-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 1rem;
        flex-wrap: wrap;
        gap: 0.5rem;
        
        .school-name {
          ${typography('h4')};
          color: var(--primary);
          margin: 0;
          text-shadow: var(--shadow-sm);
        }
        
        .graduation {
          ${typography('body')};
          color: var(--text-secondary);
          font-weight: 500;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.25rem 0.75rem;
          box-shadow: var(--shadow-sm);
        }
      }
      
      .degree {
        ${typography('h5')};
        color: var(--text-primary);
        margin: 0 0 0.5rem 0;
        font-weight: 600;
        text-shadow: var(--shadow-sm);
      }
      
      .description {
        ${typography('body')};
        color: var(--text-secondary);
        line-height: 1.6;
        margin: 0;
      }
    }
  }

  /* Theme-specific glass effects */
  [data-theme="light"] &,
  :root:not([data-theme="dark"]) & {
    --glass-bg: rgba(255, 255, 255, 0.25);
    --glass-border: rgba(255, 255, 255, 0.3);
  }

  [data-theme="dark"] & {
    --glass-bg: rgba(255, 255, 255, 0.05);
    --glass-border: rgba(255, 255, 255, 0.1);
  }
`;

const AboutPage = () => {
  return (
    <PageLayout title="About Me">
      <div css={aboutContentStyle}>
        <p className="hero-text">
          Hi, I'm a creative developer passionate about 
          building beautiful, functional, and user-friendly <span className="gradient-text">digital experiences</span>.
        </p>
        
        <p>
          With a background in both design and development, I love the intersection where 
          aesthetics meet functionality. I believe that great software isn't just about 
          clean code—it's about creating experiences that delight users and solve real problems.
        </p>
        
        <h2>What I Do</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Frontend Development</h4>
            <ul>
              <li>React & Next.js</li>
              <li>TypeScript & JavaScript</li>
              <li>CSS-in-JS & SCSS</li>
              <li>Responsive Design</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h4>Design & UX</h4>
            <ul>
              <li>User Interface Design</li>
              <li>Interaction Design</li>
              <li>Design Systems</li>
              <li>Prototyping</li>
              <li>Accessibility</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h4>Tools & Technologies</h4>
            <ul>
              <li>Figma & Adobe Creative Suite</li>
              <li>Git & Version Control</li>
              <li>Webpack & Build Tools</li>
              <li>Testing & Quality Assurance</li>
              <li>CI/CD & Deployment</li>
            </ul>
          </div>
        </div>
        
        <div className="quote">
          The best way to predict the future is to create it.
        </div>
        
        <div className="experience-section">
          <h2>Professional Experience</h2>
          
          <div className="experience-item">
            <div className="company-header">
              <h4 className="company-name">Google (Contract: Vendor)</h4>
              <span className="duration">2019-2024</span>
            </div>
            <h5 className="role-title">Chrome Enterprise Partners - Android Developer Advocate (2019 - 2023)</h5>
            <p className="description">
              Facilitated partner integration by building proof-of-concept MVP applications and providing technical guidance on Android Runtime Container integration with Chrome OS. Conducted comprehensive graphics performance profiling for an education partner application serving 35+ million users, optimizing performance metrics and ensuring seamless user experience. Collaborated with cross-functional partner teams to troubleshoot integration challenges and deliver technical solutions that enhanced Android app compatibility on Chrome OS platforms.
            </p>
            <h5 className="role-title">Chrome OS Team - Device Testing & Feature Launch Specialist (2023-2024)</h5>
            <p className="description">
              Orchestrated comprehensive testing protocols across hundreds of Chromebook devices in the fleet, ensuring quality assurance standards and device compatibility. Contributed to the successful launch of dozens of Chrome OS features, participating in the complete product development lifecycle from testing to deployment. Implemented systematic testing methodologies that improved device reliability and enhanced user experience across the Chromebook ecosystem.
            </p>
          </div>

          <div className="experience-item">
            <div className="company-header">
              <h4 className="company-name">Career Development & Personal Growth</h4>
              <span className="duration">2017-2018</span>
            </div>
            <h5 className="role-title">Strategic Professional Development Period</h5>
            <p className="description">
              Dedicated time to focused skill development and self-discovery initiatives that enhanced professional capabilities. Developed leadership skills through community management and team coordination roles, managing diverse groups of 20-40 individuals across multiple time zones. Cultivated expertise in strategic planning, conflict resolution, and remote team leadership while organizing complex, time-sensitive collaborative initiatives. This intentional career pause provided valuable perspective and leadership experience that significantly enriched subsequent professional contributions.
            </p>
          </div>

          <div className="experience-item">
            <div className="company-header">
              <h4 className="company-name">Mercedes-Benz (Contract)</h4>
              <span className="duration">2015-2016</span>
            </div>
            <h5 className="role-title">AI Machine Learning Team (MLPUX) - Android Developer</h5>
            <p className="description">
              Maintained and enhanced a critical Android application supporting Mercedes-Benz's Predictive User Experience feature, which later evolved into the comprehensive MBUX (Mercedes-Benz User Experience) infotainment system. Contributed to the development of advanced AI-driven user experience technologies that revolutionized automotive interface design and personalization capabilities. Collaborated with machine learning engineers to integrate predictive algorithms into mobile applications, enhancing driver experience and system responsiveness.
            </p>
          </div>

          <div className="experience-item">
            <div className="company-header">
              <h4 className="company-name">Samsung Semiconductor Inc.</h4>
              <span className="duration">2013-2015</span>
            </div>
            <h5 className="role-title">Quantitative Performance Testing Team - GPS Systems Developer</h5>
            <p className="description">
              Designed and developed a comprehensive Android GPS testing application featuring direct JNI interface integration with GPS system libraries, expanding testing capabilities following Samsung's acquisition of Cambridge Silicon Radio PLC in 2012. Enhanced testing infrastructure to support Samsung's strategic initiative to develop proprietary GPS technologies, contributing to the company's goal of reducing dependency on third-party navigation solutions. Implemented advanced testing protocols that improved GPS accuracy measurements and performance validation across diverse device configurations.
            </p>
          </div>

          <div className="experience-item">
            <div className="company-header">
              <h4 className="company-name">Proximic (Acquired by ComScore)</h4>
              <span className="duration">2013</span>
            </div>
            <h5 className="role-title">Systems Administration Intern - Ad Serving Infrastructure</h5>
            <p className="description">
              Maintained critical network infrastructure and server uptime for high-speed ad serving algorithms during supervisor absences, ensuring zero downtime for revenue-generating systems. Implemented comprehensive monitoring solutions using StatsD and Graphite, establishing real-time system performance tracking that improved operational visibility by enhancing early warning capabilities for potential system issues. Supported mission-critical advertising technology infrastructure that processed high-volume ad serving requests with minimal latency.
            </p>
          </div>
        </div>

        <div className="education-section">
          <h2>Education</h2>
          
          <div className="education-item">
            <div className="school-header">
              <h4 className="school-name">University of California, Berkeley</h4>
              <span className="graduation">Graduated: 2012</span>
            </div>
            <h5 className="degree">Bachelor of Science in Molecular and Cell Biology (MCB)</h5>
            <p className="description">
              Comprehensive study of molecular structures and cellular processes, encompassing biochemistry, molecular biology, genetics, and cell biology fundamentals. Successfully completed rigorous coursework across multiple scientific disciplines including organic chemistry, calculus-based physics, and advanced biological sciences.
            </p>
            <p className="description">
              Demonstrated strong passion for technology by actively pursuing computer science coursework alongside core MCB requirements. This unique combination of biological sciences foundation with computational skills reflects adaptability and commitment to continuous learning across diverse academic disciplines. Acquired analytical and problem-solving capabilities through intensive study of complex biological systems while simultaneously developing computational thinking and programming competencies through CS electives.
            </p>
          </div>
        </div>
        
        <h2>A Few Fun Facts</h2>
        <div className="fun-facts">
          <h3>By the Numbers</h3>
          <div className="facts-list">
            <div className="fact">
              <div className="number">5+</div>
              <div className="label">Years Experience</div>
            </div>
            <div className="fact">
              <div className="number">50+</div>
              <div className="label">Projects Completed</div>
            </div>
            <div className="fact">
              <div className="number">∞</div>
              <div className="label">Cups of Coffee</div>
            </div>
            <div className="fact">
              <div className="number">24/7</div>
              <div className="label">Learning Mode</div>
            </div>
          </div>
        </div>
        
        <p>
          When I'm not coding, you'll find me exploring new design trends, 
          contributing to open source projects, or planning my next adventure. 
          I'm always excited to collaborate on interesting projects and meet 
          fellow creators who share a passion for exceptional digital experiences.
        </p>
        
        <p className="large">
          <strong>Let's build something amazing together!</strong>
        </p>
      </div>
    </PageLayout>
  );
};

export default AboutPage; 