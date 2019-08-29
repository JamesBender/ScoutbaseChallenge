import React from 'react';
import { MemoryRouter, Link } from 'react-router-dom';
import { render } from '@testing-library/react';
import Routes from './Routes';

const RouteTestComponent = (props) => {
  return (
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <div>
        <Routes props={props} />
        <Link to="/countries">Countries</Link>
      </div>
    </MemoryRouter>
  );
};

test('should be able to render the routes component', () => {
  const { getByText } = render(<RouteTestComponent />);
  const countriesLink = getByText('Countries');
  expect(countriesLink).not.toBeUndefined();
});
