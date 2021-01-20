import * as React from 'react';
import styled from 'styled-components';

import { SearchResultItem, SearchResultsWrap, SearchResultsProps } from '@redocly/ui';

const MAX_ITEMS_PER_GROUP = 4;

export default function UserSearchResults(props: SearchResultsProps) {
  const { show, results, indexError, activeItemIdx, loading, query } = props;

  const apiResults = {
    title: 'API Documentation',
    results: results.filter(r => !!r.httpVerb).slice(0, MAX_ITEMS_PER_GROUP),
  };
  const otherResults = {
    title: 'Help Centre',
    results: results.filter(r => !r.httpVerb).slice(0, MAX_ITEMS_PER_GROUP),
  };

  // Reorder of search sections depending on the current page.
  // We have to check if `location `is defined (it is not defined during build SSR).
  const searchGroups = typeof location !== 'undefined' && location.pathname.startsWith('/api') ? [apiResults, otherResults] : [otherResults, apiResults];

  return (
    <SearchResultsWrap show={show}>
      {indexError && process.env.NODE_ENV === 'development' && (
        <Message>
          Failed to load search index. Search index is not working in develop. <br />
          Run <code>yarn build</code> to build the search index first (requires license key).
        </Message>
      )}
      {results.length === 0 && !loading && <Message> Nothing Found </Message>}
      {searchGroups.map(group => {
        return group.results.length ? (
          <React.Fragment key={group.title}>
            <SearchCatTitle> {group.title} </SearchCatTitle>
            {group.results.map((item, idx) => (
              <SearchResultItem key={item.link} item={item} query={query} active={idx === activeItemIdx} />
            ))}
          </React.Fragment>
        ) : null;
      })}
    </SearchResultsWrap>
  );
}

const Message = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.primary.main};
  padding: 1.5em;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 0.75em;
  }
`;

const SearchCatTitle = styled.div`
  color: #2e2e2e;
  padding: 16px 24px;
  text-transform: uppercase;
  font-size: 0.85em;
`;
