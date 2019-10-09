// @flow
import React from 'react';

// project
import type { Ref } from './types';

export function useBool(initialBool: boolean = false) {
  const [bool, setBool] = React.useState(initialBool);
  return [
    bool,
    React.useCallback(() => setBool(true), []),
    React.useCallback(() => setBool(false), []),
  ];
}

export function useInfiniteScroll(triggerRef: Ref, onTrigger: void => void) {
  const observer = React.useRef(null);
  const prevY = React.useRef(null);

  React.useLayoutEffect(() => {
    function callback(entities) {
      const nextY = entities[0].boundingClientRect.y;

      if (prevY.current !== null && prevY.current > nextY) {
        onTrigger();
      }

      prevY.current = nextY;
    }

    const options = {
      root: null,
      threshold: 1.0,
      rootMargin: '0px',
    };

    observer.current = new IntersectionObserver(callback, options);
    if (triggerRef.current) observer.current.observe(triggerRef.current);
  }, [onTrigger, triggerRef]);
}
