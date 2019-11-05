import React from 'react';

type OnTrigger = () => void;

export function useBool(
  initialBool = false
): [boolean, () => void, () => void] {
  const [bool, setBool] = React.useState(initialBool);
  return [
    bool,
    React.useCallback(() => setBool(true), []),
    React.useCallback(() => setBool(false), []),
  ];
}

export function useInfiniteScroll(
  triggerRef: React.RefObject<HTMLElement>,
  onTrigger: OnTrigger
): void {
  const observer = React.useRef<IntersectionObserver | null>(null);
  const prevY = React.useRef<number | null>(null);

  React.useLayoutEffect(() => {
    function callback(entities: IntersectionObserverEntry[]): void {
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
