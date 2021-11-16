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

    const logoLinkDivStyle = {
      flex: '0 1 0%'
    };

    const logoDivStyle = {
      width: '310px'
    };

    const spacingDivStyle = {
      height: '64px',
      width: '100%',
      position: 'inline'
    };

  return (
    <NavWrapper hasBackground="false">
      <div style={spacingDivStyle}></div>
      <div id="header" className="top-0 left-0 w-full md:fixed">
        <div className="bg-white flex items-center sticky top-0 z-20 print:hidden">
          <div className="logoLinkDiv" style={logoDivStyle}>
            <a href="https://doc.toasttab.com/doc/main/index.html">
              <div className="bg-brand-50 text-white h-16 flex items-center justify-center duration-300 ease-out-quart overflow-hidden px-10" 
                   style={logoLinkDivStyle}>
                <svg fill="white">
                  <g className="transition duration-75 ease-out-quart">
                    <path d="M175.985 109.955c-.806 1.844-3.086 1.638-4.674 1.5-2.38-.204-4.718-.788-7.11-.86-2.116-.064-4.21.342-6.27.804-1.546.342-3.696 1.246-5.092.04-1.544-1.336-1.82-3.612-1.842-5.526-.018-1.656.236-3.522.494-5.16.168-1.056.522-2.07.908-3.066.556-1.43 1.372-2.288 1.412-2.244-.414-.436-.912-.668-1.192-1.268-1.056-2.246 1.58-4.144 3.024-4.8 5.046-2.296 12.11-2.068 16.89.88 1.488.916 4.378 4.08 1.676 5.652 1.666.798 2.088 3.206 2.272 4.92a30.385 30.385 0 01-.246 8.248c-.056.336-.14.626-.25.88zm3.704-3.772c.008-2.098-.05-4.218-.274-6.298-.15-1.414-.624-3.222-2.126-3.59.172.044.46.048.588-.02 1.746-.93 1.614-3.216.994-4.872-.812-2.168-2.74-3.702-4.652-4.724-6.858-3.666-16.04-3.36-22.692.816-1.732 1.088-3.724 3.21-2.85 5.562.222.594.614 1.108 1.038 1.568.196.208.66.694.66.696-.896 1.232-1.544 2.336-1.964 3.832-1.263 4.488-1.053 7.376-.706 10.982.214 2.23.94 5.56 3.474 5.924.002.002.006.002.01.002 2.062.29 4.304-.4 6.36-.646 2.274-.272 4.564-.698 6.856-.638 3.236.084 6.45.868 9.692.898 1.71.016 4.56.184 5.066-2.11.486-2.178.496-4.45.52-6.676l.006-.706" transform="translate(-144 -24)"></path>
                    <g opacity="1" className="transition duration-300">
                      <path d="M191.668 114c-3.5 0-5.388-1.81-5.388-5.191v-9.91h-1.219c-1.18 0-2.162-.983-2.162-2.241 0-1.14.983-2.124 2.162-2.124h1.22v-2.95c0-1.376 1.1-2.477 2.556-2.477a2.467 2.467 0 012.477 2.478v2.95h1.966c1.14 0 2.124.982 2.124 2.201 0 1.18-.983 2.163-2.124 2.163h-1.966v8.573c0 1.494.944 2.084 1.73 2.084h.433c1.416 0 2.202.944 2.202 2.163 0 1.258-.747 2.28-4.011 2.28" transform="translate(-144 -24)"></path>
                      <path d="M207.399 98.506c-3.107 0-4.837 2.556-4.837 5.505 0 2.989 1.73 5.545 4.837 5.545 3.106 0 4.876-2.556 4.876-5.545 0-2.949-1.77-5.505-4.876-5.505zm0 15.494c-6.253 0-10.028-4.562-10.028-9.989 0-5.387 3.775-9.949 10.028-9.949 6.292 0 10.067 4.562 10.067 9.95 0 5.426-3.775 9.988-10.067 9.988" transform="translate(-144 -24)"></path>
                      <path d="M232.568 106.607c-.826-1.101-2.399-1.652-4.012-1.652-1.966 0-3.578 1.023-3.578 2.87 0 1.77 1.612 2.793 3.578 2.793 1.613 0 3.186-.55 4.012-1.652zm2.556 7.157h-.394c-.393 0-2.162-.315-2.162-2.202-1.298 1.533-3.54 2.438-6.017 2.438-3.028 0-6.607-2.045-6.607-6.292 0-4.444 3.579-6.135 6.607-6.135 2.517 0 4.758.826 6.017 2.32v-2.556c0-1.926-1.652-3.185-4.17-3.185-1.493 0-2.948.354-4.246 1.219-.275.157-.59.275-.904.275-.905 0-1.888-.747-1.888-1.926 0-.355.118-.709.275-.984 1.18-1.887 5.427-2.674 7.63-2.674 4.325 0 8.297 1.73 8.297 7.197v10.028c0 1.376-1.101 2.477-2.438 2.477" transform="translate(-144 -24)"></path>
                      <path d="M249.36 114c-2.477 0-6.449-.826-7.629-2.517a1.724 1.724 0 01-.353-1.062c0-1.18 1.022-2.084 2.084-2.084.353 0 .707.079 1.022.276 1.495.865 3.46 1.533 5.112 1.533 2.163 0 3.185-.865 3.185-2.045 0-3.146-11.286-.59-11.286-8.062 0-3.185 2.792-5.977 7.787-5.977 2.477 0 5.859.787 6.92 2.32a1.719 1.719 0 01.315.983c0 1.062-.943 1.888-1.966 1.888-.315 0-.669-.078-.943-.236a8.71 8.71 0 00-4.287-1.14c-1.81 0-2.989.826-2.989 1.888 0 2.83 11.247.471 11.247 8.14 0 3.46-2.95 6.095-8.219 6.095" transform="translate(-144 -24)"></path>
                      <path d="M267.647 114c-3.5 0-5.387-1.81-5.387-5.191v-9.91h-1.22c-1.179 0-2.162-.983-2.162-2.241 0-1.14.983-2.124 2.162-2.124h1.22v-2.95c0-1.376 1.101-2.477 2.556-2.477a2.467 2.467 0 012.477 2.478v2.95h1.967c1.14 0 2.123.982 2.123 2.201 0 1.18-.983 2.163-2.123 2.163h-1.967v8.573c0 1.494.944 2.084 1.73 2.084h.434c1.415 0 2.202.944 2.202 2.163 0 1.258-.748 2.28-4.012 2.28" transform="translate(-144 -24)"></path>
                    </g>
                  </g>
                </svg>
              </div>
            </a>
          </div>
          <div className="px-6 flex-1 flex items-center space-x-3 lg:space-x-5 h-16 border-b">
            <div id="headerLinkWrapper" className="p-2 type-subhead flex items-center border-white outline-none rounded-md group-hover:bg-darken-4 group-focus-visible:shadow-focus space-x-3">
              <div id="headerLinkDevCookbook">
                <a href="https://doc.toasttab.com/doc/cookbook/index.html" className="text-gray-75 no-underline hover:underline">Cookbook</a>
              </div>
              <div id="headerLinkDevGuide">
                <a href="https://doc.toasttab.com/doc/devguide/index.html" className="text-gray-75 no-underline hover:underline">Developer guide</a>
              </div>
              <div id="headerLinkDevReference" className="isCurrentDevPortalSection">
                <a href="https://toastintegrations.redoc.ly/openapi/" className="text-brand-75 no-underline hover:underline">API reference</a>
              </div>
              <div id="headerLinkDevPlatformGuide">
                <a href="https://doc.toasttab.com/doc/platformguide/index.html" className="text-gray-75 no-underline hover:underline">Platform guide</a>
              </div>
              <div id="headerLinkDevReleaseNotes">
                <a href="https://doc.toasttab.com/doc/relnotes/index.html" className="text-gray-75 no-underline hover:underline">Release notes</a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
