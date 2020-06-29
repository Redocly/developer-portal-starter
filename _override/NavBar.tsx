import * as React from 'react';
import styled from 'styled-components';

import { Flex, Link, SearchBox } from '@redocly/ui';

export default function NavBar(props) {
    const {items, logo, location} = props;
    const isMain = location.pathname !== '/'; // Change the color of the NavBar based on location

    return (
        <NavWrapper hasBackground={isMain}>
            <Flex p="20px">
                <img src={logo} alt="" height="50"/>
                <NavItems>
                    {
                        items.filter(item => item.type !== 'search').map((item, index) => {
                            return <li key={index}>
                                <Link to={item.link}>{item.label}</Link>    
                            </li>
                        })
                    }
                </NavItems>
                <SearchBox />
            </Flex>
        </NavWrapper>
    )
}

const NavWrapper = styled.div<{ hasBackground: boolean }>`
    background: ${({hasBackground}) => hasBackground ? '#227a88' : 'transparent'};
`;

const NavItems = styled.ul`
    margin: 0 0 0 40px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: start;
    & li {
        list-style: none;
        margin-right: 20px;
        & a {
            color: #FFFFFF;
        }
    }
`;