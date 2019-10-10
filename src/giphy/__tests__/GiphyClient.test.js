// @flow
import GiphyClient from '../GiphyClient';

function mockResponse() {
  const response = {
    data: [{ id: '1' }],
    pagination: { total_count: 1 },
  };

  const jsonPromise = Promise.resolve(response);
  const fetchPromise = Promise.resolve({ json: () => jsonPromise });

  global.fetch = jest.fn().mockImplementationOnce(() => fetchPromise);
  return response;
}

beforeEach(() => {
  mockResponse();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('GiphyClient', () => {
  const client = new GiphyClient();

  it('Should send a fetch request', () => {
    return client.fetchQuery('').then(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });
  });

  it('Should return data from fetchQuery', () => {
    const response = mockResponse();
    return client.fetchQuery('').then(data => {
      expect(data).toStrictEqual(response.data);
    });
  });

  it('Should set hasMore to false when all data is fetched', async () => {
    await client.fetchQuery('');
    expect(client._hasMore).toBe(false);
  });
});
