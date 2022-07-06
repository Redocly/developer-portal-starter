import * as React from 'react';
import { SidebarLayout as OriginalSidebarLayout, SidebarProps } from '@redocly/developer-portal/ui';

import styled, { createGlobalStyle } from 'styled-components';

/**
 * Layout with sidebar. The implementation below wraps original sidebar layout adding paper-like UI.
 */

export default function CustomSidebarLayout(props: SidebarProps<any>) {
  return (
    <SidebarWrapper>
      <BodyBg />
      <OriginalSidebarLayout {...props}>
        {props.children} {/* page contents in props.children */}
      </OriginalSidebarLayout>
    </SidebarWrapper>
  );
}

const BodyBg = createGlobalStyle`
  body {
    background-color: #eeeeee;
  }
`;

const SidebarWrapper = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 20px auto;
  padding: 10px 0px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 100%;
  }
`;