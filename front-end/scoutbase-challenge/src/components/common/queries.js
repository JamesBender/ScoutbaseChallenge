import gql from 'graphql-tag';

export const countryListQuery = gql`
  {
    countries {
      code
      name
      native
      emoji
    }
  }
`;

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
