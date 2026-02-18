import styled from "styled-components";

const Textarea = styled.textarea`
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  padding: 1rem 1.2rem;
  min-height: 10rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--color-brand-500);
    box-shadow: 0 0 0 2px var(--color-brand-100);
  }
`;

export default Textarea;
