import React from 'react';
import PageLayout from '../layouts/PageLayout';
import { homeContentStyle } from '../lib/style/pages/HomePage';
import { cardStyles, gridStyles, factStyles } from '../lib/style/Components';
import ExperienceItem from '../components/ExperienceItem';

// Import company logos
import GoogleLogo from '../assets/icon_company/Google_2015_logo.svg';
import MercedesLogo from '../assets/icon_company/Mercedes-Benz_Star.svg.png';
import SamsungLogo from '../assets/icon_company/Samsung_Logo.svg.png';
import ProximicLogo from '../assets/icon_company/Proximic_by_Comscore_Logo_Standard.png';

const HomePage = () => {
  // Experience data
  const experienceData = [
    {
      id: 1,
      company: {
        name: "Personal Development & Learning",
        logo: null,
        alt: null
      },
      duration: "2024-Present",
      roles: [
        {
          title: "Independent Social Media Projects",
          description: [
            "See Projects for more details",
            "Currently focused on personal project development and continuous learning initiatives to expand technical capabilities",
            "Dedicated to staying current with industry trends and best practices through self-directed learning and hands-on experimentation"
          ]
        }
      ]
    },
    {
      id: 2,
      company: {
        name: "Google (Contract: Vendor)",
        logo: GoogleLogo,
        alt: "Google"
      },
      duration: "2019-2024",
      roles: [
        {
          title: "Chrome Enterprise Partners - Android Developer Advocate (2019 - 2023)",
          description: [
            "Facilitated partner integration by building proof-of-concept MVP applications and providing technical guidance on Android Runtime Container integration with Chrome OS",
            "Conducted comprehensive graphics performance profiling for an education partner application serving 35+ million users, optimizing performance metrics and ensuring seamless user experience",
            "Collaborated with cross-functional partner teams to troubleshoot integration challenges and deliver technical solutions that enhanced Android app compatibility on Chrome OS platforms"
          ]
        },
        {
          title: "Chrome OS Team - Device Testing & Feature Launch Specialist (2023-2024)",
          description: [
            "Orchestrated comprehensive testing protocols across hundreds of Chromebook devices in the fleet, ensuring quality assurance standards and device compatibility",
            "Contributed to the successful launch of dozens of Chrome OS features, participating in the complete product development lifecycle from testing to deployment",
            "Implemented systematic testing methodologies that improved device reliability and enhanced user experience across the Chromebook ecosystem"
          ]
        }
      ]
    },
    {
      id: 3,
      company: {
        name: "Career Development & Personal Growth",
        logo: null,
        alt: null
      },
      duration: "2017-2018",
      roles: [
        {
          title: "Strategic Professional Development Period",
          description: [
            "Dedicated time to focused skill development and self-discovery initiatives that enhanced professional capabilities",
            "Developed leadership skills through community management and team coordination roles, managing diverse groups of 20-40 individuals across multiple time zones",
            "Cultivated expertise in strategic planning, conflict resolution, and remote team leadership while organizing complex, time-sensitive collaborative initiatives",
            "This intentional career pause provided valuable perspective and leadership experience that significantly enriched subsequent professional contributions"
          ]
        }
      ]
    },
    {
      id: 4,
      company: {
        name: "Mercedes-Benz (Contract)",
        logo: MercedesLogo,
        alt: "Mercedes-Benz"
      },
      duration: "2015-2016",
      roles: [
        {
          title: "AI Machine Learning Team (MLPUX) - Android Developer",
          description: [
            "Maintained and enhanced a critical Android application supporting Mercedes-Benz's Predictive User Experience feature, which later evolved into the comprehensive MBUX (Mercedes-Benz User Experience) infotainment system",
            "Contributed to the development of advanced AI-driven user experience technologies that revolutionized automotive interface design and personalization capabilities",
            "Collaborated with machine learning engineers to integrate predictive algorithms into mobile applications, enhancing driver experience and system responsiveness"
          ]
        }
      ]
    },
    {
      id: 5,
      company: {
        name: "Samsung Semiconductor Inc.",
        logo: SamsungLogo,
        alt: "Samsung"
      },
      duration: "2013-2015",
      roles: [
        {
          title: "Quantitative Performance Testing Team - GPS Systems Developer",
          description: [
            "Designed and developed a comprehensive Android GPS testing application featuring direct JNI interface integration with GPS system libraries, expanding testing capabilities following Samsung's acquisition of Cambridge Silicon Radio PLC in 2012",
            "Enhanced testing infrastructure to support Samsung's strategic initiative to develop proprietary GPS technologies, contributing to the company's goal of reducing dependency on third-party navigation solutions",
            "Implemented advanced testing protocols that improved GPS accuracy measurements and performance validation across diverse device configurations"
          ]
        }
      ]
    },
    {
      id: 6,
      company: {
        name: "Proximic (Acquired by ComScore)",
        logo: ProximicLogo,
        alt: "Proximic"
      },
      duration: "2013",
      roles: [
        {
          title: "Systems Administration Intern - Ad Serving Infrastructure",
          description: [
            "Maintained critical network infrastructure and server uptime for high-speed ad serving algorithms during supervisor absences, ensuring zero downtime for revenue-generating systems",
            "Implemented comprehensive monitoring solutions using StatsD and Graphite, establishing real-time system performance tracking that improved operational visibility",
            "Supported mission-critical advertising technology infrastructure that processed high-volume ad serving requests with minimal latency"
          ]
        }
      ]
    }
  ];

  return (
    <PageLayout title="Henry Li">
      <div css={homeContentStyle}>
        <p className="hero-text">
          Hi, I'm a developer passionate about 
          building beautiful, functional, and user-friendly <span className="gradient-text">digital experiences</span>.
        </p>
                
        <p className="hero-text">
          <strong>Let's build something amazing together!</strong>
        </p>
        
        <div css={cardStyles} className="fun-facts">
          <h3>By the Numbers</h3>
          <div css={gridStyles.statsGrid}>
            <div css={factStyles}>
              <div className="number">5+</div>
              <div className="label">Years Experience</div>
            </div>
            <div css={factStyles}>
              <div className="number">25+</div>
              <div className="label">Projects Completed</div>
            </div>
            <div css={factStyles}>
              <div className="number">24/7</div>
              <div className="label">Learning Mode</div>
            </div>
          </div>
        </div>
        
        <div className="experience-section">
          <h2>Professional Experience</h2>
          
          {experienceData.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>

        <div className="education-section">
          <h2>Education</h2>
          
          <div css={cardStyles} className="education-item">
            <div className="school-header">
              <h4 className="school-name">University of California, Berkeley</h4>
              <span className="graduation">Graduated: 2012</span>
            </div>
            <h5 className="degree">Bachelor of Science in Molecular and Cell Biology with Computer Science Coursework</h5>
            <p className="description">
              Comprehensive study of molecular structures and cellular processes, including biochemistry, molecular biology, genetics, and cell biology. Combined rigorous biological sciences coursework with computer science electives, developing strong analytical and computational thinking skills across diverse academic disciplines.
            </p>
          </div>
        </div>
      </div>
    </PageLayout> 
  );
};

export default HomePage; 