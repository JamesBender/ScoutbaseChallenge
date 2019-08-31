import React from 'react';
import { render } from '@testing-library/react';
import CountryListItem from './CountryListItem';

const mockCountryName = 'sample country',
  mockCountryPhone = '123-4567';
const mockCoutry = {
  name: mockCountryName,
  phone: mockCountryPhone,
};

describe('when working with country list time', () => {
  describe('and the component has a country', () => {
    let component, countryName, countryPhone;
    beforeAll(() => {
      component = render(<CountryListItem key={mockCoutry.name} country={mockCoutry} />);
      countryName = component.getByText(mockCountryName);
      countryPhone = component.getByText(mockCountryPhone);
    });

    it('should display the name of the country', () => {
      expect(countryName).not.toBeUndefined();
    });

    it('should display the phone of the country', () => {
      expect(countryPhone).not.toBeUndefined();
    });
  });
});
