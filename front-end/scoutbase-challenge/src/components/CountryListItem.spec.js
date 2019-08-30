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
    let component;
    beforeAll(() => {
      component = render(<CountryListItem key={mockCoutry.name} country={mockCoutry} />);
    });

    it('should display the name of the country', () => {
      // Please see Countries.spec.js for an explanation as to why there are
      // two expects in this test (for now)
      expect(component.getByText(mockCountryName)).not.toBeUndefined();
      expect(component.getByText(mockCountryPhone)).not.toBeUndefined();
    });

    xit('should display the phone of the country', () => {
      expect(component.getByText(mockCountryPhone)).not.toBeUndefined();
    });
  });
});
