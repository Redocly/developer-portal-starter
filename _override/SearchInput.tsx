import * as React from 'react';

import {
  SearchInputProps,
  SearchIcon,
  SearchClearIcon,
  SearchLoadingIcon,
  SearchInputField,
  SearchInputWrap,
} from '@redocly/developer-portal/ui';

/**
 * Custom Search Input. The implementation below is almost identical to our default SearchInput.
 */
export default function CustomSearchInput(props: SearchInputProps) {
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
    <SearchInputWrap>
      <SearchInputField
        type="text"
        autoComplete="off"
        value={query || ''}
        onChange={onChange}
        id="search"
        ref={inputRef}
        placeholder="Search..."
        aria-label="Search..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={onKeyDown}
      />
      {isFocused ? (
        loading ? (
          <SearchLoadingIcon />
        ) : (
          <SearchClearIcon onClick={onClear} />
        )
      ) : (
        <SearchIcon onClick={() => inputRef.current && inputRef.current.focus()} />
      )}
    </SearchInputWrap>
  );
}
