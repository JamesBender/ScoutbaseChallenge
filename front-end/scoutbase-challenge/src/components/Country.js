import React from 'react';

// export const countryQuery = gql`
//   {
//     countries {
//       code
//       name
//       native
//       phone
//       continent {
//         code
//         name
//       }
//       currency
//       languages {
//         name
//       }
//       emoji
//       emojiU
//     }
//   }
// `;

const Country = ({ match }) => {
  return (
    <div>
      <span>In a Big Country....</span> <span>{match.params.id}</span>
    </div>
  );
};

export default Country;
