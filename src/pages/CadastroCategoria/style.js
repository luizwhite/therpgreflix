import styled from 'styled-components';
import { FormFieldWrapper } from '../../components/FormField/style';

export const ButtonForm = styled.button`
  width: 16rem;
  height: 100%;
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

export const HrBreak = styled.hr`
  width: 100%;
  border: 0;
  height: 1px;
  background-color: var(--primary);
  margin-top: 2rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 60px;

  label {
    display: flex;
  }

  > ${FormFieldWrapper} {
    height: 100%;
    background-color: #484d51;
    border-radius: 4px;
    box-sizing: border-box;
    border-bottom: 4px solid transparent;
    display: flex;
  }

  > ${FormFieldWrapper}:hover {
    border-bottom-color: var(--primary);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;
