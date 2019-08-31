import React from 'react';
import { H2, H4, Label } from './common/StyledComponents';

const CountryListItem = ({ country }) => {
  return (
    <div>
      <div className="workingDiv">
        <div className="countryName">
          <H2>
            <span>{country.name}</span> - {country.emoji}
          </H2>
          <H4>({country.code})</H4>
        </div>
        <div className="countryDetails">
          <Label>Phone:</Label>
          <span>{country.phone}</span>
          <br />
          <Label>Native Spelling:</Label>
          <span>{country.native}</span>
          <br />
        </div>
      </div>
      <div className="seperate"></div>
      <br />
    </div>
  );
};

export default CountryListItem;
