import React from 'react';
import PropTypes from 'prop-types';
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
      emoji
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
                  <CountryListItem key={country.name} {...props} country={country} />
                ))}
              </CardColumns>
            );
          }}
        </Query>
      </div>
    </>
  );
};

Countries.propTypes = {
  countriesToRender: PropTypes.shape({
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
    languages: PropTypes.arrayOf(PropTypes.string),
  }),
};
export default Countries;
