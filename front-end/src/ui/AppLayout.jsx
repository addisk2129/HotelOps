import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import styled from "styled-components";

/* ---------------- APP GRID ---------------- */

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

/* ---------------- HEADER POSITION ---------------- */

const HeaderWrapper = styled.div`
  grid-column: 2 / -1;
`;

/* ---------------- SIDEBAR POSITION ---------------- */

const SidebarWrapper = styled.div`
  grid-row: 1 / -1;
`;

/* ---------------- MAIN AREA ---------------- */

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 3.2rem 4rem;
  overflow: auto;
`;

/* ---------------- CONTENT CONTAINER ---------------- */

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

/* ---------------- COMPONENT ---------------- */

function AppLayout() {
  return (
    <StyledAppLayout>
      {/* Sidebar */}
      <SidebarWrapper>
        <SideBar />
      </SidebarWrapper>

      {/* Header */}
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      {/* Page Content */}
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
