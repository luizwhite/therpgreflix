import styled from 'styled-components';

export const ButtonForm = styled.button`
  padding: 0.5rem;
  font-size: 1.2rem;
  border-radius: 6px;
  font-weight: bold;
  transition: opacity 0.3s, font-size 0.3s;
  border: 0;

  &:hover,
  &:focus {
    opacity: 0.7;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;

export const TitleH1 = styled.h1`
  text-shadow: 1px 1px 2px rgb(230, 230, 230, 0.7);
`;

export const Form = styled.form`
  width: 60%;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;
