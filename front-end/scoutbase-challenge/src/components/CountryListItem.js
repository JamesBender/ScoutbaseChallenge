import React from 'react';
import Card from 'react-bootstrap/Card';
import { H2, CountryNative, Label } from './common/StyledComponents';

const CountryListItem = ({ country, history }) => {
  const code = country.code;

  const goToCountry = () => {
    history.push(`/country/${code}`);
  };

  return (
    <Card>
      <Card.Header onClick={goToCountry}>
        <H2>{country.name}</H2>
        <span>{country.emoji}</span>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <Label>Native Spelling:</Label>
          <CountryNative>
            <span>{country.native}</span>
          </CountryNative>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CountryListItem;
