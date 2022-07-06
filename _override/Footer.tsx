import * as React from 'react';
import styled from 'styled-components';

import { Box, Flex, Link, FooterProps } from '@redocly/developer-portal/ui';

/**
 * Custom Navbar. The implementation below is almost identical to our default Footer
 */
export default function CustomFooter(props: FooterProps) {
  // you can use columns/copyright values from props, it comes from siteConfig.yaml
  // but you can also import it from a separate yaml or json file
  const { columns, copyrightText } = props.footer;
  const siteVersion = props.siteVersion;

  const columnsElement = columns.length ? (
    <FooterColumns
      justifyContent="center"
      flexWrap="wrap"
      flex="1"
      p={{ xs: '3em 0 1em 0', small: '5.625em 0 3.9375em 0' }}
    >
      <Flex
        justifyContent="center"
        flexDirection={{ xs: 'column', small: 'row' }}
        flexWrap={{ small: 'wrap' }}
        maxWidth={'1200px'}
        flex={{ small: '1 1 100%' }}
        px={'20px'}
      >
        {columns.map((column, index) => (
          <Box
            key={index}
            textAlign={{ xs: 'center', small: 'left' }}
            mb={{ xs: '4em', small: '3em', medium: 0 }}
            flex={{ xs: '0 calc(50% - 20px)', small: '0 calc(33.333% - 20px)', medium: 1 }}
            mx={10}
          >
            <ColumnTitle>{column.group || column.label}</ColumnTitle>
            <ColumnList>
              {column.items.map((columnItem, columnItemInex) =>
                columnItem.type === 'separator' ? (
                  <FooterSeparator key={columnItem.label + '_' + columnItemInex}>{columnItem.label}</FooterSeparator>
                ) : (
                  <ColumnListItem key={columnItemInex}>
                    <Link to={columnItem.link} target={columnItem.target} external={columnItem.external}>
                      {columnItem.label}
                    </Link>
                  </ColumnListItem>
                )
              )}
            </ColumnList>
          </Box>
        ))}
      </Flex>
    </FooterColumns>
  ) : null;

  const infoElement =
    copyrightText || siteVersion ? (
      <FooterInfo>
        <FooterCopyright>
          {copyrightText} {siteVersion ? `| ${siteVersion}` : null}
        </FooterCopyright>
      </FooterInfo>
    ) : null;

  return (
    <FooterWrapper>
      {columnsElement}
      {infoElement}
    </FooterWrapper>
  );
}

const FooterColumns = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.footer.main};
  color: ${({ theme }) => theme.colors.footer.contrastText};
  font-family: ${({ theme }) => theme.typography.headings.fontFamily};

  a,
  a:hover {
    color: ${({ theme }) => theme.colors.footer.contrastText};
  }
`;

// very important for NavWrapper to be a "footer" HTML tag
const FooterWrapper = styled.footer`
  font-size: 1rem;
  flex-shrink: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily};

  @media print {
    color: black;
    ${FooterColumns} {
      display: none;
    }
  }
`;

export const FooterInfo = styled.section`
  display: flex;
  justify-content: center;
  font-size: 0.875em;
  padding: 1.5em 3em;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  background-color: ${({ theme }) => theme.colors.footer.main};
  color: ${({ theme }) => theme.colors.footer.contrastText};
  span {
    max-width: 1200px;
  }
`;

export const ColumnList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ColumnListItem = styled.li`
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  padding-bottom: 0.75em;
  a {
    color: ${props => props.theme.colors.primary.contrastText};
    text-decoration: none;
  }
`;

export const FooterSeparator = styled.li`
  opacity: 0.75;
  margin: 10px 0 5px 0;
  font-size: 0.75em;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.typography.headings.fontFamily};
`;

export const FooterCopyright = styled.span`
  text-align: center;
`;

export const ColumnTitle = styled.span`
  display: inline-block;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  margin-bottom: 1.5em;
  fontfamily: ${({ theme }) => theme.typography.headings.fontFamily};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-bottom: 2.5em;
  }
`;
