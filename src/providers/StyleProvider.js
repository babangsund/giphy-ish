// @flow
import React from 'react';
import type { Node } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

type Props = {
  children?: Node,
};

const textColors = {
  white: '#fff',
  black: '#333',
};

const theme = {
  textColors,
  backgroundColor: '#121212',
};

const Style = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    color: ${p => p.theme.textColors.white};
    background-color: ${p => p.theme.backgroundColor};
    font-family: "Helvetica Neue", helvetica, sans-serif;
  }
`;

function StyleProvider({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Style />
      {children}
    </ThemeProvider>
  );
}

export default StyleProvider;
