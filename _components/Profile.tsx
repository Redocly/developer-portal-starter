import * as React from 'react';
import styled from 'styled-components';

import { getUserClaims, getIdPAccessToken, getIdPJwt, getUserId } from '@redocly/developer-portal/ui';

export function Profile() {
  const claims = getUserClaims();
  const { email } = claims;
  const idpAccessToken = getIdPAccessToken();
  const idpIdToken = getIdPJwt();

  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    if (!claims) return;

    run();

    async function run() {
      setLoading(true);
      const resp = await fetch(`https://cors.redoc.ly/https://postman-echo.com/get?email=${email}`, {
        headers: {
          Authorization: idpIdToken,
        },
      });
      const json = await resp.json();
      setData(json);
      setLoading(false);
      // TODO: Error handling
    }
  }, []);

  if (!claims) {
    return 'You are not authorized';
  }

  if (loading) {
    return <Wrapper><h2>Loading...</h2></Wrapper>
  }

  return (
    <Wrapper>
      <h2> Claims </h2>
      <StyledPre>{JSON.stringify(claims, null, 2)}</StyledPre>
      <h2> Response </h2>
      <StyledPre>{loading ? 'Loading...' : JSON.stringify(data, null, 2)}</StyledPre>
    </Wrapper>
  );
}

const StyledPre = styled.pre`
  background-color: #333;
  color: white;
  padding: 10px;
`;

const Wrapper = styled.div`
  padding: 20px 100px;;
`