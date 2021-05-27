import * as React from 'react';

import { useSidebarsInfo } from '@redocly/developer-portal/ui';

export function Counter() {
  const [count, setCount] = React.useState(0);

  const sidebars = useSidebarsInfo();

  return (
    <div style={{ border: '1px solid red', padding: '10px' }}>
      <div style={{ fontSize: '18px', marginBottom: '10px' }}>
        Clicks: <strong>{count}</strong>
      </div>
      <button onClick={() => setCount(count + 1)}> Click </button>
      <pre>{JSON.stringify(sidebars, null, 2)}</pre>
    </div>
  );
}
