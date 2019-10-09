// @flow
import React from 'react';
import styled from 'styled-components';

// project
import Item from './Item';
import type { Ref } from '../utils/types';
import { useInfiniteScroll } from '../utils/hooks';

type Props = {
  items: Array<{
    id: string,
    title: string,
    create_datetime: string,
    images: {
      original: {
        webp: string,
      },
    },
  }>,
};

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

const TriggerElement = styled.div`
  bottom: 20%;
  position: absolute;
`;

function List({ items = [] }: Props) {
  const bottomRef: Ref = React.useRef(null);
  useInfiniteScroll(bottomRef, () => alert('trigger'));

  return (
    <Container>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
      <TriggerElement ref={bottomRef} />
    </Container>
  );
}

export default List;
