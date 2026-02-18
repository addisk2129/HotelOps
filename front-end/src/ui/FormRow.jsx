
import styled from "styled-components";

// Main FormRow container
const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  // Add borders between rows (but not after the last one)
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  // Special styling for rows that contain buttons (like form actions)
  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

// Label styling
const Label = styled.label`
  font-weight: 500;
`;

// Error message styling
const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;


function FormRow({label,error,children}) {

  return (
    <StyledFormRow>
   { label && <Label htmlFor={children?.props?.id}>{label}</Label>}
   {children}
    {error && <Error>{error}</Error>}
  </StyledFormRow>
  )
}

export default FormRow
