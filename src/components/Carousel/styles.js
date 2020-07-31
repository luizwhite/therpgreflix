import styled from 'styled-components';

export const VideoCardGroupContainer = styled.section`
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
  color: var(--white);

  @media (max-width: 800px) {
    margin-left: 0;
  }
`;

export const Title = styled.h3`
  display: inline-block;
  padding: 15px 15px;
  margin-top: .5rem;
  margin-bottom: 8px;

  background: red;
  border: 0;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;

  /* font-style: normal; */
  font-size: 1.75rem;
  font-weight: bold;
  font-family: 'Josefin Sans', sans-serif;
  line-height: 1;

  box-shadow: 0 0 20px 1px rgb(115, 115, 115, 0.7);

  @media (max-width: 800px) {
    padding: 10px;
    margin-left: 2%;

    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 3px;

    font-size: 1.125rem;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity 0.5s, font-size 0.5s;

  opacity: 0.5;

  &:hover,
  &:focus {
    font-size: 1.0625rem;
    opacity: 0.8;
  }

  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 2%;
    opacity: 0.7;
  }
`;

/*
export const VideoCardList = styled.ul`
  display: flex;
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  flex-direction: row;

  list-style: none;
  overflow-x: auto;

  li {
    margin-right: 16px;
  }
`;
*/
