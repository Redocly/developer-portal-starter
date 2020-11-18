import * as React from 'react';
import styled from 'styled-components';

import { Flex, Link, logout } from '@redocly/ui';

export default function UserMenu(props: {
  user: {
    sub: string;
    given_name?: string;
    family_name?: string;
    name?: string;
    email?: string;
    picture?: string;
  };
}) {
  const { user } = props;

  let letters, name;

  const popoverRef = React.useRef<HTMLDivElement>();
  const [opened, toggleOpened] = usePopoverState(popoverRef);

  if (!user) return null;

  if (user.given_name && user.family_name) {
    letters = user.given_name.substring(0, 1) + user.family_name.substring(0, 1);
    name = `${user.given_name} ${user.family_name}`;
  } else if (user.name) {
    letters = user.name
      .split(/\s+/)
      .slice(0, 2)
      .map(p => p.substring(0, 1))
      .join('');
    name = `${user.given_name} ${user.family_name}`;
  } else if (user.email) {
    letters = user.email.substring(0, 2);
    name = user.email;
  } else {
    letters = 'UU';
    name = 'Unknown User';
  }

  return (
    <>
      <UserLetterBox
        style={{
          cursor: 'pointer',
        }}
      >
        <UserLetterBox onClick={toggleOpened} picture={user.picture}>
          {letters}
        </UserLetterBox>
      </UserLetterBox>
      <UserPopover ref={popoverRef} opened={opened}>
        <UserInfoWrapper>
          <UserLetterBox picture={user.picture}>{letters}</UserLetterBox>
          <UserInfo> {name} </UserInfo>
        </UserInfoWrapper>
        <MenuItem>
          <Link to="/profile">Profile</Link>
        </MenuItem>
        <MenuItem onClick={logout}>Log out</MenuItem>
      </UserPopover>
    </>
  );
}

const UserLetterBox = props => (
  <Flex
    height={40}
    width={40}
    m={'4px'}
    bg={'#999'}
    className={props.className}
    alignItems={'center'}
    justifyContent={'center'}
    marginLeft={'auto'}
    alignSelf={'center'}
    style={{
      backgroundSize: 'cover',
      backgroundImage: props.picture ? `url('${props.picture}')` : 'none',
    }}
    {...props}
  >
    <UserLetters>{props.children}</UserLetters>
  </Flex>
);

const UserLetters = styled.span`
  display: inline-block;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  user-select: none;
`;

const UserPopover = styled.div<{ opened?: boolean }>`
  width: 320px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  right: 4px;
  top: 54px;
  background: #ffffff;
  display: ${({ opened }) => (opened ? 'block' : 'none')};
  z-index: 1000;
  a,
  a:hover,
  a:visited {
    color: black;
    text-decoration: none;
  }
`;

const UserInfoWrapper = styled.div`
  height: 72px;
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
`;

const UserInfo = styled.div`
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
  color: #000;
`;

const MenuItem = styled.div`
  height: 40px;
  box-sizing: border-box;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  color: #161616;
  background-color: #fff;
  &:hover {
    background-color: #f2f2f2;
  }
`;

function usePopoverState(ref): [boolean, () => void] {
  const [opened, setOpened] = React.useState(false);

  /**
   * Alert if clicked on outside of element
   */
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      setTimeout(() => {
        setOpened(false);
      }, 0);
    }
  }

  React.useEffect(() => {
    // Bind the event listener
    if (opened) {
      document.addEventListener('click', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [opened]);

  const toggle = React.useCallback(() => {
    setOpened(!opened);
  }, [opened]);

  return [opened, toggle];
}
