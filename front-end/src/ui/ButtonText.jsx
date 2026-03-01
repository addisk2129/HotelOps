import styled from "styled-components";

const ButtonText = styled.button`
  background: none;
  border: none;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-brand-600);
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;

  &:hover {
    color: var(--color-brand-700);
    text-decoration: underline;
  }

  & svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export default ButtonText;