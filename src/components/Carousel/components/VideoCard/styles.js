import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  display: flex;
  width: var(--videoCard-container-width);
  height: var(--videoCard-container-height);
  padding: 16px;

  /* position: relative; */

  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;

  border: 2px solid;
  border-radius: 10px;

  text-decoration: none;
  color: white;

  opacity: .6;
  overflow: hidden;
  cursor: pointer;
  transition: opacity .4s, width .4s, height .4s;

  &:hover,
  &:focus {
    width: var(--videoCard-container-focus-width);
    height: var(--videoCard-container-focus-height);
    opacity: 1;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
