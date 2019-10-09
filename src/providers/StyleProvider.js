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

const giphyColors = {
  cyan: 'rgb(0, 204, 255)',
  purple: 'rgb(97, 87, 255)',
  pink: 'rgb(153, 51, 255)',
  orange: 'rgb(255, 102, 102)',
};

const theme = {
  textColors,
  giphyColors,
  backgroundColor: '#121212',
  getRandomColor: function getRandomColor() {
    const colorValues = Object.values(this.giphyColors);
    return colorValues[Math.floor(Math.random() * colorValues.length)];
  },
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
