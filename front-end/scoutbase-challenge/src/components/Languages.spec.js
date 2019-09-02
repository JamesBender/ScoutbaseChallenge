import React from 'react';
import { render } from '@testing-library/react';
import Languages from './Languages';

const mockLanguageOne = 'test 1',
  mockLanguageTwo = 'test 2',
  mockLanguageList = [{ name: mockLanguageOne }, { name: mockLanguageTwo }];

describe('when working with the Languages component', () => {
  describe('and passing it an array of languages', () => {
    let component, languageList, languageOne, languageTwo;
    beforeAll(() => {
      component = render(<Languages languages={mockLanguageList} />);
      languageList = component.getByTestId('languageList');
      languageOne = component.getByText(mockLanguageOne);
      languageTwo = component.getByText(mockLanguageTwo);
    });

    it('should render a list of languages', () => {
      expect(languageList).not.toBeUndefined();
    });

    it('should have the first language in the list', () => {
      expect(languageOne).not.toBeUndefined();
    });

    it('should have the second language in the list', () => {
      expect(languageTwo).not.toBeUndefined();
    });
  });

  describe('and passing it an array of languages', () => {
    let component, languageList;
    beforeAll(() => {
      component = render(<Languages languages={[]} />);
      languageList = component.getByTestId('languageList');
    });

    it('should render a list of languages', () => {
      expect(languageList).not.toBeUndefined();
    });
  });
});
