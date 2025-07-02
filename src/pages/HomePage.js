import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
import GlassCard, { GradientCard, RainbowGradientCard } from '../components/GlassCard';
import { homeContentStyle } from '../lib/style/pages/HomePage';

// Import company logos
import GoogleLogo from '../assets/icon_company/Google_2015_logo.svg';
import MercedesLogo from '../assets/icon_company/Mercedes-Benz_Star.svg.png';
import SamsungLogo from '../assets/icon_company/Samsung_Logo.svg.png';
import ProximicLogo from '../assets/icon_company/Proximic_by_Comscore_Logo_Standard.png';

const HomePage = () => {
  return (
    <PageLayout title="Henry Li">
      <div css={homeContentStyle}>
        <p className="hero-text">
          Hi, I'm a developer passionate about 
          building beautiful, functional, and user-friendly <span className="gradient-text">digital experiences</span>.
        </p>
        
        <GlassCard intensity="medium" gradient={true} gradientType="warm" className="fun-facts">
          <h3>By the Numbers</h3>
          <div className="facts-list">
            <div className="fact">
              <div className="number">5+</div>
              <div className="label">Years Experience</div>
            </div>
            <div className="fact">
              <div className="number">25+</div>
              <div className="label">Projects Completed</div>
            </div>
            <div className="fact">
              <div className="number">24/7</div>
              <div className="label">Learning Mode</div>
            </div>
          </div>
        </GlassCard>
        
        <div className="experience-section">
          <h2>Professional Experience</h2>
          
          <GlassCard intensity="medium" gradient={true} gradientType="warm" className="experience-item">
            <div className="company-header">
              <h4 className="company-name">Personal Development & Learning</h4>
              <span className="duration">2024-Present</span>
            </div>
            <h5 className="role-title">Independent Social Media Projects</h5>
            <ul className="description">
              <li>See <Link to="/projects">Projects</Link> for more details</li>
              <li>Currently focused on personal project development and continuous learning initiatives to expand technical capabilities</li>
              <li>Dedicated to staying current with industry trends and best practices through self-directed learning and hands-on experimentation</li>
            </ul>
          </GlassCard>

          <GlassCard intensity="medium" gradient={true} gradientType="primary" className="experience-item">
            <div className="company-header">
              <div className="company-info">
                <img src={GoogleLogo} alt="Google" className="company-logo" />
                <h4 className="company-name">Google (Contract: Vendor)</h4>
              </div>
              <span className="duration">2019-2024</span>
            </div>
            <h5 className="role-title">Chrome Enterprise Partners - Android Developer Advocate (2019 - 2023)</h5>
            <ul className="description">
              <li>Facilitated partner integration by building proof-of-concept MVP applications and providing technical guidance on Android Runtime Container integration with Chrome OS</li>
              <li>Conducted comprehensive graphics performance profiling for an education partner application serving 35+ million users, optimizing performance metrics and ensuring seamless user experience</li>
              <li>Collaborated with cross-functional partner teams to troubleshoot integration challenges and deliver technical solutions that enhanced Android app compatibility on Chrome OS platforms</li>
            </ul>
            <h5 className="role-title">Chrome OS Team - Device Testing & Feature Launch Specialist (2023-2024)</h5>
            <ul className="description">
              <li>Orchestrated comprehensive testing protocols across hundreds of Chromebook devices in the fleet, ensuring quality assurance standards and device compatibility</li>
              <li>Contributed to the successful launch of dozens of Chrome OS features, participating in the complete product development lifecycle from testing to deployment</li>
              <li>Implemented systematic testing methodologies that improved device reliability and enhanced user experience across the Chromebook ecosystem</li>
            </ul>
          </GlassCard>

          <GlassCard intensity="medium" gradient={true} gradientType="secondary" className="experience-item">
            <div className="company-header">
              <h4 className="company-name">Career Development & Personal Growth</h4>
              <span className="duration">2017-2018</span>
            </div>
            <h5 className="role-title">Strategic Professional Development Period</h5>
            <ul className="description">
              <li>Dedicated time to focused skill development and self-discovery initiatives that enhanced professional capabilities</li>
              <li>Developed leadership skills through community management and team coordination roles, managing diverse groups of 20-40 individuals across multiple time zones</li>
              <li>Cultivated expertise in strategic planning, conflict resolution, and remote team leadership while organizing complex, time-sensitive collaborative initiatives</li>
              <li>This intentional career pause provided valuable perspective and leadership experience that significantly enriched subsequent professional contributions</li>
            </ul>
          </GlassCard>

          <GlassCard intensity="medium" gradient={true} gradientType="warm" className="experience-item">
            <div className="company-header">
              <div className="company-info">
                <img src={MercedesLogo} alt="Mercedes-Benz" className="company-logo" />
                <h4 className="company-name">Mercedes-Benz (Contract)</h4>
              </div>
              <span className="duration">2015-2016</span>
            </div>
            <h5 className="role-title">AI Machine Learning Team (MLPUX) - Android Developer</h5>
            <ul className="description">
              <li>Maintained and enhanced a critical Android application supporting Mercedes-Benz's Predictive User Experience feature, which later evolved into the comprehensive MBUX (Mercedes-Benz User Experience) infotainment system</li>
              <li>Contributed to the development of advanced AI-driven user experience technologies that revolutionized automotive interface design and personalization capabilities</li>
              <li>Collaborated with machine learning engineers to integrate predictive algorithms into mobile applications, enhancing driver experience and system responsiveness</li>
            </ul>
          </GlassCard>

          <GlassCard intensity="medium" gradient={true} gradientType="cool" className="experience-item">
            <div className="company-header">
              <div className="company-info">
                <img src={SamsungLogo} alt="Samsung" className="company-logo" />
                <h4 className="company-name">Samsung Semiconductor Inc.</h4>
              </div>
              <span className="duration">2013-2015</span>
            </div>
            <h5 className="role-title">Quantitative Performance Testing Team - GPS Systems Developer</h5>
            <ul className="description">
              <li>Designed and developed a comprehensive Android GPS testing application featuring direct JNI interface integration with GPS system libraries, expanding testing capabilities following Samsung's acquisition of Cambridge Silicon Radio PLC in 2012</li>
              <li>Enhanced testing infrastructure to support Samsung's strategic initiative to develop proprietary GPS technologies, contributing to the company's goal of reducing dependency on third-party navigation solutions</li>
              <li>Implemented advanced testing protocols that improved GPS accuracy measurements and performance validation across diverse device configurations</li>
            </ul>
          </GlassCard>

          <GlassCard intensity="medium" gradient={true} gradientType="primary" className="experience-item">
            <div className="company-header">
              <div className="company-info">
                <img src={ProximicLogo} alt="Proximic" className="company-logo" />
                <h4 className="company-name">Proximic (Acquired by ComScore)</h4>
              </div>
              <span className="duration">2013</span>
            </div>
            <h5 className="role-title">Systems Administration Intern - Ad Serving Infrastructure</h5>
            <ul className="description">
              <li>Maintained critical network infrastructure and server uptime for high-speed ad serving algorithms during supervisor absences, ensuring zero downtime for revenue-generating systems</li>
              <li>Implemented comprehensive monitoring solutions using StatsD and Graphite, establishing real-time system performance tracking that improved operational visibility</li>
              <li>Supported mission-critical advertising technology infrastructure that processed high-volume ad serving requests with minimal latency</li>
            </ul>
          </GlassCard>
        </div>

        <div className="education-section">
          <h2>Education</h2>
          
          <RainbowGradientCard intensity="strong" gradient={true} className="education-item">
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
          </RainbowGradientCard>
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

export default HomePage; 