import React from 'react';
import { render } from '@testing-library/react';
import Country from './Country';

describe('when working with the Country component', () => {
  let mainDiv;

  const match = {
    params: {
      id: 1,
    },
  };
  beforeAll(() => {
    const { getByText } = render(<Country match={match} />);
    mainDiv = getByText('In a Big Country....');
  });

  it('should render', () => {
    expect(mainDiv).not.toBeUndefined();
  });
});
