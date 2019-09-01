import { countryQuery } from '../src/components/Countries';

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

export const countryListMockQuery = [
  {
    request: {
      query: countryQuery,
      vairables: {},
    },
    result: {
      data: {
        countries: [
          {
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
        ],
      },
    },
  },
];