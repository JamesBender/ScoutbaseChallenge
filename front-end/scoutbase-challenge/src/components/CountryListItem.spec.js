import React from 'react';
import { render } from '@testing-library/react';
import { mockCountry, mockCountryName, mockCountryPhone } from '../../mocks/CountryListItem.mocks';
import CountryListItem from './CountryListItem';

describe('when working with country list time', () => {
  describe('and the component has a country', () => {
    let component, countryName, countryPhone;
    beforeAll(() => {
      component = render(<CountryListItem key={mockCountry.name} country={mockCountry} />);
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
