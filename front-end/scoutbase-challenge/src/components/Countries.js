import React from 'react';
import CountryListItem from './CountryListItem';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';


export const countryQuery = gql`
  {
    countries {
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

const Countries = (props) => {
  return (
    <>
      <div>
        <h1>Countries Component</h1>
      </div>
      <div>
        <Query query={countryQuery}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error</div>;

            const countriesToRender = data.countries;
            return (
              <div>
                {countriesToRender.map((country) => (
                  <CountryListItem key={country.name} country={country} />
                ))}
              </div>
            );
          }}
        </Query>
      </div>
    </>
  );
};

export default Countries;
