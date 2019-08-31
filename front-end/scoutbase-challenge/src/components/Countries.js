import React from 'react';
import CountryListItem from './CountryListItem';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import CardColumns from 'react-bootstrap/CardColumns';

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
        <h1>Countries</h1>
      </div>
      <div className="cardContainer">
        <Query query={countryQuery}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error</div>;

            const countriesToRender = data.countries;
            return (
              <CardColumns>
                {countriesToRender.map((country) => (
                  <CountryListItem key={country.name} country={country} />
                ))}
              </CardColumns>
            );
          }}
        </Query>
      </div>
    </>
  );
};

export default Countries;
