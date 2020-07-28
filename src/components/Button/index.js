import styled from "styled-components";

const Button = styled.button`
  padding: 16px 24px;
  box-sizing: border-box;

  border: 1px solid var(--white);
  border-radius: 4px;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  color: var(--white);

  cursor: pointer;
  outline: none;
  transition: opacity .3s;

  &:hover, &:focus {
    opacity: .5;
  }

  @media (max-width: 800px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    background: var(--primary);
    border-radius: 0;
    border: 0;

    text-align: center;
  }
`;

export default Button;
