import React from 'react';
import wait from 'waait';
import { MockedProvider } from '@apollo/react-testing';
import { render, act } from '@testing-library/react';
import { countryMockQuery, mockCountryName, mockCountryCode } from '../../mocks/Country.mocks';
import Country from './Country';

const mockLoadingMessage = 'Loading...';

describe('when working with the Country component', () => {
  describe('and the component has data', () => {
    let component, countryName;

    beforeAll(async (done) => {
      await act(async () => {
        component = render(
          <MockedProvider mocks={countryMockQuery} addTypename={false}>
            <Country match={{ params: { id: mockCountryCode } }} />
          </MockedProvider>
        );
        await wait(0);
      });

      countryName = component.getByText(mockCountryName);
      done();
    });

    it('should display the country name', () => {
      expect(countryName).not.toBeUndefined();
    });
  });

  describe('and the country code was passed as lower case', () => {
    let component,
      countryName,
      lowerCaseCountryCode = mockCountryCode.toLowerCase();

    beforeAll(async (done) => {
      await act(async () => {
        component = render(
          <MockedProvider mocks={countryMockQuery} addTypename={false}>
            <Country match={{ params: { id: lowerCaseCountryCode } }} />
          </MockedProvider>
        );
        await wait(0);
      });

      countryName = component.getByText(mockCountryName);
      done();
    });

    it('should display the country name', () => {
      expect(countryName).not.toBeUndefined();
    });
  });

  describe('and the component is loading', () => {
    let component, pageTitle, loadingMessage;

    beforeAll(async (done) => {
      await act(async () => {
        component = render(
          <MockedProvider mocks={[]}>
            <Country />
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
