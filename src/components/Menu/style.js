import styled from 'styled-components';
import Button from '../Button';

export const LogoImage = styled.img`
  max-width: 350px;

  @media (max-width: 800px) {
    max-width: 200px;
    margin-top: 5px;
  }
`;

export const MenuWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 94px;

  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background-color: var(--black);
  border-bottom: 2px solid var(--primary);

  @media (max-width: 800px) {
    height: 50px;
    justify-content: center;
  }
`;

export const ButtonLink = styled(Button)`
  /* display: inline-block; */
  padding: 16px 24px;
  box-sizing: border-box;

  border: 1px solid var(--white);
  border-radius: 4px;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  color: var(--white);

  cursor: pointer;
  outline: none;
  transition: opacity .3s;

  &:hover, &:focus {
    opacity: .5;
  }

  @media (max-width: 800px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    background: var(--primary);
    border-radius: 0;
    border: 0;

    text-align: center;
  }
`;
