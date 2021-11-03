import * as React from 'react';
import styled from 'styled-components';

import { Flex, Link, SearchBox } from '@redocly/developer-portal/ui';

export default function NavBar(props) {
  const { items, logo, location } = props;
  const isMain = location.pathname !== '/'; // Change the color of the NavBar based on location

  const [isMobileMenuOpened, setMobileMenuOpened] = React.useState(false);
  const toggleMobileMenu = () => setMobileMenuOpened(!isMobileMenuOpened);
  const hideMobileMenu = () => setMobileMenuOpened(false);
  const getIsActive = function (navItem, allItems): boolean {
    return (
      props.sidebarName === navItem.activateWithSidebar ||
        (navItem.link === location.pathname &&
        !allItems.some(item => item.activateWithSidebar === props.sidebarName))
    );
  };

  const navItems = items
    .filter(item => item.type !== 'search')
    .map((item, index) => {
      return (
        <NavItem key={index} onClick={hideMobileMenu} active={getIsActive(item, items)}>
          <Link to={item.link}>{item.label}</Link>
        </NavItem>
      );
    });

  return (
    <NavWrapper hasBackground={isMain}>
      <Flex p="15px 20px 7px" flex={1} justifyContent="space-between" alignItems="center">
        <Flex flexDirection="column">
          <p>Hello</p>
          <NavItems>
            {navItems}
          </NavItems>
        </Flex>
        <SearchBoxStyled pathPrefix={props.pathPrefix} />
      </Flex>
      <NavControls>
        <MobileMenuIcon onClick={toggleMobileMenu} />
      </NavControls>
      <MobileMenu isShown={isMobileMenuOpened}>
        <CloseIcon onClick={hideMobileMenu} />
        {navItems}
        <SearchBox />
      </MobileMenu>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav<{ hasBackground: boolean }>`
  background: ${({ hasBackground }) => (hasBackground ? '#ffffff' : 'transparent')};
  border-bottom: ${({ hasBackground }) => (hasBackground ? '3px solid #E5E5E5' : 'none')};
  display: flex;
  position: sticky;
  top: 0;
  z-index: 50;
`;

const NavItems = styled.ul`
  display: none;
  margin-bottom: 0;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: flex;
  }

  & li {
    list-style: none;
    margin-right: 20px;
    padding-bottom: 0;
    & a {
      color: #7a7a7a;
      font-size: 20px;
      text-decoration: none;
    }
  }
`;

const NavItem = styled.li<{ active: boolean }>`
  padding: 10px 0;
  a:not([role="button"]) {
    color: ${({ active }) => (active ? '#dd3b11' : '#7a7a7a')};
  }
`;

const LogoText = styled.span`
  color: #7a7a7a;
  font-size: 26px;
  font-weight: bold;
  margin-left: 15px;
  padding-left: 12px;
  position: relative;
  word-break: break-word;
  
  :before {
    background: #7a7a7a;
    content: '';
    height: 40px;
    left: -2px;
    position: absolute;
    top: -4px;
    width: 2px;
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const SearchBoxStyled = styled(SearchBox)`
  display: none;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: flex;
  }
`;

export const MobileMenu = styled.ul<{ isShown: boolean }>`
  background: ${props => props.theme.colors.primary.main};
  border-top: 1px solid transparent;
  bottom: 0;
  box-shadow: 0 10px 100px 0 rgba(35, 35, 35, 0.1);
  color: ${props => props.theme.colors.primary.contrastText};
  display: none;
  font-size: 1.1875rem;
  left: 0;
  list-style: none;
  margin: 0;
  padding: 50px 40px;
  position: absolute;
  right: 0;
  text-align: left;
  top: 0;
  z-index: 100;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    position: fixed;
    display: ${props => (props.isShown ? 'flex' : 'none')};
    flex-direction: column;
    overflow-y: auto;
  }
  & li {
    list-style: none;
    margin-right: 20px;
    & a {
      color: #ffffff;
      text-decoration: none;
      
      & :hover {
        text-decoration: underline;
      }
    }
  }
`;

export const NavControls = styled.div`
  align-items: center;
  display: flex;
  flex: 0;
  justify-content: flex-end;
  padding: 50px 25px;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: none;
    flex: 1;
  }
`;

export const MobileMenuIcon = styled.span`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' x='0' y='0' viewBox='0 0 396.7 396.7' xml:space='preserve'%3E%3Cpath fill='black' d='M17 87.8h362.7c9.4 0 17-7.6 17-17s-7.6-17-17-17H17c-9.3 0-17 7.7-17 17C0 80.2 7.7 87.8 17 87.8zM17 215.3h362.7c9.4 0 17-7.6 17-17s-7.6-17-17-17H17c-9.3 0-17 7.7-17 17S7.7 215.3 17 215.3zM17 342.8h362.7c9.4 0 17-7.6 17-17s-7.6-17-17-17H17c-9.3 0-17 7.7-17 17S7.7 342.8 17 342.8z'/%3E%3C/svg%3E");
  cursor: pointer;
  display: inline-block;
  height: 1.25em;
  width: 1.25em;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: none;
  }
`;

export const CloseIcon = styled.i`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 15.6 15.6' enable-background='new 0 0 15.642 15.642'%3E%3Cpath fill-rule='evenodd' fill='black' d='M8.9 7.8l6.5-6.5c0.3-0.3 0.3-0.8 0-1.1 -0.3-0.3-0.8-0.3-1.1 0L7.8 6.8 1.3 0.2c-0.3-0.3-0.8-0.3-1.1 0 -0.3 0.3-0.3 0.8 0 1.1l6.5 6.5L0.2 14.4c-0.3 0.3-0.3 0.8 0 1.1 0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2l6.5-6.5 6.5 6.5c0.1 0.1 0.3 0.2 0.5 0.2 0.2 0 0.4-0.1 0.5-0.2 0.3-0.3 0.3-0.8 0-1.1L8.9 7.8z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 15px 15px;
  cursor: pointer;
  height: 15px;
  position: absolute;
  right: 20px;
  top: 25px;
  width: 15px;
`;
