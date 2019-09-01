import React from 'react';
import Card from 'react-bootstrap/Card';
import { H2, H4, Label } from './common/StyledComponents';

const CountryListItem = ({ country }) => {
  const code = country.code;
  return (
    // <div>
    <Card>
      <Card.Header>
        <H2>{country.name}</H2>
        {country.emoji}
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <Label>Native Spelling:</Label>
          <span>{country.native}</span>
        </Card.Text>
      </Card.Body>

      {/* <div className="workingDiv">
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
      <br /> */}
    </Card>
    // </div>
  );
};

export default CountryListItem;
