import React from 'react';
import styled from 'styled-components';

// project
import { useBool } from '../utils/hooks';
// $FlowFixMe
import { ReactComponent as SearchIcon } from '../icons/search.svg';

type StyledSearchIconProps = {
  focus: boolean;
};

type Props = {
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
};

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  height: ${p => p.theme.factor(6)};
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 1.125rem;
  padding: ${p => p.theme.factor(0, 2)};
`;

const EndAdornment = styled.div`
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
  right: ${p => p.theme.factor(3)};
`;

const StyledSearchIcon = styled(
  ({ focus, ...props }: StyledSearchIconProps) => <SearchIcon {...props} />
)<StyledSearchIconProps>`
  width: ${p => p.theme.factor(3)};
  height: ${p => p.theme.factor(3)};
  color: ${p =>
    p.focus ? p.theme.getRandomColor() : p.theme.textColors.black};
`;

const Search: React.FC<Props> = (props: Props) => {
  const [focus, onFocus, onBlur] = useBool();
  return (
    <Container>
      <StyledInput
        type="text"
        defaultValue=""
        onBlur={onBlur}
        onFocus={onFocus}
        data-testid="StyledInput"
        placeholder="Search all the GIFs"
        {...props}
      />
      <EndAdornment>
        <StyledSearchIcon focus={focus} />
      </EndAdornment>
    </Container>
  );
};

export default Search;
