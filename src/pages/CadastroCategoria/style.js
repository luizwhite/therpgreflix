import styled from 'styled-components';

export const ButtonForm = styled.button`
  padding: .5rem;
  font-size: 1.2rem;
  border-radius: 6px;
  font-weight: bold;
  transition: opacity 0.3s, font-size 0.3s;
  border: 0;

  &:hover, &:focus {
    opacity: .7;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
