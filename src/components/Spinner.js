// @flow
import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
    to {
      transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  &::before {
    top: 50%;
    left: 50%;
    content: '';
    position: absolute;
    border-radius: 50%;
    box-sizing: border-box;
    border: 2px solid ${p => p.theme.giphyColors.cyan};
    border-top-color: ${p => p.theme.giphyColors.pink};
    border-right-color: ${p => p.theme.giphyColors.purple};
    border-bottom-color: ${p => p.theme.giphyColors.orange};
    ${({ size = 3, theme }) => {
      const fSize = theme.factor(size);
      const hfSize = theme.factor(size / 2);
      return css`
        width: ${fSize};
        height: ${fSize};
        margin-top: -${hfSize};
        margin-left: -${hfSize};
      `;
    }}
    animation: ${rotate} 0.6s linear infinite;
  }
`;

export default Spinner;
