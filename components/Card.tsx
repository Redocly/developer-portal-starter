import * as React from 'react';
import styled from 'styled-components';

export default function Card(props: { title: string; children: any }) {
  const { title, children } = props;

  return (
    <StyledCard>
      <CardTitle>{title}</CardTitle>
      {children}
    </StyledCard>
  );
}

const StyledCard = styled.div`
  position: relative;
  padding: 24px;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  width: 280px;
  min-height: 350px;
  background-color: #fff;
  overflow: hidden;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.primary.main};
    clip-path: polygon(0 0, 100% 0%, 100% 64%, 0 90%);
    z-index: -1;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    color: #fff;
    font-size: ${({ theme }) => theme.typography.fontSize};
    list-style: none;
    margin-bottom: 8px;
    &::before {
      content: '–';
      margin-right: 8px;
    }
  }
`;

const CardTitle = styled.h4`
  color: #fff;
  font-size: ${({ theme }) => theme.typography.heading3.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  text-align: center;
  margin-top: 0;
`;
