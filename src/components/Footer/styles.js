import styled from 'styled-components';


export const FooterBase = styled.footer`
  background-color: var(--black);
  padding: 32px 16px;

  border-top: 2px solid var(--primary);

  text-align: center;
  color: var(--white);

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
