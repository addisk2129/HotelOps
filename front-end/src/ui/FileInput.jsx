import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 1.4rem;

  &::file-selector-button {
    font: inherit;
    padding: 0.6rem 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    background-color: var(--color-brand-600);
    color: white;
    cursor: pointer;
    margin-right: 1.2rem;

    transition: background-color 0.2s;
  }

  &::file-selector-button:hover {
    background-color: var(--color-brand-700);
  }
`;

export default FileInput;
