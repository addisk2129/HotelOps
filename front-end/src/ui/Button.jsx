import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 0.8rem 1.6rem;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1rem 2.4rem;
  `,
};

const variations = {
  primary: css`
    background-color: var(--color-brand-600);
    color: white;

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,

  secondary: css`
    background-color: var(--color-grey-100);
    color: var(--color-grey-700);

    &:hover {
      background-color: var(--color-grey-200);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  transition: all 0.2s;

  ${(props) => sizes[props.size || "medium"]}
  ${(props) => variations[props.variation || "primary"]}

  &:disabled {
    opacity: 0.5;
  }
`;

export default Button;
