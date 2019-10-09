// @flow
import React from 'react';
import type { Node } from 'react';

// project
import StyleProvider from './StyleProvider';

type Props = {
  children?: Node,
};

function Providers(props: Props) {
  return <StyleProvider>{props.children}</StyleProvider>;
}

export default Providers;
