// @flow
import GiphyCache from '../GiphyCache';

describe('GiphyCache', () => {
  const cacheKey = 'cacheKey;';
  const giphyResponse = {
    data: [],
    meta: {
      msg: '',
      status: 200,
      response_id: '',
    },
    pagination: {
      count: 0,
      offset: 0,
      total_count: 0,
    },
  };

  it('Should be empty', () => {
    expect(() => GiphyCache._responses.size === 0);
  });

  it('Should be able to set response', () => {
    expect(() => GiphyCache.set(cacheKey, giphyResponse));
  });

  it('Should be able to set null response', () => {
    expect(() => GiphyCache.set(cacheKey, null));
  });

  it('Should be able to get response', () => {
    GiphyCache.set(cacheKey, giphyResponse);
    expect(GiphyCache.get(cacheKey)).toBe(giphyResponse);
  });

  it('Should return null for invalid cache key', () => {
    expect(GiphyCache.get('invalid')).toBe(null);
  });
  it('Should delete old responses', () => {
    (Date: any).now = jest.fn(() => +new Date('2015-03-25T12:00:00Z'));
    GiphyCache.set(cacheKey, giphyResponse);
    (Date: any).now = jest.fn(() => +new Date('2015-03-25T12:05:00Z'));
    expect(GiphyCache.get(cacheKey)).toBe(null);
  });
});
