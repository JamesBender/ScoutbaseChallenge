import React from 'react';
import Card from 'react-bootstrap/Card';
import { Route } from 'react-router-dom';
import { H2, CountryNative, Label } from './common/StyledComponents';

const CountryListItem = ({ country }) => {
  const code = country.code;

  return (
    <Route
      render={({ history }) => (
        <Card
          onClick={() => {
            history.push(`/country/${code}`);
          }}
        >
          <Card.Header>
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
      )}
    />
  );
};

export default CountryListItem;
