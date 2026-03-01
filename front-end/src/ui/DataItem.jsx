import styled from "styled-components";

const StyledDataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem 0;
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;
  min-width: 12rem;
  color: var(--color-grey-500);
`;

const Content = styled.span`
  font-size: 1.4rem;
`;

function DataItem({ icon, label, children }) {
  return (
    <StyledDataItem>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      <Content>{children}</Content>
    </StyledDataItem>
  );
}

export default DataItem;