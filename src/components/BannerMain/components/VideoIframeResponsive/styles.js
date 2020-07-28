import styled from 'styled-components';

export const VideoContainer = styled.div`
  width: 100%;
  padding-top: 56.25%;

  position: relative;
  overflow: hidden;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ResponsiveIframe = styled.iframe`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
