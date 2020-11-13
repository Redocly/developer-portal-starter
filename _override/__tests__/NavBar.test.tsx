import 'jest';
import * as React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../NavBar';
import { createLocation } from 'history';
import { ThemeProvider } from 'styled-components';

import { theme } from '@redocly/ui';

describe('NavBar', () => {
  it('should render correctly', async () => {
    expect(NavBar).toBeDefined();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <NavBar items={[]} pathPrefix="/" location={createLocation('/')} />
      </ThemeProvider>
    );
    expect(getByText('Login')).toBeDefined();
  });
});
