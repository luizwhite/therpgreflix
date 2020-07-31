import React from 'react';
import { Container, TitleMsg, Msg } from './style';

function ErrorMsg() {
  return (
    <Container>
      <TitleMsg>Oops!</TitleMsg>
      <Msg>We can&apos;t seem to find the page you&apos;re looking for.</Msg>
    </Container>
  );
}

export default ErrorMsg;
