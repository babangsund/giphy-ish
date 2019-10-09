// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {};

const Container = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0 12px;
  font-size: 1.125rem;
`;

function Search(props: Props) {
  return (
    <Container>
      <StyledInput
        type="text"
        defaultValue=""
        placeholder="Search all the GIFs"
        {...props}
      />
    </Container>
  );
}

export default Search;
