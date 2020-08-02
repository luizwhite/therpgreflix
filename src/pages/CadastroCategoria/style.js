import styled from 'styled-components';
import { FormFieldWrapper } from '../../components/FormField/style';

export const ButtonForm = styled.button`
  width: 16rem;
  height: 100%;
  padding: 0.5rem;
  background-color: var(--primary-black-2);

  border: 2px solid #f5f5f5;
  border-radius: 6px;

  font-size: 1.2rem;
  font-weight: bold;
  color: #f5f5f5;

  transition: opacity 0.4s, border-color 0.4s;
  cursor: pointer;

  &:focus {
    opacity: 0.4;
  }

  @media not all and (max-width: 1200px) {
    opacity: 0.7;
    border-color: transparent;
    &:hover,
    &:focus {
      opacity: 1;
      border-color: #f5f5f5;
    }
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
