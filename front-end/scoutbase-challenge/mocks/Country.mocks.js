import { countryQuery } from '../src/components/common/queries';

export const mockCountryName = 'sample country',
  mockCountryCode = 'SC',
  mockCountryNative = 'sample native',
  mockCountryPhone = '123',
  mockCountryContinent = { code: 'EU', name: 'Europe' },
  mockCountryCurrency = 'EUR',
  mockCountryLanguages = [{ name: 'English' }],
  mockCountryEmoji = '👍',
  mockCountyEmojiU = 'I dont know what this is',
  mockPageTitle = 'Countries Component',
  mockLoadingMessage = 'Loading...';

export const countryMockQuery = [
  {
    request: {
      query: countryQuery,
      variables: { code: 'SC' },
    },
    result: {
      data: {
        country: {
          code: mockCountryCode,
          name: mockCountryName,
          native: mockCountryNative,
          phone: mockCountryPhone,
          continent: mockCountryContinent,
          currency: mockCountryCurrency,
          languages: mockCountryLanguages,
          emoji: mockCountryEmoji,
          emojiU: mockCountyEmojiU,
        },
      },
    },
  },
];

export const countryMockEmptyQuery = [
  {
    request: {
      query: countryQuery,
      variables: { code: 'SC' },
    },
    result: {
      data: {   
        country: null     
      },
    },
  },
];
