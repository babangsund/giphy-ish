// @flow
import React from 'react';
import styled, { ThemeContext } from 'styled-components';

// project
import type { Giphy } from '../giphy/GiphyTypes';
import { formatRelative } from '../utils/datetime';

type Props = {
  item: Giphy,
};

const Container = styled.article`
  height: 0;
  width: 100%;
  position: relative;
  padding-bottom: 100%;
  margin-bottom: ${p => p.theme.factor(6)};
`;

const DropBox = styled.div`
  background-color: ${p => p.color};
  height: ${p => p.theme.factor(0.5)};
  margin: 0 ${p => 8 * p.level - 8}px;
  opacity: calc(1 - 0.2 * ${p => p.level});
  box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 1px 0px;
`;

const Absolute = styled.div`
  opacity: 1;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
`;

const Text = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${p => p.theme.factor(2)};
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: ${p => p.theme.factor(1)};
`;

const Time = styled.span`
  opacity: 0.75;
  font-size: 1rem;
  font-weight: bold;
`;

const Background = styled.div.attrs(p => ({
  style: {
    backgroundImage: `url(${p.background})`,
  },
}))`
  &::before {
    left: 0px;
    top: -40px;
    right: 0px;
    opacity: 1;
    content: '';
    z-index: -1;
    bottom: 0px;
    margin: -10px;
    position: absolute;
    transition: opacity 150ms linear 0s;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(18, 18, 18, 0.6));
  }
  &:hover::after {
    opacity: 1;
  }
  &::after {
    z-index: 2;
    left: 0px;
    top: -40px;
    right: 0px;
    opacity: 0;
    content: '';
    z-index: -1;
    bottom: 0px;
    margin: -10px;
    position: absolute;
    transition: opacity 150ms linear 0s;
    background: linear-gradient(rgba(0, 0, 0, 0), ${p => p.color} 100%);
  }
  z-index: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  user-select: none;
  position: relative;
  background-size: cover;
  background-position: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0px 2px 10px;
`;

function Item({ item }: Props) {
  const theme = React.useContext(ThemeContext);
  const color = theme.getRandomColor();

  return (
    <Container>
      <Absolute>
        <Background color={color} background={item.images.original.webp}>
          <Text>
            <Title>{item.title}</Title>
            <Time>{formatRelative(item.import_datetime)}</Time>
          </Text>
        </Background>
        <DropBox level={1} color={color} />
        <DropBox level={2} color={color} />
        <DropBox level={3} color={color} />
      </Absolute>
    </Container>
  );
}

export default Item;
