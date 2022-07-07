import * as React from 'react';
import styled from 'styled-components';

import { Flex, Link, NavBarProps, SearchBox } from '@redocly/developer-portal/ui';

/**
 * Custom Navbar. The implementation below is almost identical to our default Navbar
 */
export default function CustomNavBar(props: NavBarProps) {
  // you can use items values from props, it comes from siteConfig.yaml
  // but you can also import it from a separate yaml or json file
  const { items, logo, href, altText } = props;

  const [isMobileMenuOpened, setMobileMenuOpened] = React.useState(false);
  const toggleMobileMenu = () => setMobileMenuOpened(!isMobileMenuOpened);
  const hideMobileMenu = () => setMobileMenuOpened(false);


  const navItems = items
    .filter(item => item.type !== 'search')
    .map((item, index) => {
      return (
        <NavItem key={index} onClick={hideMobileMenu}>
          <Link to={item.link}>{item.label}</Link>
        </NavItem>
      );
    });

  return (
    <NavWrapper>
      <Flex
        maxWidth={{ xs: '100%', large: '1400px' }}
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        mx="auto"
      >
        <LogoLink to={href}>
          <Logo src={logo} alt={altText} />
        </LogoLink>
        <NavItems>
          {navItems}
          <SearchBox pathPrefix={props.pathPrefix} />
        </NavItems>
      </Flex>
      <NavControls>
        <MobileMenuIcon onClick={toggleMobileMenu} />
      </NavControls>
      <MobileMenu isShown={isMobileMenuOpened}>
        <CloseIcon onClick={hideMobileMenu} />
        {navItems}
        <SearchBox pathPrefix={props.pathPrefix} location={props.location} />
      </MobileMenu>
    </NavWrapper>
  );
}

// very important for NavWrapper to be a "nav" HTML tag
export const NavWrapper = styled.nav`
  display: flex;
  color: ${({ theme }) => theme.colors.navbar.contrastText};
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;

  background: ${({ theme }) => `linear-gradient( -63.43000000000001deg,
    ${theme.colors.navbar.main} 15%,
    ${theme.colors.navbar.gradient} 85%)`};

  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 200;
  padding: 1.125em 2.75em;
  font-family: ${({ theme }) => theme.typography.headings.fontFamily};

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 1.25em;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) and (max-width: ${({ theme }) =>
      theme.breakpoints.large}) {
    font-size: 0.875rem;
  }
`;

const NavItems = styled.ul`
  display: none;
  margin: 0 0 0 40px;
  padding: 0;
  align-items: center;
  justify-content: start;
  & li {
    list-style: none;
    margin-right: 20px;
    & a {
      color: #ffffff;
      text-decoration: none;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: flex;
  }
`;

const NavItem = styled.li`
  padding: 10px 0;
`;

export const MobileMenu = styled.ul<{ isShown: boolean }>`
  background: ${props => props.theme.colors.primary.main};
  list-style: none;
  padding: 50px 40px;
  margin: 0;
  position: absolute;
  border-top: 1px solid transparent;
  z-index: 100;
  color: ${props => props.theme.colors.primary.contrastText};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  font-size: 1.1875rem;
  box-shadow: 0px 10px 100px 0px rgba(35, 35, 35, 0.1);
  text-align: left;
  display: none;
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
    }
  }
`;

export const NavControls = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: none;
  }
`;

export const MobileMenuIcon = styled.span`
  width: 1.25em;
  height: 1.25em;
  display: inline-block;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' x='0' y='0' viewBox='0 0 396.7 396.7' xml:space='preserve'%3E%3Cpath fill='white' d='M17 87.8h362.7c9.4 0 17-7.6 17-17s-7.6-17-17-17H17c-9.3 0-17 7.7-17 17C0 80.2 7.7 87.8 17 87.8zM17 215.3h362.7c9.4 0 17-7.6 17-17s-7.6-17-17-17H17c-9.3 0-17 7.7-17 17S7.7 215.3 17 215.3zM17 342.8h362.7c9.4 0 17-7.6 17-17s-7.6-17-17-17H17c-9.3 0-17 7.7-17 17S7.7 342.8 17 342.8z'/%3E%3C/svg%3E");
  cursor: pointer;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: none;
  }
`;

export const CloseIcon = styled.i`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 25px;
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  background-size: 15px 15px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 15.6 15.6' enable-background='new 0 0 15.642 15.642'%3E%3Cpath fill-rule='evenodd' fill='white' d='M8.9 7.8l6.5-6.5c0.3-0.3 0.3-0.8 0-1.1 -0.3-0.3-0.8-0.3-1.1 0L7.8 6.8 1.3 0.2c-0.3-0.3-0.8-0.3-1.1 0 -0.3 0.3-0.3 0.8 0 1.1l6.5 6.5L0.2 14.4c-0.3 0.3-0.3 0.8 0 1.1 0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2l6.5-6.5 6.5 6.5c0.1 0.1 0.3 0.2 0.5 0.2 0.2 0 0.4-0.1 0.5-0.2 0.3-0.3 0.3-0.8 0-1.1L8.9 7.8z'/%3E%3C/svg%3E");
`;

export const Logo = styled.img`
  cursor: pointer;
  width: auto;
  height: ${({ theme }) => theme.logo.height};
  max-width: ${({ theme }) => theme.logo.maxWidth};
  max-height: ${({ theme }) => theme.logo.maxHeight};

  margin: ${({ theme }) => theme.logo.margin};
`;

export const LogoLink = styled(Link)`
  display: inline-block;
  margin-right: 2.75em;
`;
