import React from 'react';
import PropTypes from 'prop-types';

const Languages = ({ languages }) => {
  return <div>{languages} go here</div>;
};

Languages.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string),
};

export default Languages;
