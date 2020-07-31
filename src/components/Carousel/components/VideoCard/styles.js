import styled from 'styled-components';

const VideoCardContainer = styled.a`
  display: flex;
  width: var(--videoCard-container-width);
  height: var(--videoCard-container-height);
  padding: 16px;

  position: relative;

  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;

  border: 2px solid;
  border-radius: 10px;
  border-color: ${({ categoryColor }) => categoryColor};

  text-decoration: none;
  color: white;

  opacity: 0.6;
  overflow: hidden;
  cursor: pointer;
  transition: width 0.4s, height 0.4s, border-color 0.4s, transform 0.4s;

  &:not(:first-child) {
    margin-left: 20px;
  }

  @media (max-width: 800px) {
    width: var(--videoCard-container-width-mob);
    height: var(--videoCard-container-height-mob);
  }
`;

export default VideoCardContainer;
