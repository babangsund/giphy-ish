import React from 'react';
import {
  DefaultTheme,
  ThemeProvider,
  createGlobalStyle,
} from 'styled-components';

type Props = {
  children?: React.ReactChild;
};

const FACTOR = 8;

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

const theme: DefaultTheme = {
  textColors,
  giphyColors,
  backgroundColor: '#121212',
  factor: (...args: number[]) => args.map(x => x * FACTOR + 'px').join(' '),
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

const StyleProvider: React.FC<Props> = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Style />
        {children}
      </>
    </ThemeProvider>
  );
};

export default StyleProvider;
