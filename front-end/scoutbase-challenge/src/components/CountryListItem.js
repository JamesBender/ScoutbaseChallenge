import React from 'react';

const CountryListItem = (props) => {  
  return (
    <div>
      <span>{props.country.name}</span> - <span>{props.country.phone}</span>
    </div>
  );
};

export default CountryListItem;
