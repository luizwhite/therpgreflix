import styled from 'styled-components';

export const ContentAreaContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-left: 5%;
  margin-right: 5%;

  position: relative;
  z-index: 10;

  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  display: inline-block;
  width: 50%;
  margin-bottom: 50px;

  &:first-child {
    margin-right: 5px;
    text-shadow: 2px 2px 4px rgb(200, 200, 200, 0.7);
  }
  &:last-child {
    box-shadow: 0 0 20px 6px rgb(115, 115, 115, 0.7);
  }

  @media (max-width: 800px) {
    width: 100%;

    &:first-child {
      margin-right: 0;
    }
    &:last-child {
      box-shadow: none;
    }
  }
`;

ContentAreaContainer.Title = styled.h2`
  margin-top: 0;
  margin-bottom: 32px;

  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 1;

  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;
ContentAreaContainer.Description = styled.p`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const WatchButton = styled.button`
  display: none;
  padding: 16px 24px;
  margin-left: auto;
  margin-right: auto;
  /* box-sizing: border-box; */
  background: var(--white);

  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  color: var(--black);

  border: 0;
  border-radius: 4px;
  border-color: var(--black);

  cursor: pointer;
  outline: none;
  transition: opacity 0.3s;

  &:focus,
  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    display: block;
  }
`;

export const BannerMainContainer = styled.section`
  height: calc(100vh - var(--bodyPaddingTop));
  position: relative;

  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;

  color: #fff;

  @media (max-width: 800px) {
    height: calc(100vh - var(--MenuPaddingTopMobile));
  }

  &:after,
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &:after {
    bottom: 0;

    /*checklater*/
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  }
`;

/*
ContentAreaContainer.Category = styled.h1`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 60px;
line-height: 70px;
display: flex;
align-items: center;
text-align: center;
display: inline-block;
padding: 25px;
line-height: 1;
border-radius: 4px;

@media (max-width: 800px) {
  display: none;
  font-size: 18px;
  padding: 10px;
}
`;
*/
