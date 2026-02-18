import styled from "styled-components";
import { NavLink } from "react-router-dom";

import {
  IoHomeOutline,
  IoCalendarOutline,
  IoBedOutline,
  IoPeopleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/* ---------------- NAV LIST ---------------- */

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

/* ---------------- NAV LINK ---------------- */

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;

    padding: 1.2rem 2.4rem;
    border-radius: var(--border-radius-md);

    transition: all 0.3s;
    text-decoration:none;
  }

  /* Hover */
  &:hover {
    background-color: var(--color-grey-100);
    color: var(--color-brand-700);
  }

  /* Active route */
  &.active {
    background-color: var(--color-brand-100);
    color: var(--color-brand-700);
    font-weight: 600;
  }

  /* Icon styling */
  & svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.3s;
  }

  &.active svg {
    color: var(--color-brand-700);
  }
`;

/* ---------------- COMPONENT ---------------- */

function MainNav() {
  return (
    <nav>
      <NavList>
        {/* Dashboard */}
        <li>
          <StyledNavLink to="/dashboard">
            <IoHomeOutline />
            <span>Dashboard</span>
          </StyledNavLink>
        </li>

        {/* Bookings */}
        <li>
          <StyledNavLink to="/bookings">
            <IoCalendarOutline />
            <span>Bookings</span>
          </StyledNavLink>
        </li>

        {/* Cabins */}
        <li>
          <StyledNavLink to="/cabins">
            <IoBedOutline />
            <span>Cabins</span>
          </StyledNavLink>
        </li>

        {/* Users */}
        <li>
          <StyledNavLink to="/users">
            <IoPeopleOutline />
            <span>Users</span>
          </StyledNavLink>
        </li>

        {/* Settings */}
        <li>
          <StyledNavLink to="/settings">
            <IoSettingsOutline />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
