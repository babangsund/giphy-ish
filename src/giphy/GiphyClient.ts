// project
import GiphyCache from './GiphyCache';
import { Giphy, GiphyResponse } from './GiphyTypes';
import { API_KEY, BASE_URL_GIPHY } from '../Constants';

interface GiphyClient {
  _query: string;
  _first: number;
  _after: number;
  _hasMore: boolean;
  _data: Array<Giphy>;

  fetchQuery(query: string): Promise<Array<Giphy>>;
  fetchMore(): Promise<Array<Giphy>>;
}

class GiphyClient implements GiphyClient {
  _data: Array<Giphy>;
  _query: string;
  _first: number;
  _after: number;
  _hasMore: boolean;

  constructor() {
    this._data = [];
    this._query = '';
    this._first = 21;
    this._after = 0;
    this._hasMore = false;
  }

  /**
   * Public method for fetching gifs with a query parameter.
   */
  async fetchQuery(query: string): Promise<Array<Giphy>> {
    this._query = query;
    this._after = 0;
    this._data = [];

    await this._getData();
    return this._data;
  }

  /**
   * Public method for fetching more gifs,
   * using pagination and caching to normalize the response.
   */
  async fetchMore(): Promise<Array<Giphy>> {
    if (!this._hasMore) return this._data;
    this._after += this._first;

    await this._getData();
    return this._data;
  }

  async _getData(): Promise<Array<Giphy>> {
    const queryBefore = this._query.slice();
    const request = this._maybeFetch();
    const response = await request;
    const queryAfter = this._query.slice();

    if (response && queryBefore === queryAfter) {
      this._data.push(...response.data);

      if (response.pagination.total_count <= this._data.length) {
        this._hasMore = false;
      } else {
        this._hasMore = true;
      }
    }

    return this._data;
  }

  async _maybeFetch(): Promise<GiphyResponse> {
    const url = this._giphyUrl();

    const cachedResponse = GiphyCache.get(url);
    if (cachedResponse) return cachedResponse;

    const serverResponse = await this._doFetch();
    return serverResponse;
  }

  async _doFetch(): Promise<GiphyResponse> {
    const url = this._giphyUrl();
    let serverResponse;

    try {
      serverResponse = await fetch(url).then(r => r.json());
    } catch {
      serverResponse = null;
    } finally {
      GiphyCache.set(url, serverResponse);
    }

    return serverResponse;
  }

  _giphyUrl(): string {
    const { _query, _first, _after } = this;
    return [
      BASE_URL_GIPHY,
      '/search?lang=en',
      `&q=${_query}`,
      `&limit=${_first}`,
      `&offset=${_after}`,
      `&api_key=${API_KEY}`,
    ].join('');
  }
}

export default GiphyClient;
