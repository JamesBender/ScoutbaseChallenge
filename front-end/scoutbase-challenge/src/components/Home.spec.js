import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

const welcomeMessage = 'Welcome to the Scoutbase Front-end Challenge!';

describe('when using the Home component', () => {
  let component;

  beforeAll(() => {
    component = render(<Home />);
  });

  it('should have the welcome message', () => {
    expect(component.getByText(welcomeMessage)).not.toBeUndefined();
  });
});
