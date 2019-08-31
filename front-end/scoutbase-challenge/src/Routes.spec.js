import React from 'react';
import { MemoryRouter, Link } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import Routes from './Routes';

const mockCountriesComponentMessage = 'Mock Countries Component';
const mockHomeComponentMessage = 'Mock Home Component';

jest.mock('./components/Countries', () => () => {
  return <div>{mockCountriesComponentMessage}</div>;
});

jest.mock('./components/Home', () => () => {
  return <div>{mockHomeComponentMessage}</div>;
});

const RouteTestComponent = (props) => {
  return (
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <div>
        <Routes props={props} />
      </div>
    </MemoryRouter>
  );
};

const countryLinkLabel = 'Countries',
  homeLinkLabel = 'Home';

describe('when working with the routes component', () => {
  let component, countriesLink, homeLink;

  beforeEach(() => {
    component = render(<RouteTestComponent />);
    countriesLink = component.getByText(countryLinkLabel);
    homeLink = component.getByText(homeLinkLabel);
  });

  it('should have a route for Countries', () => {
    expect(countriesLink).not.toBeUndefined();
  });

  it('should have a route for Home', () => {
    expect(homeLink).not.toBeUndefined();
  });

  it('clicking the Countries link should route to the Countries component', () => {
    fireEvent.click(countriesLink);
    expect(component.getByText(mockCountriesComponentMessage)).not.toBeUndefined();
  });

  it('clicking the Home Link should route to the Home component', () => {
    fireEvent.click(homeLink);
    expect(component.getByText(mockHomeComponentMessage)).not.toBeUndefined();
  });
});
