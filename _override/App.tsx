import * as React from 'react';
import type { Location } from 'history';

/**
 * Root wrapper.
 */
export function App({ children, location }: React.PropsWithChildren<{ location: Location }>) {
  return (
    <>
      {/* you can add some top-level providers here or anything to wrap whole app */}

      {/* <header style={{background: 'yellow', textAlign: 'center', padding: '20px 0', fontSize: '24px'}}>
        Header
      </header> */}

      {children}
    </>
  );
}