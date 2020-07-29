import React from 'react';
import { Container, TitleMsg, Msg } from './style.js';

function ErrorMsg() {
  return (
    <Container>
      <TitleMsg>
        Oops!
      </TitleMsg>
      <Msg>
        We can't seem to find the page you're looking for.
      </Msg>
    </Container>
  );
}

export default ErrorMsg;
