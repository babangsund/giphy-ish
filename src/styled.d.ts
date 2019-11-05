import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    textColors: {
      white: string;
      black: string;
    };
    giphyColors: {
      cyan: string;
      purple: string;
      pink: string;
      orange: string;
    };
    backgroundColor: string;
    factor: (...args: number[]) => string;
    getRandomColor: () => string;
  }
}
