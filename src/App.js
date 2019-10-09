// @flow
import React from 'react';
import styled from 'styled-components';

// project
import List from './components/List';
import useGiphy from './giphy/useGiphy';
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

function App() {
  const [{ items, isLoading }, fetchQuery, fetchMore] = useGiphy();
  return (
    <Container>
      <Header>
        <section>
          <Search onChange={e => fetchQuery(e.target.value)} />
        </section>
      </Header>
      <Main>
        <section>
          <List items={items} fetchMore={fetchMore} isLoading={isLoading} />
        </section>
      </Main>
    </Container>
  );
}

export default App;
