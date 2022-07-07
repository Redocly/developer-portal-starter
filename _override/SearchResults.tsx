import * as React from 'react';
import styled from 'styled-components';

import { SearchResultItem, SearchResultsWrap, SearchResultsProps } from '@redocly/developer-portal/ui';

const MAX_ITEMS_PER_GROUP = 5;

/**
 * Custom User Search results. The implementation below is similar to our default search results but
 * implements simple grouping by URL
 */

export default function CustomSearchResults(props: SearchResultsProps) {
  const { show, results, indexError, activeItemIdx, loading, query } = props;

  function isApiResult(item) {
    return !!item.httpVerb && item.link.startsWith('/openapi'); // this is example
  }

  const apiResults = {
    title: 'API Documentation',
    results: results.filter(isApiResult).slice(0, MAX_ITEMS_PER_GROUP),
  };

  const otherResults = {
    title: 'Other Results',
    results: results.filter(item => !isApiResult(item)).slice(0, MAX_ITEMS_PER_GROUP),
  };

  let currentPathname = typeof location !== 'undefined' ? location.pathname : '/';

  // order results differently based on current page
  const searchGroups =
    currentPathname && currentPathname.startsWith('/openapi') ? [apiResults, otherResults] : [otherResults, apiResults];

  return (
    <SearchResultsWrap show={show}>
      {indexError && process.env.NODE_ENV === 'development' && (
        <Message>
          Failed to load search index. Search index is not working in develop. <br />
          Run <code>yarn build</code> to build the search index first (requires license key).
        </Message>
      )}
      {results.length === 0 && !loading && <Message> Nothing Found </Message>}


      {/* our default implementation iterates over the results directly */}
      {/*
      {results.map((item, idx) => (
        <SearchResultItem
          key={item.link}
          item={item}
          query={query}
          active={idx === activeItemIdx}
        />
      ))}
      */}

      {searchGroups.map((group, index) => {
        return group.results.length ? (
          <React.Fragment key={group.title}>
            <SearchCatTitle> {group.title} </SearchCatTitle>
            {group.results.map((item, idx) => (
              <div key={item.link}>
                <SearchResultItem
                  key={item.link}
                  item={item}
                  query={query}
                  active={countIndex(index, idx, searchGroups) === activeItemIdx}
                />
              </div>
            ))}
          </React.Fragment>
        ) : null;
      })}

    </SearchResultsWrap>
  );
}

// to support keyboard navigation
const countIndex = (index, idx, searchGroups) => {
  if (index === 0) {
    return idx;
  } else if (index === 1) {
    return searchGroups[0].results.length + idx;
  }
};

const Message = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.primary.main};
  padding: 1.5em;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 0.75em;
  }
  color: #212129;
`;

const SearchCatTitle = styled.div`
  color: #919194;
  padding: 16px 24px;
  text-transform: uppercase;
  font-size: 14px;
`;