import styled from "styled-components";

/* ---------------- HEADER ---------------- */

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;

  border-bottom: 1px solid var(--color-grey-200);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* Right side container (future actions) */
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

/* ---------------- COMPONENT ---------------- */

function Header() {
  return (
    <StyledHeader>
      <h3>HotelOps Dashboard</h3>

      <HeaderRight>
      
        <span>Welcome 👋</span>
      </HeaderRight>
    </StyledHeader>
  );
}

export default Header;
