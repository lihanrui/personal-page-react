import React from 'react';
import { Link } from 'react-router-dom';
import { cardStyles, companyHeaderStyles, companyLogoStyles } from '../lib/style/Components';

const ExperienceItem = ({ experience }) => {
  const { company, duration, roles } = experience;

  return (
    <div css={cardStyles} className="experience-item">
      <div css={companyHeaderStyles}>
        {company.logo ? (
          <div className="company-info">
            <img src={company.logo} alt={company.alt} css={companyLogoStyles} />
            <h4 className="company-name">{company.name}</h4>
          </div>
        ) : (
          <h4 className="company-name">{company.name}</h4>
        )}
        <span className="duration">{duration}</span>
      </div>

      {roles.map((role, index) => (
        <div key={index}>
          <h5 className="role-title">{role.title}</h5>
          <ul className="description">
            {role.description.map((item, itemIndex) => (
              <li key={itemIndex}>
                {item.includes('See Projects') ? (
                  <>
                    See <Link to="/projects">Projects</Link>
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
  );
};

export default ExperienceItem;
