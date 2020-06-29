import * as React from 'react';
import styled from 'styled-components';

import { Flex, Link } from '@redocly/ui';

export default function Footer(props) {
    const { columns, copyrightText } = props.footer;

    return (
        <FooterWrapper>
            <Flex py="60px" px="60px">
                <FooterItems>
                    {
                        columns.map((col, index) => {
                            return <li key={index}>
                                {col.group}
                                <FooterItems>
                                    {
                                        col.items.map((item, index) => {
                                            return <li key={index}>
                                                <Link to={item.link}>{item.label}</Link>    
                                            </li>
                                        })
                                    }
                                </FooterItems>
                            </li>
                        })
                    }
                </FooterItems>
            </Flex>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    background: rgba(34,122,136,0.9);
`;

const FooterItems = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    color: #ffffff;
    justify-content: start;
    & li {
        list-style: none;
        margin-right: 20px;
        & a {
            color: #ffffff;
        }
    }
`;