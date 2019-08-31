import React from 'react';
import { render } from '@testing-library/react';
import { mockCountry, mockCountryName, mockCountryNative } from '../../mocks/CountryListItem.mocks';
import CountryListItem from './CountryListItem';

describe('when working with country list time', () => {
  describe('and the component has a country', () => {
    let component, countryName, countryNative;
    beforeAll(() => {
      component = render(<CountryListItem key={mockCountry.name} country={mockCountry} />);
      countryName = component.getByText(mockCountryName);
      countryNative = component.getByText(mockCountryNative);
    });

    it('should display the name of the country', () => {
      expect(countryName).not.toBeUndefined();
    });

    it('should display the phone of the country', () => {
      expect(countryNative).not.toBeUndefined();
    });
  });
});
