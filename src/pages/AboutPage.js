import React from 'react';
import PageContainer from '../layouts/PageContainer';
import { cardStyles } from '../lib/style/Components';

// Import company logos
import GoogleLogo from '../assets/icon_company/Google_2015_logo.svg';
import MercedesLogo from '../assets/icon_company/Mercedes-Benz_Star.svg.png';
import SamsungLogo from '../assets/icon_company/Samsung_Logo.svg.png';
import ProximicLogo from '../assets/icon_company/Proximic_by_Comscore_Logo_Standard.png';

const AboutPage = () => {
  // Experience data (imported from HomePage)
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
    <PageContainer margin="full" padding="none">
      <div className="about-page-full-width">
        <div className="about-page-wrapper">
          <div className="about-content">
            {/* Intro Section - Light Blue Background */}
            <div className="section-container intro-section">
              <div className="page-header">
                <h1>About Me</h1>
                <p className="intro-text">
                  A passionate developer with over 5 years of experience building innovative solutions 
                  at leading technology companies. I specialize in Android development, Chrome OS integration, 
                  and creating user-centric digital experiences.
                </p>
              </div>
            </div>
            
            {/* Experience Section - Light Green Background */}
            <div className="section-container experience-section">
              <h2>Professional Experience</h2>
              
              {experienceData.map((experience) => (
                <div key={experience.id} className="experience-item-custom">
                  <div className="company-header">
                    {experience.company.logo ? (
                      <div className="company-info">
                        <img src={experience.company.logo} alt={experience.company.alt} className="company-logo" />
                        <h4 className="company-name">{experience.company.name}</h4>
                      </div>
                    ) : (
                      <h4 className="company-name">{experience.company.name}</h4>
                    )}
                    <span className="duration">{experience.duration}</span>
                  </div>
                  
                  {experience.roles.map((role, index) => (
                    <div key={index} className="role-section">
                      <h5 className="role-title">{role.title}</h5>
                      <ul className="description">
                        {role.description.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            {item.includes("See Projects for more details") ? (
                              <>
                                See <a href="/projects">Projects</a> for more details
                              </>
                            ) : (
                              item
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Education Section - Light Purple Background */}
            <div className="section-container education-section">
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
        </div>
      </div>

      <style jsx>{`
        .about-page-full-width {
          position: relative;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .about-page-wrapper {
          margin: 0;
          padding: 0;
          width: 100%;
        }

        .about-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0;
        }

        .section-container {
          padding: 60px 0;
          margin: 0;
          border-radius: 0;
        }

        .intro-section {
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
          min-height: 300px;
          display: flex;
          align-items: center;
        }

        .experience-section {
          background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
          min-height: 400px;
        }

        .education-section {
          background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
          min-height: 300px;
        }

        .page-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .page-header h1 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          color: #2c3e50;
        }

        .intro-text {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #34495e;
          margin: 0;
        }

        .experience-section h2,
        .education-section h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          text-align: center;
          color: #2c3e50;
        }

        .experience-item-custom {
          width: 100%;
          margin-bottom: 0;
          padding: 2rem 40px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 0;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .experience-item-custom:last-child {
          margin-bottom: 0;
        }

        .company-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .company-info {
          display: flex;
          align-items: center;
        }

        .company-logo {
          width: 2rem;
          height: 2rem;
          object-fit: contain;
          margin-right: 0.75rem;
        }

        .company-name {
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.2;
          color: #2c3e50;
          margin: 0;
        }

        .duration {
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.625;
          color: #666;
        }

        .role-section {
          margin-bottom: 1.5rem;
        }

        .role-section:last-child {
          margin-bottom: 0;
        }

        .role-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #34495e;
          margin-bottom: 0.75rem;
        }

        .description {
          margin: 0;
          padding-left: 1.5rem;
        }

        .description li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
          color: #555;
        }

        .description a {
          color: #3498db;
          text-decoration: underline;
        }

        .description a:hover {
          color: #2980b9;
        }

        .education-item {
          background: rgba(255, 255, 255, 0.9) !important;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 768px) {
          .section-container {
            padding: 40px 20px;
          }

          .page-header h1 {
            font-size: 2.5rem;
          }

          .experience-section h2,
          .education-section h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </PageContainer>
  );
};

export default AboutPage; 