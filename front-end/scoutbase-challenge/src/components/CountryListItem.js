import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { H2, CountryNative, Label } from './common/StyledComponents';

const CountryListItem = ({ country, history }) => {
  const code = country.code;

  const goToCountry = () => {
    history.push(`/country/${code}`);
  };

  return (
    <Card>
      <Card.Header data-testid="countryCard" onClick={goToCountry}>
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

CountryListItem.propTypes = {
  country: PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    emoji: PropTypes.string,
    native: PropTypes.string,
  }),
};

export default CountryListItem;
