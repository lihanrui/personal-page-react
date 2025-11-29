import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import PageContainer from '../layouts/PageContainer';
import PageLayout from '../layouts/PageLayout';
import StickyShowcase from '../components/StickyShowcase';

// Import company logos
import GoogleLogo from '../assets/icon_company/Google_2015_logo.svg';
import MercedesLogo from '../assets/icon_company/Mercedes-Benz_Star.svg.png';
import SamsungLogo from '../assets/icon_company/Samsung_Logo.svg.png';
import ProximicLogo from '../assets/icon_company/Proximic_by_Comscore_Logo_Standard.png';

const heroSectionStyles = css`
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 1.5rem 4rem;
  overflow: hidden;
`;

const heroBackdrop = css`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(97, 255, 201, 0.12) 0%, rgba(79, 209, 197, 0.2) 45%, rgba(36, 64, 109, 0.45) 100%);
  filter: blur(60px);
  opacity: 0.55;
`;

const heroCardStyles = css`
  position: relative;
  max-width: 680px;
  text-align: center;
  background: rgba(10, 15, 25, 0.55);
  border: 1px solid rgba(97, 255, 201, 0.2);
  border-radius: 24px;
  padding: 3rem 3.5rem;
  color: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(24px);
  box-shadow: 0 40px 120px rgba(0, 0, 0, 0.25);

  h1 {
    font-size: clamp(2.8rem, 2rem + 2vw, 3.6rem);
    margin-bottom: 1rem;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.82);
    margin-bottom: 1.75rem;
  }

  span {
    color: var(--primary, #fed766);
    font-weight: 600;
  }
`;

const heroFooter = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  flex-wrap: wrap;

  a {
    padding: 0.75rem 1.8rem;
    border-radius: 999px;
    border: 1px solid rgba(97, 255, 201, 0.45);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.875rem;
    background: rgba(97, 255, 201, 0.12);
    color: rgba(255, 255, 255, 0.9);
    transition: transform 0.2s ease, background 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      background: rgba(97, 255, 201, 0.2);
    }
  }
