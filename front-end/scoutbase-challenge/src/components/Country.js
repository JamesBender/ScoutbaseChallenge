import React from 'react';
import PropTypes from 'prop-types';
import { countryQuery } from './common/queries';
import { Query } from 'react-apollo';
import { H1, H2, CountryNative, LeftDetail, Label, SectionHeading, CountryContianer } from './common/StyledComponents';
import Languages from './Languages';

const Country = ({ match }) => {
  const code = (match.params.id || '').toUpperCase();

  return (
    <Query query={countryQuery} variables={{ code }}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error</div>;
        const { country } = data;

        if (country) {
          return (
            <CountryContianer>
              <H1>{country.name}</H1>
              <div>
                <CountryNative>{country.native}</CountryNative> - <span>{country.emoji}</span>
              </div>
              <SectionHeading>Interesting Facts:</SectionHeading>
              <div>
                <LeftDetail>
                  <Label>Phone prefix:</Label>
                  <span>{country.phone}</span>
                </LeftDetail>
                <LeftDetail>
                  <Label>Continent:</Label>
                  <span>{country.continent.name}</span>
                </LeftDetail>
                <span>
                  <Label>Currency:</Label>
                  <span>{country.currency}</span>
                </span>
              </div>
              <Languages languages={country.languages}></Languages>
            </CountryContianer>
          );
        } else {
          return (
            <>
              <H1>
                Country with code <span>{code}</span> was not found.{' '}
              </H1>
              <H2>Please check your country code and try again.</H2>
            </>
          );
        }
      }}
    </Query>
  );
};

Country.propTypes = {
  country: PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    emoji: PropTypes.string,
    native: PropTypes.string,
    phone: PropTypes.string,
    currency: PropTypes.string,
    emojiU: PropTypes.string,
    continent: PropTypes.shape({
      name: PropTypes.string,
      code: PropTypes.string,
    }),
    languages: PropTypes.array,
  }),
};

export default Country;
