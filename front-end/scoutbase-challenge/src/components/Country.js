import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

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
          <div>
            <h4>{country.name}</h4>
            <span>In a Big Country....</span> <span>{match.params.id}</span>
          </div>
        );
      }}
    </Query>
  );
};

export default Country;
