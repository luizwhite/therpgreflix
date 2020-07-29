import styled from 'styled-components';

export const LogoFooterImage = styled.img`
  max-width: 280px;

  @media (max-width: 800px) {
    max-width: 200px;
  }
`;

export const FooterBase = styled.footer`
  height: 120px;
  padding: 25px 16px 0 16px;

  background-color: var(--black);
  border-top: 2px solid var(--primary);

  font-size: 12px;
  text-align: center;
  color: var(--white);

  @media (max-width: 800px) {
    height: 95px;
    padding-top: 15px;
    padding-bottom: 0;
    margin-bottom: 50px;
    font-size: 10px;
  }
`;
