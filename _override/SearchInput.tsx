import * as React from 'react';
import {
  SearchInputProps,
  SearchInputWrap,
  SearchInputField,
  SearchLoadingIcon,
  SearchClearIcon,
  SearchIcon,
} from '@redocly/ui';
import styled from 'styled-components';

export default function UserSearchInput(props: SearchInputProps) {
  const { query, onChange, onToggleSearchResults, onKeyDown, onClear, loading } = props;
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const [isFocused, setIsFocused] = React.useState(false);

  React.useEffect(() => {
    if (isFocused && query.length > 0) {
      onToggleSearchResults(true);
    } else {
      onToggleSearchResults(false);
    }
  }, [isFocused, query]);

  return (
    <StyledInputWrap>
      <StyledInput
        show={isFocused || query.length > 0}
        autoComplete="off"
        value={query || ''}
        onChange={onChange}
        id="search"
        ref={inputRef}
        placeholder="Search the docs"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        onKeyDown={onKeyDown}
      />
      {isFocused ? (
        loading ? (
          <SearchLoadingIcon />
        ) : (
          <SearchClearIcon onClick={onClear} />
        )
      ) : (
        <SearchIcon
          onClick={() => {
            setIsFocused(true);
            setTimeout(() => inputRef.current && inputRef.current.focus(), 200);
          }}
        />
      )}
    </StyledInputWrap>
  );
}

const StyledInputWrap = styled(SearchInputWrap)`
  padding: 0 10px;
`;

const StyledInput = styled(SearchInputField)<{show?: boolean}>`
  width: ${props => (props.show ? '275px' : '0')};
  transition: all 0.2s ease;
  ${props => (!props.show ? 'background-color: transparent;' : '')};
`;
