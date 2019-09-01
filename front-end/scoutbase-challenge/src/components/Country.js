import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { H1, CountryNative, LeftDetail, Label, SectionHeading, CountryContianer } from './common/StyledComponents';

export const countryQuery = gql`
  query getCountry($code: String) {
    country(code: $code) {
      code
      name
      native
      phone
      continent {
        code
        name
      }
      currency
      languages {
        name
      }
      emoji
      emojiU
    }
  }
`;

const Country = ({ match }) => {
  const code = (match ? match.params.id || '' : '').toUpperCase();

  return (
    <Query query={countryQuery} variables={{ code }}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error</div>;
        const { country } = data;

        return (
          <>
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
              <SectionHeading>Languages:</SectionHeading>
            </CountryContianer>
          </>
        );
      }}
    </Query>
  );
};

export default Country;
