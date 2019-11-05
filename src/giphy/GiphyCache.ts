// project
import { GiphyResponse } from './GiphyTypes';

type CachedResponse = {
  time: number;
  response: GiphyResponse | null;
};

interface GiphyCache {
  _responses: Map<string, CachedResponse>;
  _ttl: number;

  get(url: string): GiphyResponse | null;
  set(url: string, response: GiphyResponse | null): void;
}

class GiphyCache implements GiphyCache {
  _responses: Map<string, CachedResponse>;
  _ttl: number;

  constructor() {
    this._ttl = 1000 * 60 * 3;
    this._responses = new Map();
  }

  get(url: string): GiphyResponse | null {
    const now = Date.now();

    this._responses.forEach((response, cacheKey) => {
      if (now > response.time + this._ttl) {
        this._responses.delete(cacheKey);
      }
    });

    const response = this._responses.get(url);
    return response ? response.response : null;
  }

  set(url: string, response: GiphyResponse | null): void {
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
