// jest-fetch-mock mocks automatically fetch calls
// learn more: https://www.npmjs.com/package/jest-fetch-mock
import fetchMock from 'jest-fetch-mock';

import { getAJoke } from '../u3/u3e1.js';

fetchMock.enableMocks();

describe('Testing promises', () => {

    const API_ENDPOINT = 'https://geek-jokes.sameerkumar.website/api?format=json';
    const API_OK_RESPONSE = 'Chuck Norris can unit test entire applications with a single assert.';
    const API_KO_RESPONSE = 'ERROR. API is down';

    beforeEach(() => {
        fetchMock.resetMocks();
    });

    test('Fetching data...', async () => {
        fetchMock.mockResponse(JSON.stringify({ joke: API_OK_RESPONSE }));

        const res = await getAJoke();

        expect(fetchMock.mock.calls.length).toEqual(1);
        expect(fetchMock.mock.lastCall[0]).toEqual(API_ENDPOINT);
        expect(res.joke).toBeDefined();
        expect(res.joke).toBe(API_OK_RESPONSE);
    });

    test('Fetching data with error', async () => {

        const callbackFn = (error) => {
            expect(fetch).toHaveBeenCalledWith(API_ENDPOINT);
            expect(error).toBe(API_KO_RESPONSE);
        };

        fetchMock.mockReject(() => Promise.reject(API_KO_RESPONSE));

        const res = await getAJoke(callbackFn);

      });
});
