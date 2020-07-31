import styled from 'styled-components';

export const PlaceholderSpan = styled.span`
  color: #404040;
  top: calc(5px + 1px);
  left: 3px;
  position: absolute;
  font-size: 16px;
  opacity: 0.3;
  transition: 0.3s;
`;

export const Label = styled.label`
  text-shadow: 1px 1px 2px rgb(230, 230, 230, 0.7);
`;

export const InputTagStyled = styled.input`
  background-color: #f2f2f2;
  outline: none;
  min-height: 2rem;
  padding: 1.5rem 5px 1rem 5px;
  width: 100%;
  font-size: 1.5rem;
  border-radius: 6px;
  border: 0;
  box-shadow: 0 0 6px 2px rgb(115, 115, 115, 0.7);
  margin-top: 5px;

  /* &:focus, &:hover {
    font-size: 1rem;
  } */

  &:focus + span,
  &:hover + span {
    font-size: 10px;
    font-style: italic;
    opacity: 0.6;
  }
`;
