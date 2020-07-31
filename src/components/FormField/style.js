import styled, { css } from 'styled-components';

export const FormFieldWrapper = styled.div`
  textarea {
    min-height: 150px;
  }
`;

export const PlaceholderSpan = styled.span`
  position: absolute;
  top: calc(5px + 1px);
  left: 3px;

  font-size: 20px;
  text-shadow: none;
  color: var(--grayLight);

  opacity: 0.3;
  transition: font 0.4s ease-in-out, transform 0.4s, opacity 0.4s;

  &:focus,
  &:hover {
    /* font-size: 12px; */
    font-style: italic;
    transform: scale(.7) translateX(-20%);
    opacity: 0.6;
  }
`;

export const Label = styled.label`
  text-shadow: 1px 1px rgb(230, 230, 230, 0.9);
`;

export const Input = styled.input`
  width: 100%;
  min-height: 2rem;
  padding: 1.5rem 5px 1rem 5px;
  margin-top: 5px;

  background-color: #484d51;

  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-radius: 6px;
  /* box-shadow: 0 0 2px 2px rgb(115, 115, 115, 0.7); */

  color: var(--grayLight);

  resize: none;
  font-size: 1.5rem;
  outline: none;

  &:focus {
    border-bottom-color: var(--primary);
  }

  &:focus + span,
  &:hover + span {
    /* font-size: 12px; */
    font-style: italic;

    transform: scale(.7) translateX(-20%);
    opacity: 0.6;
  }

  ${({ value }) => {
    const hasValue = value.length > 0;
    return (
      hasValue
      && css`
        + ${PlaceholderSpan} {
          /*transform: scale(.6) translateX(-20%);*/
          /* font-size: 12px; */
          font-style: italic;
          transform: scale(.7) translateX(-20%);
          opacity: 0.6;
        }
      `
    );
  }}
`;

export const ColorWrapper = styled.div`
  display: flex;
  align-items: center;
  text-shadow: none;
  padding: 1rem;

  span {
    margin-right: 2rem;
  }

  @media (max-width: 600px) {
    span {
      margin-right: .5rem;
    }
  }
`;

export const Color = styled.input`
  width: 20vw;
  padding: 0;
  border: 0;
  outline: none;
  /* box-shadow: 0 0 2px 1px rgb(115, 115, 115, 0.3); */
`;
