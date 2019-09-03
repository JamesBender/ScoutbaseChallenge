import React from 'react';
import wait from 'waait';
import { MockedProvider } from '@apollo/react-testing';
import { render, act } from '@testing-library/react';
import * as Mock from '../../mocks/Country.mocks';
import Country from './Country';

const mockLoadingMessage = 'Loading...';

describe('when working with the Country component', () => {
  describe('and the component has data', () => {
    let component, countryName, countryNative, countryPhone, countryContinent, countryCurrency, countryEmoji;

    beforeAll(async (done) => {
      await act(async () => {
        component = render(
          <MockedProvider mocks={Mock.countryMockQuery} addTypename={false}>
            <Country match={{ params: { id: Mock.mockCountryCode } }} />
          </MockedProvider>
        );
        await wait(0);
      });

      countryName = component.getByText(Mock.mockCountryName);
      countryNative = component.getByText(Mock.mockCountryNative);
      countryPhone = component.getByText(Mock.mockCountryPhone);
      countryContinent = component.getByText(Mock.mockCountryContinent.name);
      countryCurrency = component.getByText(Mock.mockCountryCurrency);
      countryEmoji = component.getByText(Mock.mockCountryEmoji);
      done();
    });

    it('should display the country name', () => {
      expect(countryName).not.toBeUndefined();
    });

    it('should display the native name', () => {
      expect(countryNative).not.toBeUndefined();
    });

    it('should display the phone', () => {
      expect(countryPhone).not.toBeUndefined();
    });

    it('should display the continent name', () => {
      expect(countryContinent).not.toBeUndefined();
    });

    it('should display the currency', () => {
      expect(countryCurrency).not.toBeUndefined();
    });

    it('should display the emoji', () => {
      expect(countryEmoji).not.toBeUndefined();
    });
  });

  describe('and the country code was passed as lower case', () => {
    let component,
      countryName,
      lowerCaseCountryCode = Mock.mockCountryCode.toLowerCase();

    beforeAll(async (done) => {
      await act(async () => {
        component = render(
          <MockedProvider mocks={Mock.countryMockQuery} addTypename={false}>
            <Country match={{ params: { id: lowerCaseCountryCode } }} />
          </MockedProvider>
        );
        await wait(0);
      });

      countryName = component.getByText(Mock.mockCountryName);
      done();
    });

    it('should display the country name', () => {
      expect(countryName).not.toBeUndefined();
    });
  });

  describe('and an invalid country code was passed ', () => {
    let component,
      countryCode,
      countryErrorMessage,
      badCountryCode = 'SC',
      errorMessage = 'Please check your country code and try again.';

    beforeAll(async (done) => {
      await act(async () => {
        component = render(
          <MockedProvider mocks={Mock.countryMockEmptyQuery} addTypename={false}>
            <Country match={{ params: { id: badCountryCode } }} />
          </MockedProvider>
        );
        await wait(0);
      });

      countryCode = component.getByText(badCountryCode);
      countryErrorMessage = component.getByText(errorMessage);
      done();
    });

    it('should display the country name', () => {
      expect(countryCode).not.toBeUndefined();
    });

    it('should display the error message', () => {
      expect(countryErrorMessage).not.toBeUndefined();
    });
  });

  describe('and the component is loading', () => {
    let component, pageTitle, loadingMessage;

    beforeAll(async (done) => {
      await act(async () => {
        component = render(
          <MockedProvider mocks={[]}>
            <Country match={{ params: {} }} />
          </MockedProvider>
        );

        loadingMessage = component.getByText(mockLoadingMessage);
      });
      done();
    });

    it('should have a loading status', () => {
      expect(loadingMessage).not.toBeUndefined();
    });
  });
});
