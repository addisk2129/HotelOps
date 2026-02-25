import styled, { css } from "styled-components";

export const StyledTableOperations = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;
  gap: 1.6rem;
  flex-wrap: wrap;
`;

export const OperationsLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

export const OperationsRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-left: auto;
`;

export const FilterGroup = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

export const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.8rem 1.6rem;
  transition: all 0.3s;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  &:hover:not(:disabled) {
    background-color: var(--color-brand-500);
    color: var(--color-brand-50);
  }

  & svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export const ViewToggle = styled.button`
  background: none;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      border-color: var(--color-brand-600);

      & svg {
        color: var(--color-brand-50);
      }
    `}

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-grey-600);
  }
`;

export const ActionButton = styled.button`
  background: none;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.6rem;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &:hover {
    background-color: var(--color-grey-100);
    border-color: var(--color-grey-300);
  }

  & svg {
    width: 1.8rem;
    height: 1.8rem;
    color: var(--color-grey-600);
  }
`;

export const SearchInput = styled.input`
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  font-size: 1.4rem;
  width: 25rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: var(--color-brand-600);
    box-shadow: 0 0 0 3px var(--color-brand-100);
  }

  &::placeholder {
    color: var(--color-grey-400);
  }
`;