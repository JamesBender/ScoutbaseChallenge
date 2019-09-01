import React from 'react';
import { MemoryRouter, Link } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import Routes from './Routes';

const mockCountriesComponentMessage = 'Mock Countries Component';
const mockHomeComponentMessage = 'Mock Home Component';
const mockCountryCode = 'us';
const mockCountryList = `/country/${mockCountryCode}`;

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
        <Link to={mockCountryList}>Country Test</Link>
      </div>
    </MemoryRouter>
  );
};

const countryLinkLabel = 'Countries',
  homeLinkLabel = 'Home';

describe('when working with the routes component', () => {
  let component, countriesLink, homeLink, countryLink;

  beforeEach(() => {
    component = render(<RouteTestComponent />);
    countriesLink = component.getByText(countryLinkLabel);
    homeLink = component.getByText(homeLinkLabel);
    countryLink = component.getByText('Country Test');
  });

  it('should have a route for Countries', () => {
    expect(countriesLink).not.toBeUndefined();
  });

  it('should have a route for Home', () => {
    expect(homeLink).not.toBeUndefined();
  });

  it('should render (for test) with a link to test Country route (if this fails, its probably a problem with the test setup', () => {
    expect(countryLink).not.toBeUndefined();
  });

  it('clicking the Countries link should route to the Countries component', () => {
    fireEvent.click(countriesLink);
    expect(component.getByText(mockCountriesComponentMessage)).not.toBeUndefined();
  });

  it('clicking the Home Link should route to the Home component', () => {
    fireEvent.click(homeLink);
    expect(component.getByText(mockHomeComponentMessage)).not.toBeUndefined();
  });

  xit('should be able to navigate to the Country component', () => {
    fireEvent.click(countryLink);
    expect(component.getByText(mockCountryCode)).not.toBeUndefined();
  });
});