`;

const showcaseItems = [
  {
    key: 'android-chromeos',
    badge: 'Android • Chrome OS',
    title: {
      leading: 'Elevating partner experiences with',
      highlight: 'Android & Chrome OS',
      trailing: 'innovation.',
    },
    description:
      'Built proof-of-concept Android apps, profiled graphics pipelines for education partners serving 35M+ users, and ensured seamless compatibility across Chrome OS devices.',
    media: {
      gradient:
        'radial-gradient(circle at 15% 20%, rgba(97, 255, 201, 0.55), transparent 60%), linear-gradient(135deg, rgba(10, 15, 25, 0.9), rgba(29, 97, 173, 0.65))',
    },
  },
  {
    key: 'quality-testing',
    badge: 'Reliability',
    title: {
      leading: 'Scaling quality across fleets with',
      highlight: 'device testing',
      trailing: 'discipline.',
    },
    description:
      'Coordinated end-to-end testing across hundreds of Chromebooks, unlocking dozens of feature launches through systematic validation and data-driven QA strategies.',
    media: {
      gradient:
        'radial-gradient(circle at 70% 30%, rgba(255, 214, 102, 0.45), transparent 55%), linear-gradient(135deg, rgba(28, 39, 63, 0.95), rgba(67, 125, 255, 0.55))',
    },
  },
  {
    key: 'ml-inference',
    badge: 'Machine Learning',
    title: {
      leading: 'Bridging predictive UX with',
      highlight: 'Mercedes-Benz',
      trailing: 'ML initiatives.',
    },
    description:
      'Integrated JNI-driven GPS analytics and predictive UX features for MBUX, collaborating with ML teams to deliver intuitive in-car experiences for global drivers.',
    media: {
      gradient:
        'radial-gradient(circle at 20% 80%, rgba(97, 255, 201, 0.45), transparent 55%), linear-gradient(135deg, rgba(12, 21, 33, 0.95), rgba(255, 141, 84, 0.55))',
    },
  },
  {
    key: 'foundation',
    badge: 'Foundations',
    title: {
      leading: 'Rooted in UC Berkeley',
      highlight: 'Molecular & Cell Biology',
      trailing: 'with CS depth.',
    },
    description:
      'Combining interdisciplinary science with engineering rigor to design resilient systems, mentor teams, and translate complex challenges into human-centered solutions.',
    media: {
      gradient:
        'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.25), transparent 65%), linear-gradient(135deg, rgba(25, 25, 25, 0.85), rgba(97, 255, 201, 0.35))',
    },
  },
];

const experienceData = [
  {
    id: 1,
    company: {
      name: 'Personal Development & Learning',
      logo: null,
      alt: null,
    },
    duration: '2024-Present',
    roles: [
      {
        title: 'Independent Social Media Projects',
        description: [
          'Explore the latest builds in the Showcase Lab',
          'Currently focused on personal project development and continuous learning initiatives to expand technical capabilities',
          'Dedicated to staying current with industry trends and best practices through self-directed learning and hands-on experimentation',
        ],
      },
    ],
  },
  {
    id: 2,
    company: {
      name: 'Google (Contract: Vendor)',
      logo: GoogleLogo,
      alt: 'Google',
    },
    duration: '2019-2024',
    roles: [
      {
        title: 'Chrome Enterprise Partners - Android Developer Advocate (2019 - 2023)',
        description: [
          'Facilitated partner integration by building proof-of-concept MVP applications and providing technical guidance on Android Runtime Container integration with Chrome OS',
          'Conducted comprehensive graphics performance profiling for an education partner application serving 35+ million users, optimizing performance metrics and ensuring seamless user experience',
          'Collaborated with cross-functional partner teams to troubleshoot integration challenges and deliver technical solutions that enhanced Android app compatibility on Chrome OS platforms',
        ],
      },
      {
        title: 'Chrome OS Team - Device Testing & Feature Launch Specialist (2023-2024)',
        description: [
          'Orchestrated comprehensive testing protocols across hundreds of Chromebook devices in the fleet, ensuring quality assurance standards and device compatibility',
          'Contributed to the successful launch of dozens of Chrome OS features, participating in the complete product development lifecycle from testing to deployment',
          'Implemented systematic testing methodologies that improved device reliability and enhanced user experience across the Chromebook ecosystem',
        ],
      },
    ],
  },
  {
    id: 3,
    company: {
      name: 'Career Development & Personal Growth',
      logo: null,
      alt: null,
    },
    duration: '2017-2018',
    roles: [
      {
        title: 'Strategic Professional Development Period',
        description: [
          'Dedicated time to focused skill development and self-discovery initiatives that enhanced professional capabilities',
          'Developed leadership skills through community management and team coordination roles, managing diverse groups of 20-40 individuals across multiple time zones',
          'Cultivated expertise in strategic planning, conflict resolution, and remote team leadership while organizing complex, time-sensitive collaborative initiatives',
          'This intentional career pause provided valuable perspective and leadership experience that significantly enriched subsequent professional contributions',
        ],
      },
    ],
  },
  {
    id: 4,
    company: {
      name: 'Mercedes-Benz (Contract)',
      logo: MercedesLogo,
      alt: 'Mercedes-Benz',
    },
    duration: '2015-2016',
    roles: [
      {
        title: 'AI Machine Learning Team (MLPUX) - Android Developer',
        description: [
          "Maintained and enhanced a critical Android application supporting Mercedes-Benz's Predictive User Experience feature, which later evolved into the comprehensive MBUX (Mercedes-Benz User Experience) infotainment system",
          'Contributed to the development of advanced AI-driven user experience technologies that revolutionized automotive interface design and personalization capabilities',
          'Collaborated with machine learning engineers to integrate predictive algorithms into mobile applications, enhancing driver experience and system responsiveness',
        ],
      },
    ],
  },
  {
    id: 5,
    company: {
      name: 'Samsung Semiconductor Inc.',
      logo: SamsungLogo,
      alt: 'Samsung',
    },
    duration: '2013-2015',
    roles: [
      {
        title: 'Quantitative Performance Testing Team - GPS Systems Developer',
        description: [
          "Designed and developed a comprehensive Android GPS testing application featuring direct JNI interface integration with GPS system libraries, expanding testing capabilities following Samsung's acquisition of Cambridge Silicon Radio PLC in 2012",
          "Enhanced testing infrastructure to support Samsung's strategic initiative to develop proprietary GPS technologies, contributing to the company's goal of reducing dependency on third-party navigation solutions",
          'Implemented advanced testing protocols that improved GPS accuracy measurements and performance validation across diverse device configurations',
        ],
      },
    ],
  },
  {
    id: 6,
    company: {
      name: 'Proximic (Acquired by ComScore)',
      logo: ProximicLogo,
      alt: 'Proximic',
    },
    duration: '2013',
    roles: [
      {
        title: 'Systems Administration Intern - Ad Serving Infrastructure',
        description: [
          'Maintained critical network infrastructure and server uptime for high-speed ad serving algorithms during supervisor absences, ensuring zero downtime for revenue-generating systems',
          'Implemented comprehensive monitoring solutions using StatsD and Graphite, establishing real-time system performance tracking that improved operational visibility',
          'Supported mission-critical advertising technology infrastructure that processed high-volume ad serving requests with minimal latency',
        ],
      },
    ],
  },
];

const HomePage = () => {
  return (
    <>
      <section css={heroSectionStyles}>
        <div css={heroBackdrop} />
        <div css={heroCardStyles}>
          <h1>Hanrui Li | Software Engineer</h1>
          <p>
            Building human-centered experiences across <span>Android</span>, <span>Chrome OS</span>, and large-scale
            device fleets. Focused on clarity, performance, and the craft of making technology feel effortless.
          </p>
          <div css={heroFooter}>
            <Link to="/showcase-lab">Explore Showcase Lab</Link>
            <Link to="/fosters">Meet the Cats</Link>
          </div>
        </div>
      </section>

      <StickyShowcase items={showcaseItems} />

      <PageContainer margin="default" padding="default">
        <PageLayout title="Professional Journey">
          <div className="about-content">
            <p className="hero-text">
              A passionate developer with over <span className="gradient-text">5 years of experience</span> building
              innovative solutions at leading technology companies. I specialize in{' '}
              <span className="gradient-text">Android development</span>,{' '}
              <span className="gradient-text">Chrome OS integration</span>, and creating user-centric digital
              experiences.
            </p>

            <div className="experience-section">
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
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="education-section">
              <h2>Education</h2>

              <div className="education-item">
                <div className="school-header">
                  <h4 className="school-name">University of California, Berkeley</h4>
                  <span className="graduation">Graduated: 2012</span>
                </div>
                <h5 className="degree">
                  Bachelor of Science in Molecular and Cell Biology with Computer Science Coursework
                </h5>
                <p className="description">
                  Comprehensive study of molecular structures and cellular processes, including biochemistry, molecular
                  biology, genetics, and cell biology. Combined rigorous biological sciences coursework with computer
                  science electives, developing strong analytical and computational thinking skills across diverse
                  academic disciplines.
                </p>
              </div>
            </div>
          </div>
        </PageLayout>
      </PageContainer>
    </>
  );
};

export default HomePage;
