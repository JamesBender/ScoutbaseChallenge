import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, act } from '@testing-library/react';
import wait from 'waait';
import { mockCountryName, countryListMockQuery } from '../../mocks/Countries.mocks';
import Countries from './Countries';

const mockPageTitle = 'Countries Component',
  mockLoadingMessage = 'Loading...';

describe('when working with the countries component', () => {
  describe('and the component is loading', () => {
    let component, pageTitle, loadingMessage;

    beforeAll(async (done) => {
      await act(async () => {
        component = render(
          <MockedProvider mocks={[]}>
            <Countries />
          </MockedProvider>
        );
        pageTitle = component.getByText(mockPageTitle);
        loadingMessage = component.getByText(mockLoadingMessage);
      });
      done();
    });

    it('should have a title', () => {
      expect(pageTitle).not.toBeUndefined();
    });

    it('should have a loading status', () => {
      expect(loadingMessage).not.toBeUndefined();
    });
  });

  describe('and the component has data', () => {
    let component, pageTitle, countryName;

    beforeAll(async (done) => {
      await act(async () => {
        component = render(
          <MockedProvider mocks={countryListMockQuery} addTypename={false}>
            <Countries />
          </MockedProvider>
        );
        await wait(0);
      });
      pageTitle = component.getByText(mockPageTitle);
      countryName = component.getByText(mockCountryName);
      done();
    });

    it('should have a title', () => {
      expect(pageTitle).not.toBeUndefined();
    });

    it('should have a loading status', () => {
      expect(countryName).not.toBeUndefined();
    });
  });
});
