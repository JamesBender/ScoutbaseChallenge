import React from 'react';
import PropTypes from 'prop-types';
import { SectionHeading, DetailSection } from './common/StyledComponents';

const Languages = ({ languages }) => {
  
  return (
    <div>
      <SectionHeading>Languages:</SectionHeading>
      <DetailSection>
        <ul data-testid="languageList">
          {languages.map((language) => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
      </DetailSection>
    </div>
  );
};

Languages.propTypes = {
  languages: PropTypes.array,
};

export default Languages;
