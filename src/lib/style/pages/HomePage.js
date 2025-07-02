import { css } from '@emotion/react';
import { typography, textEffect, fontFamily, layout, component } from '../../util';

export const homeContentStyle = css`
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
    font-size: 1.25rem;
    font-family: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif";
    font-style: italic;
    text-align: center;
    margin: 3rem 0;
    padding: 2.5rem;
    position: relative;
    
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
    margin: 2rem 0;
    
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
      margin-bottom: 2rem;
      padding: 2rem;
      
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
        
        &.description {
          list-style-type: disc;
          padding-left: 1.25rem;
          margin-bottom: 1.5rem;
          
          li {
            margin-bottom: 0.75rem;
            
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
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
      padding: 2.5rem;
      
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
`; 