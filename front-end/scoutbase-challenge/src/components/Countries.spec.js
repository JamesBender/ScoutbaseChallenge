import React from 'react';
import { render } from '@testing-library/react';
import Countries from './Countries';

test('verify component can be created', () => {
  const { getByText } = render(<Countries />);
  const myDiv = getByText('Countries Component');
  expect(myDiv).not.toBeUndefined();
});
