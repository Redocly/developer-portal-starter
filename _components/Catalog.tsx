import * as React from 'react';
import { useAPICatalog, Link, APICatalogItem } from '@redocly/ui';
import styled from 'styled-components';

export function Catalog() {
  const { apis, loadingRbac } = useAPICatalog(); // loadingRbac can be used to show loading spinner
  const [selectedCategories, setSelectedCategories] = React.useState([]);

  const categories = groupAPIsByCategories(apis);

  const toggleCategoryFilter = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (selectedCategories.includes(value)) {
        setSelectedCategories(selectedCategories.filter(c => c !== value));
      } else {
        setSelectedCategories([...selectedCategories, value]);
      }
    },
    [selectedCategories]
  );

  const filteredCategories = categories.filter(cat => {
    if (selectedCategories.length === 0) return true;
    return selectedCategories.includes(cat.name);
  });

  return (
    <Wrapper>
      <Sidebar>
        <h3>Sidebar here</h3>
        {categories.map(category => (
          <div key={category.name}>
            <input
              id={'cat-' + category.name}
              type="checkbox"
              value={category.name}
              checked={selectedCategories.includes(category.name)}
              onChange={e => toggleCategoryFilter(e)}
            />{' '}
            <label htmlFor={'cat-' + category.name}>{category.name}</label>
          </div>
        ))}
      </Sidebar>
      <CatalogWrap>
        {filteredCategories.map(cat => (
          <div key={cat.name}>
            <h2>{cat.name}</h2>
            <CategoryWrap>{cat.apis.map(api => (
              <ApiCard key={api.definitionId}>
                <div>
                  <h3>{api.info.title}</h3>
                  <div>{api.info.description.substring(0, 50)}</div>
                </div>
                <div>
                  <hr></hr>
                  <StyledLink to={api.link}>{'>'} View Documentation</StyledLink>
                </div>
              </ApiCard>
            ))}</CategoryWrap>
          </div>
        ))}
      </CatalogWrap>
    </Wrapper>
  );
}

function groupAPIsByCategories(apis) {
  const categories = new Map();
  for (const api of apis) {
    for (const category of api.definitionProperties['x-categories'] || []) {
      const categoryAPIs = categories.get(category);
      if (categoryAPIs === undefined) {
        categories.set(category, [api]);
      } else {
        categoryAPIs.push(api);
      }
    }
  }

  return Array.from(categories.entries()).map(([name, apis]) => {
    return {
      name,
      apis,
    };
  });
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Sidebar = styled.div`
  width: 300px;
  border-right: 1px solid #e2e2e2;
  padding: 20px;
`;

const CatalogWrap = styled.div`
  padding: 24px;
  flex: 1;
  background-color: #f3f4f5;
  min-height: 100vh;
`;

const CategoryWrap = styled.div`
  flex-wrap: wrap;
  display: flex;
`;

const ApiCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 24px;
  margin: 24px;
  min-width: 288px;
  flex: 1;
  max-width: 350px;
  height: 288px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > h3 {
    margin: 0;
    color: #212129;
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
  }

  > div > div {
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    /* Text / Ink */

    color: #212129;
  }

  > div > hr {
    border-color: #e2e2e2;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
`;
