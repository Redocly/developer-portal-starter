import * as React from 'react';
import { MarkdownLayout as OriginalMarkdownLayout, MarkdownLayoutProps } from '@redocly/developer-portal/ui';
import styled from 'styled-components';

/**
 * Layout for markdown content. The implementation below modifies layout based on the location.pathname.
 */

export default function CustomMarkdownLayout(props: MarkdownLayoutProps) {
  const { withToc, lastModifiedAgo, Toc, children, location } = props;

  if (location.pathname.endsWith('/blog/')) {
    // render modified layout if pathname starts with /blog

    // You get markdown page content in {children}.
    // The code below is showing our default Markdown layout.
    // But it can be replaced completely.

    return (
      <PageWrapper>
        <ContentWrapper withToc={withToc}>
          {lastModifiedAgo && (
            <PageInfo>
              <PageInfoText>Last updated {lastModifiedAgo}</PageInfoText>
            </PageInfo>
          )}
          {children}
        </ContentWrapper>
        <Toc />
      </PageWrapper>
    );
  }

  // render default layout otherwise
  return <OriginalMarkdownLayout {...props} />;
}

const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;

const PageInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8125rem;
  margin-bottom: 1.5em;
`;

const PageInfoText = styled.span`
  color: ${props => props.theme.colors.text.primary};
  font-weight: ${props => props.theme.typography.fontWeightRegular};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

const ContentWrapper = styled.section<{ withToc: boolean }>`
  width: 90%;
  margin: 25px auto;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    max-width: 910px;
  }
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: ${({ withToc, theme }) => (withToc ? `calc(90% - ${theme.tocPanel.width})` : '90%')};
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;
