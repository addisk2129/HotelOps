import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvator from "../features/authenthication/UserAvator";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-200);
  display: flex;
  align-items: center;
  justify-content: flex-end;  /* Push everything to the right */
  gap: 2.4rem;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

function Header() {
  return (
    <StyledHeader>
      <RightSection>
        <UserAvator />
        <HeaderMenu />
      </RightSection>
    </StyledHeader>
  );
}

export default Header;