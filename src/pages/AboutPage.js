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
      ${component('card')};
      
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
    ${component('quote')};
  }
  
  .fun-facts {
    ${component('card')};
    margin: 2rem 0;
    
    h3 {
      ${typography('h3')};
      text-align: center;
      margin-bottom: 1.5rem;
    }
    
    .facts-list {
      ${layout('statsGrid')};
      
      .fact {
        ${component('statistic')};
      }
    }
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