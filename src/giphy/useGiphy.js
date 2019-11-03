// @flow
import React from 'react';
import throttle from 'lodash/throttle';

// project
import GiphyClient from './GiphyClient';
import type { Giphy } from './GiphyTypes';

type Action = {
  items?: Array<Giphy>,
  type: 'Fetch' | 'Success' | 'Error',
};

type State = {
  items: Array<Giphy>,
  isLoading: boolean,
};

function giphyReducer(state: State, action: Action) {
  switch (action.type) {
    case 'Fetch':
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    case 'Error':
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case 'Success':
      return {
        ...state,
        isError: false,
        isLoading: false,
        items: action.items || [],
      };
    default:
      throw new Error(
        `[giphyReducer]: Invalid Action of type "${action.type}".`
      );
  }
}

function useGiphy() {
  const client = React.useRef(new GiphyClient());

  const [state, dispatch] = React.useReducer(giphyReducer, {
    items: [],
    isError: false,
    isLoading: false,
  });

  const fetchMore = React.useCallback(
    throttle(() => {
      client.current
        .fetchMore()
        .then(items => dispatch({ type: 'Success', items }));
    }, 100),
    []
  );

  const fetchQuery = React.useCallback(
    throttle((url: string) => {
      dispatch({ type: 'Fetch' });
      client.current
        .fetchQuery(url)
        .then(items => dispatch({ type: 'Success', items }))
        .catch(() => dispatch({ type: 'Error' }));
    }, 100),
    []
  );

  return [state, fetchQuery, fetchMore];
}

export default useGiphy;
