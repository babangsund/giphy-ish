// @flow
import React from 'react';
import styled from 'styled-components';

// project
import List from './components/List';
import Search from './components/Search';

const Container = styled.section`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  max-width: ${p => p.theme.factor(80)};
`;

const Header = styled.header`
  padding: ${p => p.theme.factor(3, 0)};
`;

const Main = styled.main``;

const items = [
  {
    id: '1',
    title: 'New R-Truth GIFs? Interesting...',
    create_datetime: '2019-08-08',
    images: {
      original: {
        webp: 'https://media3.giphy.com/media/W4jEUHRmp9G1cBCDtV/giphy.webp',
      },
    },
  },
  {
    id: '2',
    title: 'New R-Truth GIFs? Interesting...',
    create_datetime: '2019-08-08',
    images: {
      original: {
        webp: 'https://media3.giphy.com/media/W4jEUHRmp9G1cBCDtV/giphy.webp',
      },
    },
  },
];

function App() {
  return (
    <Container>
      <Header>
        <section>
          <Search />
        </section>
      </Header>
      <Main>
        <section>
          <List items={items} />
        </section>
      </Main>
    </Container>
  );
}

export default App;
