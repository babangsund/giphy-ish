// @flow
import React from 'react';
import styled from 'styled-components';

// project
import { useBool } from '../utils/hooks';
// $FlowFixMe
import { ReactComponent as SearchIcon } from '../icons/search.svg';

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

const EndAdornment = styled.div`
  top: 50%;
  right: 24px;
  position: absolute;
  transform: translateY(-50%);
`;

const StyledSearchIcon = styled(({ focus, ...props }) => (
  <SearchIcon {...props} />
))`
  width: 24px;
  height: 24px;
  color: ${p => (p.focus ? p.theme.getRandomColor() : 'black')};
`;

function Search(props: Props) {
  const [focus, onFocus, onBlur] = useBool();
  return (
    <Container>
      <StyledInput
        type="text"
        defaultValue=""
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder="Search all the GIFs"
        {...props}
      />
      <EndAdornment>
        <StyledSearchIcon focus={focus} />
      </EndAdornment>
    </Container>
  );
}

export default Search;
