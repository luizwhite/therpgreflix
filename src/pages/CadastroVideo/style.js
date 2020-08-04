import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { InputContainer, CategorySelectInput } from '../CadastroCategoria/style';

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 240px;

  @media (max-width: 800px) {
    align-items: flex-start;
    justify-content: center;
  }
`;

export const InputContainerDeleteVideo = styled(InputContainer)`
  width: 100%;
  padding: 20px 0 14px 0;
  border-bottom: 1px solid;
  margin-left: 0;

  @media (max-width: 800px) {
    justify-content: space-between;
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

export const VideoDeleteInput = styled(CategorySelectInput)`
  width: 50%;
  margin-bottom: 0;
  margin-right: 2rem;

  @media (max-width: 800px) {
    margin-right: 1rem;
    width: 60%;
  }
`;

export const ButtonDeleteVideo = styled.button`
  text-decoration: none;
  padding: 1rem;
  border: 1px solid #ff0000;
  border-radius: 4px;
  background-color: #201313;
  color: white;
  font-size: 1rem;
  cursor: pointer;
`;
