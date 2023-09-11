import * as React from 'react';
import type { Location } from 'history';

export function App({ children, location }: React.PropsWithChildren<{ location: Location }>) {
  return (
    <>
      <header style={{background: 'yellow', textAlign: 'center', padding: '20px 0', fontSize: '24px'}}>
        Header
      </header>
      {children}
    </>
  );
}