import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { mockCountry, mockCountryName, mockCountryNative } from '../../mocks/CountryListItem.mocks';
import CountryListItem from './CountryListItem';

const mockHistory = {
  push: jest.fn((url) => {
    return;
  }),
};

describe('when working with country list time', () => {
  describe('and the component has a country', () => {
    let component, countryName, countryNative, countryCard;

    beforeEach(() => {
      component = render(<CountryListItem key={mockCountry.name} history={mockHistory} country={mockCountry} />);
      countryName = component.getByText(mockCountryName);
      countryNative = component.getByText(mockCountryNative);
      countryCard = component.getByTestId('countryCard');
    });

    it('should display the name of the country', () => {
      expect(countryName).not.toBeUndefined();
    });

    it('should display the phone of the country', () => {
      expect(countryNative).not.toBeUndefined();
    });

    it('should redirect to the country when the card is clicked', () => {
      fireEvent.click(countryCard);
      expect(mockHistory.push).toHaveBeenCalledTimes(1);
    });
  });
});
