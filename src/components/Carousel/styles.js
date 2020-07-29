import styled from 'styled-components';

export const VideoCardGroupContainer = styled.section`
min-height: 197px;
margin-left: 5%;
margin-bottom: 16px;
color: var(--white);
`;

export const Title = styled.h3`
  display: inline-block;
  padding: 20px;
  margin-bottom: 8px;

  background: red;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;

  box-shadow: 0 0 20px 1px rgb(115, 115, 115,.7);


  /* font-style: normal; */
  font-size: 35px;
  font-weight: bold;
  font-family: 'Josefin Sans', sans-serif;
  line-height: 1;

  @media (max-width: 800px) {
    padding: 10px;
    font-size: 18px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }

  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

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
