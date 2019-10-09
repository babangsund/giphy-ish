// @flow

// project
import type { GiphyResponse } from './GiphyTypes';

type CachedResponse = {|
  time: number,
  response: ?GiphyResponse,
|};

interface IGiphyCache {
  _responses: Map<string, CachedResponse>;
  +_ttl: number;

  get(string): ?GiphyResponse;
  set(string, ?GiphyResponse): void;
}

class GiphyCache implements IGiphyCache {
  _responses: Map<string, CachedResponse>;
  +_ttl: number;

  constructor() {
    this._ttl = 1000 * 60;
    this._responses = new Map();
  }

  get(url: string) {
    const now = Date.now();

    this._responses.forEach((response, cacheKey) => {
      if (now > response.time + this._ttl) {
        this._responses.delete(cacheKey);
      }
    });

    const response = this._responses.get(url);
    return response ? response.response : null;
  }

  set(url: string, response: ?GiphyResponse) {
    const time = Date.now();

    this._responses.delete(url);
    this._responses.set(url, {
      time,
      response,
    });
  }
}

/* Exported as singleton */
export default new GiphyCache();
