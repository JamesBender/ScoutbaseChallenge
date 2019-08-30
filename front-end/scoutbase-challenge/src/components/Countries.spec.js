import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, act } from '@testing-library/react';
import wait from 'waait';
import Countries, { countryQuery } from './Countries';

const mockCountryName = 'sample country';
const mocks = [
  {
    request: {
      query: countryQuery,
      vairables: {},
    },
    result: {
      data: {
        countries: [{ name: mockCountryName }],
      },
    },
  },
];

describe('when working with the countries component', () => {
  describe('and the component is loading', () => {
    let component;

    beforeAll(async (done) => {
      await act(async () => {
        component = render(
          <MockedProvider mocks={[]}>
            <Countries />
          </MockedProvider>
        );
        // This test should NOT be here! But, right now I'm having trouble getting it
        // to pass if it's not here. It seems the MockedProvider is not being rendered
        // as a "snapshot" in it's loading phase. Working on moving this, but for
        // now I guess it has to be here...
        expect(component.getByText('Loading...')).not.toBeUndefined();
      });
      done();
    });

    it('should have a title', () => {
      expect(component.getByText('Countries Component')).not.toBeUndefined();
    });

    xit('should have a loading status', () => {
      // Re-add this test once I figure out what's going on with render
      expect(component.getByText('Loading...')).not.toBeUndefined();
    });
  });

  describe('and the component has data', () => {
    let component;

    beforeAll(async (done) => {
      await act(async () => {
        component = render(
          <MockedProvider mocks={mocks} addTypename={false}>
            <Countries />
          </MockedProvider>
        );
        await wait(0);
      });
      done();
    });

    it('should have a title', () => {
      // This should NOT have both of these test here, but the component
      // seem to be "un-rendering" between each it call, which makes no sense.
      // I'm working on figuring out what's going on, but for now this test
      // has to look like this.
      expect(component.getByText('Countries Component')).not.toBeUndefined();
      expect(component.getByText(mockCountryName)).not.toBeUndefined();
    });

    xit('should have a loading status', () => {
      // See note if test above
      expect(component.getByText(mockCountryName)).not.toBeUndefined();
    });
  });
});
