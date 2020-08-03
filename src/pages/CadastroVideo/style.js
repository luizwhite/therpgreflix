import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerTop = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  border: 1px solid var(--primary);
  border-radius: 4px;
  background-color: #281e15;

  @media (max-width: 800px) {
    margin-bottom: 4rem;
  }
`;

export const VideoDeleteInput = styled.input`
  width: 40vw;
  min-height: 100%;
  padding: .5rem;
  margin-right: 1rem;

  background-color: #484d51;

  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-radius: 6px;
  /* box-shadow: 0 0 2px 2px rgb(115, 115, 115, 0.7); */

  color: var(--grayLight);

  resize: none;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-bottom-color: var(--primary);
  }
`;
