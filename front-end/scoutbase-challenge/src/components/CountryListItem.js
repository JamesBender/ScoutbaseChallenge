import React from 'react';

const CountryListItem = ({ country }) => {
  return (
    <div>
      <div>
        <span>{country.name}</span> - <span>{country.phone}</span> - {country.code} - {country.native} -
        {country.continent.code} - {country.continent.name} - {country.currency} - {country.languages.name}-{' '}
        {country.emoji} - {country.emojiU}
      </div>
      <br />
    </div>
  );
};

export default CountryListItem;
