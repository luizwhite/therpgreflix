import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  display: flex;
  flex: 0 0 298px;
  align-items: flex-end;
  width: 298px;
  height: 197px;
  padding: 16px;
  position: relative;

  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;

  border: 2px solid;
  border-radius: 10px;

  text-decoration: none;
  color: white;

  overflow: hidden;
  cursor: pointer;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
