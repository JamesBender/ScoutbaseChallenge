import React from 'react';
import { render } from '@testing-library/react';
import Country from './Country';

describe('when working with the Country component', () => {
  let mainDiv;

  beforeAll(() => {
    const { getByText } = render(<Country />);
    mainDiv = getByText('In a Big Country....');
  });

  it('should render', () => {
    expect(mainDiv).not.toBeUndefined();
  });
});
