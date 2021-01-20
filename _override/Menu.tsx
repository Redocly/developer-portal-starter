import * as React from 'react';
import styled from 'styled-components';

import {
  MenuItems,
  MenuMobileButton,
  MenuWrapper,
  MenuProps,
  Link,
  navigate,
  useAPICatalog,
  APICatalogItem,
} from '@redocly/ui';

export default function UserMenu(props: MenuProps<{type?: 'api', id?: string, versions?: string[]}>) {
  const { className, items, navbarHeight, location, context } = props;

  const [mobileOpened, setMobileOpened] = React.useState(false);

  const toggleMobile = React.useCallback(() => {
    setMobileOpened(!mobileOpened);
  }, [mobileOpened]);

  React.useEffect(() => {
    setMobileOpened(false);
  }, [location.pathname]);

  const { apis } = useAPICatalog();

  const versions: APICatalogItem[] =
    context.type === 'api' && context.versions
      ? context.versions.map(versionId => apis.find(a => a.definitionId === versionId))
      : [];

  const activeVersion = apis.find(api => api.definitionId === context.id);
  const activeIdx = versions.indexOf(activeVersion);

  return (
    <>
      <MenuMobileButton opened={mobileOpened} onClick={toggleMobile} />
      <StyledMenuWrapper animate={true} opened={true} navBarHeight={navbarHeight} className={className}>

        {/* Render this API Card only for the Sidebar with api context */}
        {context.type === 'api' && (
          <APICard>
            <BackButton onClick={() => navigate('/api')}>← Back </BackButton>
            {activeVersion && (
              <APINameLabel>
                {activeVersion.info.title || 'Some API'} {activeVersion.info.version}
              </APINameLabel>
            )}
            {versions.length ? (
              <select
                style={{display: 'block', width: '100%'}}
                value={activeIdx}
                onChange={e => {
                  navigate(versions[e.target.value].link);
                }}
              >
                {versions.map((v, idx) => (
                  <option value={idx} key={idx}>
                    {v.info.version}
                  </option>
                ))}
              </select>
            ) : null}
          </APICard>
        )}

        <MenuItems depth={0} items={items} />
      </StyledMenuWrapper>
    </>
  );
}

export const APICard = styled.div`
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 0 20px 10px;
`;

const BackButton = styled(Link)`
  color: red;
  display: block;
  cursor: pointer;
`;

export const APINameLabel = styled.span`
  display: inline-block;
  margin-bottom: 12px;
  padding: 8px 0 0;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
`;

const StyledMenuWrapper = styled(MenuWrapper)`
  border-right: 1px solid #f0f0f0;
`;
