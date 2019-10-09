// @flow
import React from 'react';
import styled from 'styled-components';

// project
import Search from './components/Search';

const Container = styled.section`
  display: flex;
  margin: 0 auto;
  max-width: 935px;
  flex-direction: column;
`;

const Header = styled.header`
  padding: 24px 0;
`;

const Main = styled.main``;

function App() {
  return (
    <Container>
      <Header>
        <section>
          <Search />
        </section>
      </Header>
      <Main>
        <section>List</section>
      </Main>
    </Container>
  );
}

export default App;
