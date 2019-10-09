// @flow
import React from 'react';

export function useBool(initialBool: boolean = false) {
  const [bool, setBool] = React.useState(initialBool);
  return [
    bool,
    React.useCallback(() => setBool(true), []),
    React.useCallback(() => setBool(false), []),
  ];
}
