import styled from 'styled-components';

export const ButtonForm = styled.button`
  width: 16rem;
  height: 4rem;
  padding: 0.5rem;
  background-color: var(--primary-black-2);

  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 1.2rem;
  font-weight: bold;
  color: #f5f5f5;

  opacity: 0.7;
  transition: opacity 0.5s, color 0.5s, border-color 0.5s;

  &:hover,
  &:focus {
    border-color: #f5f5f5;
    opacity: 1;
    color: var(--grayLight);
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width: 40%;
    min-width: 130px;
    font-size: 1rem;
  }
`;

export const TitleH1 = styled.h1`
  text-shadow: 1px 1px 2px rgb(230, 230, 230, 0.7);
`;

export const Form = styled.form`
  width: 100%;
  margin-bottom: 2rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  label {
    position: relative;
  }
  input[type='color'] {
    position: absolute;
    top: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;
