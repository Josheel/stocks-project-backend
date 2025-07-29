export interface RawSearchResult {
    '1. symbol': string;
    '2. name': string;
    '3. type': string;
    '4. region': string;
    '5. marketOpen': string;
    '6. marketClose': string;
    '7. timezone' : string;
    '8. currency': string;
    '9. matchScore': string;
}

export interface SearchResult {
    symbol: string;
    name: string;
    type: string;
    region: string;
    marketOpen: string;
    marketClose: string;
    timezone: string;
    currency: string;
    matchScore: string;
}

export function normalizeSearchResult(searchResult: RawSearchResult): SearchResult {
  return {
    symbol: searchResult["1. symbol"],
    name: searchResult["2. name"],
    type: searchResult["3. type"],
    region: searchResult["4. region"],
    marketOpen: searchResult["5. marketOpen"],
    marketClose: searchResult["6. marketClose"],
    timezone: searchResult["7. timezone"],
    currency: searchResult["8. currency"],
    matchScore: searchResult["9. matchScore"]
  };
}

export function normalizeSearchResults(searchResults: RawSearchResult[]): SearchResult[] {
  return searchResults.map(normalizeSearchResult);
}

