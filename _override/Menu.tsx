import * as React from 'react';
import styled from 'styled-components';

import { MenuItems, MenuMobileButton, MenuWrapper, MenuProps, navigate } from '@redocly/ui';

export default function UserMenu(props: MenuProps) {
  const { className, items, navbarHeight, location } = props;

  const [mobileOpened, setMobileOpened] = React.useState(false);

  const toggleMobile = React.useCallback(() => {
    setMobileOpened(!mobileOpened);
  }, [mobileOpened]);

  React.useEffect(() => {
    setMobileOpened(false);
  }, [location.pathname]);

  return (
    <>
      <MenuMobileButton opened={mobileOpened} onClick={toggleMobile} />
      <StyledMenuWrapper animate={true} opened={true} navBarHeight={navbarHeight} className={className}>
        <MenuItems depth={0} items={items} />
      </StyledMenuWrapper>
    </>
  );
}

const StyledMenuWrapper = styled(MenuWrapper)`
  border-right: 1px solid #f0f0f0;
  padding: 20px 10px 10px 10px;
`;
