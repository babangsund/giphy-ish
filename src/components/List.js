// @flow
import React from 'react';
import styled from 'styled-components';

// project
import Item from './Item';
import Spinner from './Spinner';
import type { Ref } from '../utils/types';
import type { Giphy } from '../giphy/GiphyTypes';
import { useInfiniteScroll } from '../utils/hooks';

type Props = {
  isLoading: boolean,
  items: Array<Giphy>,
  fetchMore: void => void,
};

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

const SpinnerWrapper = styled.div`
  width: 100%;
  position: relative;
  height: ${p => p.theme.factor(6)};
  margin-bottom: ${p => p.theme.factor(6)};
`;

const TriggerElement = styled.div`
  bottom: 15%;
  position: absolute;
`;

function List({ items = [], fetchMore, isLoading }: Props) {
  const bottomRef: Ref = React.useRef(null);
  useInfiniteScroll(bottomRef, fetchMore);

  return (
    <Container>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
      <TriggerElement ref={bottomRef} />
      {isLoading && (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}
    </Container>
  );
}

export default List;
