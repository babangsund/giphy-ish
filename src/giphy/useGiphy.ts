import React from 'react';
import { Cancelable } from 'lodash';
import throttle from 'lodash/throttle';

// project
import { Giphy } from './GiphyTypes';
import GiphyClient from './GiphyClient';

type Action = {
  items?: Array<Giphy>;
  type: 'Fetch' | 'Success' | 'Error';
};

type State = {
  isError: boolean;
  items: Array<Giphy>;
  isLoading: boolean;
};

function giphyReducer(state: State, action: Action): State {
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

function useGiphy(): [State, ((url: string) => void) & Cancelable, () => void] {
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
